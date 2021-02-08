import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REQ_BASE_URL
})

export default instance
