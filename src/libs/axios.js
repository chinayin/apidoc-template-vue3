import axios from 'axios'

// create an axios instance
const instance = axios.create({
  baseURL: '',
  timeout: 2000,
  headers: {'content-type': 'application/json'},
})

// request interceptor
instance.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers.Authorization = `Bearer ${getToken()}`
    // }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// respone interceptor
instance.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default instance
