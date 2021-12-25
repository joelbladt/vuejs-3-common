import axios, { AxiosInstance } from "axios"

const apiClient: AxiosInstance = axios.create({
    baseURL: "https://api.github.com",
})

export default apiClient
