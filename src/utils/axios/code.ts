/**
 * default handle errorCode page
 */
import { AxiosResponse, AxiosError } from 'axios';
import { RequestConfig } from './types';
import { useMessage } from '/@/hooks/useMessages';
const { createErrorModal } = useMessage();
const codeHandler = () => {
  return {
    responseResolve(response: AxiosResponse) {
      const data = response.data || {};
      if (response.status === 200 && data.code === 200) {
        return data;
      } else {
        return createErrorModal({
          title: '错误',
          content: data.message || '服务器响应出错',
        });
      }
    },
    responseReject(error: AxiosError) {
      // 如果配置设置自己处理异常, 就直接 reject
      const config = error.config as RequestConfig;

      // console.log(error.response);
      if (config && config.handleError) {
        return Promise.reject(error);
      }
      let promise = Promise.resolve();
      if (!error.response) {
        // 极端情况下
        createErrorModal({
          title: '错误',
          content: error.message || '请求发生错误, 请稍后再试',
        });
      }
      const { status = 0, data = {} } = error.response as AxiosResponse;
      if (status === 422) {
        createErrorModal({
          title: '错误',
          content: '参数错误',
        });
        // } else if (status === 401) {
        // } else if (status === 403) {
        // } else if (status === 413) {
        // } else if (status === 501) {
      } else if (status >= 400) {
        createErrorModal({
          title: '请求错误',
          content: data.message || (status === 404 ? '请求资源未找到' : '请求发生错误, 请稍后再试'),
        });
      } else {
        promise = Promise.resolve();
      }
      return promise.then(() => {
        const response = error.response;
        return {
          data: {
            code: response ? response.status : -1,
          },
        };
      });
    },
  };
};

export default codeHandler;
