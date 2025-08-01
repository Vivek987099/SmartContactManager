import { NavLink } from "react-router"


function CanvasMenu({setMenu}) {
  return (
    <>
     <div className={`w-1/2 right-0 rounded  absolute bg-[#32b4a7] h-screen flex justify-center z-50`}>
      <ul className="uppercase  font-semibold mt-25 w-full ">
            <li className="my-5 ">
              <NavLink onClick={()=>setMenu(false)}  className='block px-5 border-b-2 border-[#3d7a74]' to="/">home</NavLink>
            </li>
            <li className="my-5 ">
              <NavLink onClick={()=>setMenu(false)} className='block px-5 border-b-2 border-[#3d7a74]'  to="/about">about</NavLink>
            </li>
            <li className="my-5 ">
              <NavLink onClick={()=>setMenu(false)}  className='block px-5 border-b-2 border-[#3d7a74]' to="/login">Log In</NavLink>
            </li>
          </ul>
        
     </div>
    </>
  )
}

export default CanvasMenu
