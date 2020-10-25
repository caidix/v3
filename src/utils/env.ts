import { envConfig } from '../types/config';

export const getEnvConfig = (): envConfig => {
  const env = import.meta.env;
  return (env as unknown) as envConfig;
};
/**
 * 获取当前为"development" OR "product"
 */
export const getEnvMode = (): string => {
  return import.meta.env.MODE;
};
export const isEnvDev = (): boolean => {
  return import.meta.env.DEV;
};
export const isEnvProd = (): boolean => {
  return import.meta.env.PROD;
};
