import React, { useContext, useEffect, useState } from "react";

import { getContacts } from "./../Data/DataServices/ContactData";
import { jwtDecode } from "jwt-decode";
import { Outlet } from "react-router";
import ContactCard from "./ContactCard";
import Pagination from './Pagination';
import { GlobalContext } from "../Context/GlobleContext";

function ViewContact() {

  let [contactData, setContactData] = useState([]);
  let [toggle, setToggle] = useState(false);
  let [currentContact,setCurrentContact]=useState()
  let token = localStorage.getItem("token");
  let decodedToken = jwtDecode(token);
  let header = {
    Authorization: `Bearer ${token}`,
  };
  let {setTotalPages,setCurrentPage}=useContext(GlobalContext);
  let getContactData = async (page) => {
    
    
    let res = await getContacts(decodedToken.id, header,page,10);
    setContactData(res.data.contacts);
    setTotalPages(res.data.totalPage)
    setCurrentPage(res.data.currentPage)
    
  };
  
  useEffect(() => {
    getContactData();
   
  }, []);
    
   const removeContactFromList = (id) => {
    setContactData((prev) => prev.filter((c) => c.cId !== id));
  };
  return (
    <>
      <div className="w-full relative h-full">
        <table className=" w-[80%] mx-auto  mt-10 overflow-hidden">
          <tbody>
            {
              contactData.length > 0 ? contactData.map((contact, id) => (
              <tr
                onClick={()=>{setToggle(true);setCurrentContact(contact)}}


                key={id}
                className="rounded-xl bg-whiteborder-gray-600 cursor-pointer hover:bg-gray-300 transition-all duration-50 "
              >
                <td className="px-5 border-b-2 border-gray-200  ">
                  <div className="my-2">
                    <img
                      src={contact.image?"http://localhost:8080/images/" + contact.image:"http://localhost:8080/images/img_avatar.png"}
                      alt=""
                      className="size-10 rounded-full"
                    />
                  </div>
                </td>
                <td className="px-5  border-b-2 border-gray-200 ">
                  {contact.name + "  " + contact.secondName}
                </td>
                <td className="px-5  border-b-2 border-gray-200">
                  {contact.email}
                </td>
                <td className="px-5  border-b-2 border-gray-200">
                  {contact.phone}
                </td>
              </tr>
            )):<div className=" text-center w-full text-gray-500 py-5 flex justify-center "><h1 className="text-3xl">there no contacts</h1></div>
            }
          </tbody>
          <tbody></tbody>
        </table>
        <Pagination getContactData={getContactData}></Pagination>
        <div>{toggle ? <ContactCard onDeleted={removeContactFromList} setToggle={setToggle} currentContact={currentContact}></ContactCard> : null}</div>
      </div>
    </>
  );
}

export default ViewContact;
