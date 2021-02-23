import request from '/@/utils/axios';

// interface bannerProps {
//   banners?: Array<any>;
// }

export const getBanner = () => request.get('/banner?type=0');

export const getNewSongs = () => request.get('/personalized/newsong');

export const getPersonalized = (params: any) => request.get(`/personalized`, { params });

export const getPersonalizedMv = () => request.get(`/personalized/mv`);
