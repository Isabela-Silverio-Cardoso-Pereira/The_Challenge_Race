import axios from "axios"

const api = axios.create({
    baseURL: 'https://api-app-corrida.onrender.com/api-docs/#/User/post_users_'
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {id:3, name: 'José', email:'jose@gamil.com'},
        }//tirar num caso normal
        const response = await api.post('/token', {token})
        return response.data
    },
    signin: async (name: string, email: string, password: string) => {
        return {
            user: {id:3, name: 'José', email:'jose@gamil.com'},
            token: '123456789'
        }//tirar num caso normal
        const response = await api.post('/users', {name, email, password})
        return response.data
    },
    logout: async () => {
        return {status: true}
        const response = await api.post('/users')
        return response.data
    }
})