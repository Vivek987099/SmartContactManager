
import { Navigate, Outlet } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
function PrivateRoute() {
    // let {isLoggedIn}=useContext(AuthContext);
   
   let {isLoggedIn}=useContext(AuthContext)
  
   
 
 
    if(isLoggedIn){
        return <Outlet />
    }
    else{
    return  <Navigate to={"/login"}></Navigate>
    }
    
  
}

export default PrivateRoute
