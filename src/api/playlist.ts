import request from '/@/utils/axios';

// 获取歌单
export const getPlaylists = (params) => request.get('/top/playlist', { params });
// 精品歌单
export const getTopPlaylists = (params) => request.get('/top/playlist/highquality', { params });
// 获取相似歌单
export const getSimiPlaylists = (id, option) => request.get(`/simi/playlist?id=${id}`, option);
// 热门歌单分类
export const getHotPlayListCategory = (params = {}) => request.get('/playlist/hot', { params });
// 获取歌单详情
export const getListDetail = (params = {}) => request.get('/playlist/detail', { params });
