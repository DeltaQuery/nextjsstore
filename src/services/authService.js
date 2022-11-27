import axios from "axios"
import { API } from "./API"

export const loginService = async credentials => {
    const { data } = await axios.post(`${API}/auth/login`, credentials)
    window.localStorage.setItem("nextStore-token", data.token)
    return data
}

export const logoutService = () => {
    window.localStorage.removeItem("nextStore-token")
}