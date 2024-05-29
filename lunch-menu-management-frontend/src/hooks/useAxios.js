import { useEffect } from 'react';
import { api } from '../api';
import useAuth from './useAuth';

export const useAxios = () => {
    const { auth, setAuth } = useAuth()
    useEffect(() => {
        const requestIntercept = api.interceptors.request.use(
            (config) => {
                if (auth?.token) {
                    config.headers.Authorization = `${auth?.token}`
                }
                return config
            },
            (error) => Promise.reject(error)
        )

        return () => {
            api.interceptors.request.eject(requestIntercept)
        }
    }, [auth.token])

    return { api }
}