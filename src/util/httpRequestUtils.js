import axios from './service'

function getToken() {
  return localStorage.getItem('authenticated_user')
}

// Request interceptor
axios.interceptors.request.use(
  function(config) {
    // Makes request configurations before request is sent
    config.headers.Authorization = `Bearer ${getToken()}`
    return config
  },
  function(error) {
    // Handles error with request error
    return Promise.reject(error)
  }
)

const Request = {
  postRequest(endpoint, data) {
    return axios.post(endpoint, data)
  },

  getRequest(endpoint) {
    return axios.get(endpoint)
  },
  getBufferRequest(endpoint) {
    return axios.get(endpoint, {
      responseType: 'arraybuffer',
    })
  },
  patchRequest(endpoint, data) {
    return axios.patch(endpoint, data)
  },
  deleteRequest(endpoint) {
    return axios.delete(endpoint)
  },
}

export default Request
