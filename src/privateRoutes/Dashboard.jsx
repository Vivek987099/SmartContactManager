
import { AuthContext } from "../Context/AuthContext";
import { NavLink, Outlet } from "react-router";
import { FaHome } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

import { LuLogOut } from "react-icons/lu";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";


function Dashboard() {

  let {logout}=useContext(AuthContext);
  
  let token=localStorage.getItem("token")
  let handleLogout = () => {
    logout(token);
  };
  let decodedToken=jwtDecode(token);
    
  return (
    <>
      <div className="flex flex-col min-h-screen  bg-gray-100   w-full rounded  ">
        <div className="flex flex-row w-full  ">
          <div className="flex w-full ">
            {/* Sidebar */}
            <aside className="w-[30%] h-screen   bg-white shadow-md p-4 hidden md:block ">
              <h1 className="text-3xl capitalize "> Smart Contacts</h1>

              <nav className="space-y-4 mt-5">
             
                <NavLink
                  to="/dashboard"
                  className="flex items-center gap-x-2 text-[20px] focus:text-[#32b4a7]  py-2 px-2 focus:bg-gray-100 text-gray-700 "
                >
                  {decodedToken ? (
                    <img
                      src={decodedToken.imgUrl}
                      width={35}
                      className="rounded-full"
                    />
                  ) : (
                    <IoMdContact />
                  )}
                  Your Profile
                </NavLink>
                <NavLink
                  to="/dashboard/view-contacts"
                  className="flex items-center gap-x-2 text-[20px] focus:text-[#32b4a7] rounded  py-2 px-2  focus:bg-gray-100 text-gray-700 "
                >
                  <RiContactsBook3Fill />
                  Contacts
                </NavLink>
                <NavLink
                  to="/dashboard/add-contact"
                  className="flex items-center gap-x-2 text-[20px] focus:text-[#32b4a7] py-2 px-2  focus:bg-gray-100 text-gray-700 "
                >
                  <FaPencilAlt />
                  Add Contact
                </NavLink>

                <NavLink
                  to="/dashboard/settings"
                  className=" flex items-center gap-x-2 text-[20px] py-2 px-2 focus:text-[#32b4a7] focus:bg-gray-100 text-gray-700 "
                >
                  <IoMdSettings />
                  Settings
                </NavLink>
                <NavLink
                  onClick={handleLogout}
                  className=" flex items-center gap-x-2 focus:text-[#32b4a7] text-[20px] py-2 px-2 focus:bg-gray-100 text-gray-700 "
                >
                  <LuLogOut />
                  Logout
                </NavLink>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex flex-col w-[100%]">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
