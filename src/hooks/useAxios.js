import axios from 'axios'

const instance = axios.create();

const useAxios = (url, headers) => {
  instance.interceptors.request.use(
    (config) => {
      config.baseURL = url;
      config.headers = { ...headers };
      return config;
    },
    (error) => {
      throw new Error(error);
    }
  );

  return instance;
};

export default useAxios;
