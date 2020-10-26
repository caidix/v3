import { ref, unref, Ref } from 'vue';
/**
 * 如果元素被允许进入全屏幕模式，返回的Promise会resolve，并且该元素会收到一个fullscreenchange事件，
 * 通知它已经进入全屏模式。如果全屏请求被拒绝，返回的promise会变成rejected并且该元素会收到一个fullscreenerror事件。
 * 如果该元素已经从原来的文档中分离，那么该文档将会收到这些事件。
 * 此screen fork于vben-admin项目 ，stars
 */
type RFSMethods =
  | 'requestFullscreen'
  | 'msRequestFullscreen'
  | 'mozRequestFullScreen'
  | 'webkitRequestFullScreen';

type EFSMethods =
  | 'exitFullscreen'
  | 'mozCancelFullScreen'
  | 'webkitExitFullscreen'
  | 'msExitFullscreen';
type FSElement =
  | 'fullscreenElement'
  | 'webkitFullscreenElement'
  | 'msFullscreenElement'
  | 'mozFullScreenElement';
type OnFSChange = 'onfullscreenchange' | 'onwebkitfullscreenchange' | 'MSFullscreenChange';
export function useFullScreen(
  target: Ref<Nullable<HTMLElement>> = ref(document.documentElement),
  options: FullscreenOptions,
) {
  const isFullScreenRef = ref(false);
  const doc = document.documentElement;
  let OPEN_FS_NAME: RFSMethods = 'requestFullscreen';
  let EXIT_FS_NAME: EFSMethods = 'exitFullscreen';
  let FS_ELEMENT_NAME: FSElement = 'fullscreenElement';
  let FS_CHANGE_NAME: OnFSChange = 'onfullscreenchange';
  if ('webkitRequestFullScreen' in doc) {
    OPEN_FS_NAME = 'webkitRequestFullScreen';
    EXIT_FS_NAME = 'webkitExitFullscreen';
    FS_ELEMENT_NAME = 'webkitFullscreenElement';
    FS_CHANGE_NAME = 'onwebkitfullscreenchange';
  } else if ('msRequestFullscreen' in doc) {
    OPEN_FS_NAME = 'msRequestFullscreen';
    EXIT_FS_NAME = 'msExitFullscreen';
    FS_ELEMENT_NAME = 'msFullscreenElement';
    FS_CHANGE_NAME = 'MSFullscreenChange';
  } else if ('mozRequestFullScreen' in doc) {
    OPEN_FS_NAME = 'mozRequestFullScreen';
    EXIT_FS_NAME = 'mozCancelFullScreen';
    FS_ELEMENT_NAME = 'mozFullScreenElement';
  } else if (!('requestFullscreen' in doc)) {
    throw new Error('当前浏览器不支持Fullscreen API !');
  }

  function openFullScreen(): Promise<void> {
    isFullScreenRef.value = true;
    return (target.value as any)[OPEN_FS_NAME](options);
  }
  function exitFullscreen(): Promise<void> {
    isFullScreenRef.value = false;
    return (document as any)[EXIT_FS_NAME](options);
  }

  function isFullscreen(): boolean {
    return unref(target) === (document as any)[FS_ELEMENT_NAME];
  }
  function toggleFullscreen(): Promise<void> {
    if (isFullscreen()) {
      return exitFullscreen();
    } else {
      return openFullScreen();
    }
  }
  // 设置全屏.退出全屏监听
  function listenHandlerScreen(callback: () => {}) {
    const cancel = () => {
      const t = unref(target);
      t && ((t as any)[FS_CHANGE_NAME] = null);
    };
    (target.value as any)[FS_CHANGE_NAME] = callback;
    return {
      cancel,
    };
  }
  return {
    openFullScreen,
    exitFullscreen,
    isFullscreen,
    isFullScreenRef,
    toggleFullscreen,
    listenHandlerScreen,
  };
}
