import axios from './service'

// // Request interceptor
// axios.interceptors.request.use(
//   function(config) {
//     // Makes request configurations before request is sent
//   },
//   function(error) {
//     // Handles error with request error
//     return Promise.reject(error)
//   }
// )

const Request = {
  // Handles post request
  postRequest(endpoint, data) {
    return axios.post(endpoint, data)
  },
  // Handles get requests
  getRequest(endpoint) {
    return axios.get(endpoint)
  },
  // Hnadles get request for files
  getBufferRequest(endpoint) {
    return axios.get(endpoint, {
      responseType: 'arraybuffer',
    })
  },
  // Handles patch requests
  patchRequest(endpoint, data) {
    return axios.patch(endpoint, data)
  },
  // Handles delete requesrt
  deleteRequest(endpoint) {
    return axios.delete(endpoint)
  },
}

export default Request
