import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

// Request interceptor
api.interceptors.request.use(config => {
  console.log('Sending request to:', config.url)
  return config
})

// Response interceptor
api.interceptors.response.use(
  response => {
    console.log('Received response:', response.data)
    return response
  },
  error => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

export default api