import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const postNumber = object =>{
    const request = axios.post(baseUrl,object)
    return request.then(response => response.data)
}

const deleteNumber = (id) => {
    const url = `${baseUrl}/${id}`
    const request = axios.delete(url)
    return request.then(response => response.data)
}

export default {getAll, postNumber, deleteNumber}