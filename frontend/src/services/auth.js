import api from './api'

export const login = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials)
        localStorage.setItem('token', response.data.token)
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed')
    }
}

export const logout = () => {
    localStorage.removeItem('token')
}

export const getAuthHeader = () => {
    const token = localStorage.getItem('token')
    return token ? {Authorization: `Bearer ${token}`} : {}
}