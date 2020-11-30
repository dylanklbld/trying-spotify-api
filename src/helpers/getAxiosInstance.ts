import axios from 'axios';

const axiosClient = () => {
  const defaultOptions = {
    baseURL: 'https://api.spotify.com/v1/browse/',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
 
    const { access_token } = JSON.parse(localStorage.getItem('parameters') || '{}')
    if(access_token){
        config.headers.Authorization = `Bearer ${access_token}`
    }
   
    return config;
  }, 
  error => Promise.reject(error));

  return instance;
};

export default axiosClient();