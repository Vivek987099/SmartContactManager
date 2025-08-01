import axios from "axios";

let api=axios.create({
    baseURL:"http://localhost:8080",
})
export let loginUser=(loginData)=>{
    return api.post("/doLogin",loginData);
}
export let getContacts=()=>{
    return api.get()
}
