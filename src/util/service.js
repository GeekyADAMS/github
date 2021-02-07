import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ona.travelwahoo.com', // remember to load this from an environment variable
})

export default instance
