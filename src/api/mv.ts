import request from '/@/utils/axios';
export interface MvsProps {
  area?: string;
  limit: number;
  order?: string;
  offset?: string;
}

export const getNewMvs = (params: MvsProps) => request.get('/mv/first', { params });

export const getAllMvs = (params: MvsProps) => request.get('/mv/all', { params });

export const getSimiMvs = (id: number) => request.get(`/simi/mv?mvid=${id}`);

export const getPersonalizedMvs = (params: MvsProps) => request.get('/personalized', { params });
