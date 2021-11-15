import axios from "axios";

const refreshToken = () => {
    url = 'http://localhost:8000/api/token/refresh/'
    axios.get(url, localStorage.getItem('refresh-token'))
    .then(response => localStorage.setItem('token', response.access))
}

export default axios.interceptors.response.use(
    (response) => {
      return res;
    },
    async (error) => {
      const originalConfig = error.config;
      if (error.response) {
        if (error.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
  
          refreshToken()
          // return a request
          return axios_instance(config);
        }
  
        if (error.response.status === ANOTHER_STATUS_CODE) {
            localStorage.clear()
          return Promise.reject(error.response.data);
        }
      }
  
      return Promise.reject(error);
    }
  );