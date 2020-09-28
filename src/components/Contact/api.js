import * as axios from 'axios'


const api = axios.create({
    baseURL: 'https://smtp-nodeserver.herokuapp.com/',
})

export const sendData = (data) => api.put('sendMessage', data)
