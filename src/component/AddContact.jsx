import React, { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { addContact } from "../Data/DataServices/UserData";

function AddContact() {
  let [contactData, setContactData] = useState({
    name: "",
    secondName: "",
    email: "",
    work: "",
    phone: "",
    description: "",
    image: null,
  });

  let handleContactData = (e) => {
    let { name, value, files } = e.target;
    if (name === "image") {
      setContactData({ ...contactData, image: files[0] });
    } else {
      setContactData({ ...contactData, [name]: value });
    }
  };

  let sendContactDetails = async () => {
    let token = localStorage.getItem("token");
    let formData = new FormData();
    formData.append("name", contactData.name);
    formData.append("secondName", contactData.secondName);
    formData.append("email", contactData.email);
    formData.append("work", contactData.work);
    formData.append("phone", contactData.phone);
    formData.append("description", contactData.description);
    if (contactData.image) {
      formData.append("image", contactData.image);
    }
    let header = {
      Authorization: `Bearer ${token}`,
    };
    try {
      let res = await addContact(formData, header);
      if (res.status === 200) {
        alert("contact save successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  let submitContactDetails = (e) => {
    e.preventDefault();
    sendContactDetails();
    setContactData({
      name: "",
      secondName: "",
      email: "",
      work: "",
      phone: "",
      description: "",
      image: null,
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-white">
        <form
          action=""
          onSubmit={submitContactDetails}
          className="bg-white w-[75%]  h-full mx-auto p-5 rounded "
        >
          <h1 className="text-3xl  mb-10">Fill Contact Details</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2 text-center">
              <input
                required
                type="file"
                name="image"
                onChange={handleContactData}
                className="text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
              />
            </div>
            <div>
              <label className="font-semibold mb-1">First Name :</label>
              <input
                onChange={handleContactData}
                value={contactData.name}
                type="text"
                name="name"
                required
                placeholder="first name"
                className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7] pr-15"
              />
            </div>
            <div>
              <label className="font-semibold mb-1">Nick Name :</label>
              <input
                type="text"
                onChange={handleContactData}
                value={contactData.secondName}
                name="secondName"
                required
                placeholder="second name"
                className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7] pr-15"
              />{" "}
            </div>
            <div>
              <label className="font-semibold mb-1">Email :</label>
              <input
                onChange={handleContactData}
                value={contactData.email}
                type="email"
                name="email"
                required
                placeholder="email"
                className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7] pr-15"
              />{" "}
            </div>
            <div>
              <label className="font-semibold mb-1">Work :</label>
              <input
                onChange={handleContactData}
                value={contactData.work}
                type="text"
                name="work"
                required
                placeholder="Work"
                className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7] pr-15"
              />{" "}
            </div>
            <div className="col-span-2">
              <label className="font-semibold mb-1">Phone :</label>
              <input
                onChange={handleContactData}
                value={contactData.phone}
                type="tel"
                name="phone"
                required
                placeholder="phone"
                className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7] pr-15"
              />{" "}
            </div>

            <div className="col-span-2">
              <label className="font-semibold mb-1">
                Write something about this contact :
              </label>
              <textarea
                onChange={handleContactData}
                value={contactData.description}
                name="description"
                rows={5}
                required
                placeholder="Write something about contact..."
                className="w-full resize-none outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7] pr-15"
              ></textarea>
            </div>
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="bg-[#269a8e] text-white px-8 rounded py-2 cursor-pointer"
            >
              save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddContact;
