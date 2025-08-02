import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiEditBoxLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { deleteCotact } from "../Data/DataServices/ContactData";
// ContactCard component to display contact details and handle deletion
function ContactCard({ setToggle, currentContact,onDeleted }) {
  let token = localStorage.getItem("token");
  let header = {
    Authorization: `Bearer ${token}`,
  };
// DELETE CONTACT HERE
  let handleDeleteContact = async () => {
    let res = await deleteCotact(currentContact.cId, header);
    if (res.status === 200) {
      alert("Contact deleted successfully");
      onDeleted(currentContact.cId);
      setToggle(false);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className=" bg-gray-50 p-5 h-auto w-110 absolute top-18 left-[30%] rounded shadow-2xl pb-10">
     

      <div className="flex justify-between items-center text-2xl m-1">
        <div
          onClick={() => {
            setToggle(false);
          }}
          className="size-7 bg-[#32b4a7] cursor-pointer  flex justify-center items-center rounded-full"
        >
          <IoMdArrowRoundBack className="text-white" />
        </div>
        <div className="flex gap-x-5">
          <div>
            <RiEditBoxLine className="cursor-pointer " />
          </div>
          <div>
            <MdOutlineDeleteOutline
              onClick={handleDeleteContact}
              className="cursor-pointer text-red-600"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center m-10">
        <div className="">
          <img
            src={"http://localhost:8080/images/" + currentContact.image}
            className="size-30 rounded-full"
            alt=""
          />
        </div>
        <h1 className="font-semibold mt-3 text-2xl mb-2">
          {currentContact.name + " " + currentContact.secondName}
        </h1>
      </div>

      <div className="flex items-center gap-x-5 my-2">
        <IoCallOutline className="text-2xl text-green-600" />
        <div>
          <h1>{currentContact.phone}</h1>
          <small className="text-gray-500">Phone</small>
        </div>
      </div>
      <div className="h-[2px] rounded w-full bg-gray-300"></div>

      <div className="flex items-center gap-x-5 my-3">
        <MdOutlineEmail className="text-2xl" />

        <div>
          <h1>{currentContact.email}</h1>
          <small className="text-gray-500">Email</small>
        </div>
      </div>

      <div className="my-3">
        <span className="font-semibold">Work :</span>
        <p className="inline ml-2 capitalize">{currentContact.work}</p>
      </div>
      <p>
        {" "}
        <span className="font-semibold">About :</span>{" "}
        {currentContact.description}
      </p>
    </div>
  );
}

export default ContactCard;
