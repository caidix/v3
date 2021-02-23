<template>
  <a-spin :spinning="loadingRef">
    <form-block>
      <template #title>
        <h2>新歌首发</h2>
      </template>
      <div class="song-list">
        <div v-for="({ id, name, song }, index) in songRef" :key="index" class="song-list__item">
          <div class="song-list__box">
            <div class="playlist-item__imgwarp">
              <img class="playlist-item__img" :src="genImgUrl(song.album.blurPicUrl, 120)" alt="" />
              <PlayCircleOutlined :style="{ fontSize: '32px' }" class="playlist-item__icon" />
            </div>
            <div class="playlist-item__name text-overflow">{{ name }}</div>
            <singer :singers="song.artists" class="playlist-item__author gary" />
            <div class="playlist-item__time gary">{{ song.duration }}</div>
          </div>
        </div>
      </div>
    </form-block>
  </a-spin>
</template>

<script lang="ts">
import { LoadingHook } from '/@/hooks/useLoading';
import FormBlock from '../FormBlock.vue';
import { getPersonalizedSong } from '/@/api/songs';
import { handleSongs, genImgUrl } from '/@/utils/common';
import { onMounted, ref } from 'vue';
import { PlayCircleOutlined } from '@ant-design/icons-vue';
import Singer from '../Singer';
export default {
  name: 'TopSongs',
  components: {
    FormBlock,
    PlayCircleOutlined,
    Singer,
  },
  setup() {
    const { loadingRef, loading, loaded } = LoadingHook();
    const songRef = ref<Nullable<Array<any>>>(null);

    const getSongs = async (): Promise<void> => {
      const { result }: any = await getPersonalizedSong();
      result.length = 9;
      songRef.value = handleSongs(result) as Array<any>;
    };
    onMounted(() => {
      getSongs();
    });
    return {
      loadingRef,
      songRef,
      loading,
      loaded,
      genImgUrl,
    };
  },
};
</script>
<style lang="scss" scoped>
.song-list {
  .song-list__item {
    display: inline-block;
    width: 33.3%;
    height: 86px;
    margin: 4px 0 32px;
    font-size: 14px;
  }

  .song-list__box {
    position: relative;
    height: 86px;
    margin: 0 10px 13px 10px;
    font-size: 14px;
    border-top: 1px solid #f2f2f2;
  }

  .playlist-item__imgwarp {
    float: left;
    width: 86px;
    height: 86px;
    padding: 0;
    margin-right: 14px;

    .playlist-item__icon {
      top: 50%;
      left: 50%;
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  .playlist-item__name {
    max-width: 50%;
    padding: 21px 0 2px;
    font-weight: 400;
  }

  .playlist-item__author {
    max-width: 45%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .playlist-item__time {
    position: absolute;
    right: 0;
    bottom: 0;
    line-height: 86px;
  }
}
</style>
