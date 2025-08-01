import { useContext, useState } from "react";
import {  Outlet, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { loginUser } from "../Data/DataServices/LoginData";
import { AuthContext } from "../Context/AuthContext";

function LogIn() {
  let [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  let [Text, setText] = useState(false);
 
  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  let {login}=useContext(AuthContext);
  let navigate=useNavigate();
  
  
  let handleLogin = async (e) => {
    e.preventDefault();
    try{
      let res=await loginUser(userDetails)
      login(res.data.token)
    
      navigate("/dashboard")
       
      
    }
    catch(err){
      if(err.response?.status==403){
        alert("wrong email or password")
      }
      else{
        alert("Network error or no response from the server")
      }
      
    }
    
  };
  let handleReset = () => {
    setUserDetails({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-50 mt-19">
        <div className="container mx-auto ">
          <div className="pt-15  ">
            <form
              onSubmit={handleLogin}
              className="w-120 bg-white shadow-2xl  mx-auto p-5 rounded border-t-3 border-t-[#32b4a7]"
            >
              <h1 className="text-2xl font-semibold">Login Now</h1>

              <div className="flex flex-col mt-5">
                <label className="font-semibold mb-1">Your Email</label>
                <input
                  onChange={handleChange}
                  value={userDetails.email}
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Email"
                  className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7]"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label className="font-semibold mb-1">Your Password</label>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    value={userDetails.password}
                    type={Text ? "text" : "password"}
                    name="password"
                    required
                    
                    placeholder="Enter Password"
                    className="w-full outline-2 rounded outline-gray-300 p-2 focus:outline-[#32b4a7] pr-15"
                  />
                  <FaRegEye
                    onClick={() => setText(!Text)}
                    className={`  absolute right-5  text-2xl top-2 ${
                      Text ? "text-[#32b4a7]" : "text-gray-400"
                    } cursor-pointer`}
                  />
                </div>
              </div>

              <div className="flex gap-x-3 my-5">
                <button
                  type="submit"
                  className="bg-[#269a8e] text-white px-8 rounded py-2 cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={handleReset}
                  type="reset"
                  className="bg-blue-600 text-white px-8 rounded py-2 cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Outlet></Outlet>
    </>
  );
}

export default LogIn;
