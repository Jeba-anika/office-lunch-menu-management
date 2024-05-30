import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://office-lunch-menu-management-sage.vercel.app'
})