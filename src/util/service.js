import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com' // Can be loaded from env
})

export default instance
