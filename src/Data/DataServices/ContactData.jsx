import axios from "axios";

let api = axios.create({
  baseURL: "http://localhost:8080/contact",
});

export let getContacts = (id, header, page , pageSize ) => {
  return api.get(`/contacts/${id}?`, {
    headers: header,
    params: {
      page,
      size: pageSize,
    },
  });
};

export let deleteCotact=(id,header)=>{
  return api.delete(`/contacts/${id}`, {headers: header});
}

