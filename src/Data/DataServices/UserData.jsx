import axios from "axios";

let api = axios.create({
  baseURL: "http://localhost:8080/",
});

export let registerUser = (userData,agreement) =>{
  return api.post(`register-user?agreement=${agreement}`, userData);

};
 
export let addContact=(contactData,header)=>{
  return api.post('process-contact',contactData,{headers:header})
}
