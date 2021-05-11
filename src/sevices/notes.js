import axios from 'axios'
const baseUrl = 'http://localhost:3000/notes'

const getAll = ()=>{
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

const addNote = (noteObj) =>{
    const request = axios.post(baseUrl,noteObj)
    return request.then(res=>res.data)
}
const modify = (id,obj) =>{
    const request = axios.put(baseUrl+'/'+id,obj)
    return request.then(res=>res.data)
}
const noteSevices = {
    getAll,
    addNote,
    modify
}

export default noteSevices