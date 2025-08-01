import axios from "axios";

let api=axios.create({
    baseURL:"http://localhost:8080/contact",
})

export let getContacts=(id,header)=>{
    return api.get(`/contacts/${id}?`,{headers:header})
}