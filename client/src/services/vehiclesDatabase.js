import axios from 'axios'

let baseUrl = '/api/vehicles'

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3003/api/example'
}

const getAll = () => {
    return axios.get(baseUrl)
}

export default { getAll }