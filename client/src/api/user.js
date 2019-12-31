import axios from 'axios';

export const apiLogin = request_data => {
  return axios.post('http://localhost:5000/api/v1/auth', request_data);
};
export const apiSaveUser = register => {
  return axios.post('http://localhost:5000/api/v1/register', register);
};

export const apitFetchProfile = () => {
  return axios.get('http://localhost:5000/api/v1/me');
}