import axios, {AxiosRequestConfig} from "axios";

interface FetchResponse<T> {
    kind: string
    totalItems: number
    items: T[]
}


const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books',
    params: {
        key: 'AIzaSyAISAQYDzw1fqSlGiv1cCyq6iOj8JPcZcM'
    }
})

class APIClient<T> {
    endpoint: string

    constructor (endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = async (config: AxiosRequestConfig) => {
        return await axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }

    get = async (id: string) => {
        const res = await axiosInstance.get<T>(this.endpoint + '/' + id);
        return res.data;
    }
}

export default APIClient