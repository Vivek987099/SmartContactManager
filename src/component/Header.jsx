import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CanvasMenu from "./CanvasMenu";

function Header() {
  let [menu, setMenu] = useState(false);
  return (
    <>
      <header className="bg-[#32b4a7] w-full h-19 text-white fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-5 px-5 lg:px-0">
          <div className="  text-white">
            <h1 className="text-2xl lg:text-3xl font-semibold">Smart Contact</h1>
          </div>
          <ul className="uppercase hidden lg:flex gap-x-5 font-semibold text-[#b8f6f0]">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/login">log in</NavLink>
            </li>
          </ul>
          <div onClick={() => setMenu(!menu)} className="lg:hidden text-2xl">
            {menu ? <IoIosCloseCircleOutline /> : <MdOutlineMenu />}
          </div>
        </div>
        
      </header>
      {menu?<CanvasMenu   setMenu={setMenu}/>:null}
      <Outlet></Outlet>
    </>
  );
}

export default Header;
