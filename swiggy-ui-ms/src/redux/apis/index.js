import axios from 'axios';

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('access_token')
    config.headers = { 
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config;
  },
  error => {
    Promise.reject(error)
  }
)
axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
   // logic to get a new token            
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + 'new token';
    return axiosApiInstance(originalRequest);
  }
  return Promise.reject(error);
});

export default axiosApiInstance;