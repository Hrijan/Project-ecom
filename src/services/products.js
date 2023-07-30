import axios from "axios";

const baseurl = 'https://dummyjson.com/products'

const getAll = () => {
    const request = axios.get(baseurl)
    return request.then(response => response.data.products)
}

export default { getAll }