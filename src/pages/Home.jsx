import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { registerUser } from './../Data/DataServices/UserData';

function Home() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  let [Text, setText] = useState(false);
  let [agreement, setAgreement] = useState(false);
  let [errors, setErrors] = useState("");
  let handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    setUser({ ...user, [name]: type === "checkbox" ? checked : value });
  };
  let postUserData = async () => {
    try {
      let res = await registerUser(user, agreement);

      if (res.status === 200) {
        alert("registered successfully");
        setUser({
          name: "",
          email: "",
          password: "",
          about: "",
        });
        setErrors("");
      }
    } catch (err) {
      if (err.response) {
        setErrors(err.response.data);

        if (err.response.status === 500) {
          alert(errors);
        }
        if(err.response.status===400){
          alert(errors)
        }
      } else {
        alert("User could not be save due to server error");
      }
    }
  };
  let handleUserSubmit = (e) => {
    e.preventDefault();

    postUserData();
   
  };
  return (
    <>
      <div id="home" className="lg:mt-19 pb-8 bg-gray-300">
        <div className="capitalize min-h-screen container mx-auto flex flex-col-reverse lg:flex-row">
          <div className="   lg:w-1/2 ">
            <form
              onSubmit={handleUserSubmit}
              className="bg-white lg:mt-10 w-[90%] md:w-[70%]  mx-auto p-5 rounded border-t-3 border-t-[#32b4a7]"
            >
              <h1 className="text-2xl font-semibold">Register Now</h1>

              <div className="flex flex-col mt-4">
                <label className="font-semibold mb-1">Your Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  value={user.name}
                  name="name"
                  placeholder="Enter Name"
                  className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7]"
                />{" "}
                {<p className="text-red-600 mt-1.5">{errors.name}</p>}
              </div>
              <div className="flex flex-col mt-5">
                <label className="font-semibold mb-1">Your Email</label>
                <input
                  onChange={handleChange}
                  value={user.email}
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7]"
                />
                {<p className="text-red-600 mt-1.5">{errors.email}</p>}
              </div>
              <div className="flex flex-col mt-5">
                <label className="font-semibold mb-1">Your Password</label>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    value={user.password}
                    type={Text?"text":"password"}
                    
                    name="password"
                    placeholder="Enter Password"
                    className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7]"
                  />
                  <FaRegEye
                    onClick={() => setText(!Text)}
                    className={`  absolute right-5  text-2xl top-2  ${
                      Text ? "text-[#32b4a7]" : "text-gray-400"
                    } cursor-pointer`}
                  />
                </div>
                {<p className="text-red-600 mt-1.5">{errors.password}</p>}
              </div>
              <div className="mt-5">
                <textarea
                  name="about"
                  onChange={handleChange}
                  spellCheck={true}
                  rows={6}
                  value={user.about}
                  placeholder="Enter something yourself"
                  className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7]"
                ></textarea>
              </div>
              <div className="my-1.5">
                <input
                  onChange={(e) => setAgreement(e.target.checked)}
                  checked={agreement}
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                />
                <label className="ml-1" htmlFor="agreement">
                  Accept terms & condition
                </label>
              </div>
              <div className="flex gap-x-3 my-5">
                <button
                  type="submit"
                  className="bg-[#269a8e] text-white px-8 rounded py-2"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="bg-blue-600 text-white px-8 rounded py-2"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 p-5 ">
            <div className="lg:p-10 w-full  flex flex-col  h-full items-start md:mt-0 lg:mt-18">
              <h1 className="text-4xl lg:text-6xl font-bold text-center  w-full text-white">
                Welcome to Smart Contact
              </h1>
              <p className="text-center hidden md:block my-5 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                repellendus ipsum sunt ullam? Beatae optio, vel eaque molestias
                unde ipsa exercitationem nesciunt porro labore, dicta itaque
                doloribus animi a recusandae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
