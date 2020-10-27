import { Modal, message as Message, notification } from 'ant-design-vue';
import { ModalOptions } from 'ant-design-vue/types/modal';
function createSuccessModal(options: ModalOptions) {
  return Modal.success(options);
}
function createErrorModal(options: ModalOptions) {
  return Modal.error(options);
}
function createInfoModal(options: ModalOptions) {
  return Modal.info(options);
}
function createWarningModal(options: ModalOptions) {
  return Modal.warning(options);
}
function createConfirmModal(options: ModalOptions) {
  return Modal.confirm(options);
}
notification.config({
  placement: 'topRight',
  duration: 3,
});
export function useMessage() {
  return {
    createMessage: Message,
    notification,
    createSuccessModal,
    createErrorModal,
    createInfoModal,
    createWarningModal,
    createConfirmModal,
  };
}
