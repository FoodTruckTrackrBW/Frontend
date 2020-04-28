import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  console.log({authorization: token})
  return axios.create({ 
      headers: {
          authorization: token
      },
    })
}

export default axiosWithAuth