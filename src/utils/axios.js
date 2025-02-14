import axios from "axios";
import { API_URL } from "./constant";

export const getPublicRequest = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: {
        "Content-Type":"application/json"
    }

})
export const getPrivateRequest = axios.create({
    baseURL: API_URL,
    setTimeout: 5000,
    headers: {
        "Content-Type":"application/json"
    }

})
    
