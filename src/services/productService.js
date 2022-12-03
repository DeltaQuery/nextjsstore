import axios from "axios"
import { config, token } from "./config"

axios.defaults.baseURL = 'https://privatebackend-production.up.railway.app'

export const getProducts = async () => {
    try {
           const { data } = await axios.get(`/api/products`)
           return data
       } catch (err) {
           console.log(err)
       }
}

export const addProduct = async product => {
    try {
        const { data } = await axios.post(`/api/products`, product, config)
        return data
    } catch (err) {
        console.log(err)
    }
}

export const removeProduct = async id => {
    try {
        const { data } = await axios.delete(`/api/products/${id}`, config)
        return data
    } catch (err) {
        console.log(err)
    }
}

export const updateProduct = async (id, product) => {
    try {
        const { data } = await axios.put(`/api/products/${id}`, product, config)
        return data
    } catch (err) {
        console.log(err)
    }
}

export const uploadImage = async image => {
    const { data } = await axios.post(`/api/upload`, image,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
    return data
}