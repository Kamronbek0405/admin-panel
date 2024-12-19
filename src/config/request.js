import axios from "axios";
import {loadState} from './storage'


export const request = axios.create({baseURL: "https://realauto.limsa.uz/api"})

request.interceptors.request.use((config) =>{
    config.headers = {...config.headers,
         
    Authorization: `Bearer ${loadState("user")?.data?.tokens?.accessToken?.token}`

    }
    return config
});


request.interceptors.response.use((res) => res, (error) =>{
    if(error.status == 401 ){
        localStorage.removeItem("user")
        window.location.href = "/login"
    }
    return error
})
