import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./pages/Login";
import User from "./pages/User";
import NotFoundPage from "./pages/NotFoundPage";
import { AuthProvider } from "./Context/AuthContext";
import Dashboard from "./privateRoutes/Dashboard";
import PrivateRoute from "./privateRoutes/PrivateRoute";
import Contacts from "./component/Contacts";
import DashUser from "./component/DashUser";
import AddContact from "./component/AddContact";
import ViewContact from "./component/ViewContact";
import Profile from "./component/Profile";
import Settings from "./component/Settings";
import { GlobalContextProvider } from "./Context/GlobleContext";

function App() {
  return (
    <>
      <AuthProvider>
         <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="user" element={<User />}></Route>
            <Route path="/*" element={<NotFoundPage />}></Route>
          </Route>

          <Route path="/dashboard" element={<PrivateRoute />}>
           
              <Route element={<Dashboard />}>
                {/* <Route index element={<Contacts />}></Route> */}
                {/* <Route index element={<Contacts />}></Route> */}
                <Route index element={<Profile />}></Route>
                <Route path="view-contacts" element={<ViewContact />}></Route>
                <Route path="add-contact" element={<AddContact />}></Route>
                
                <Route path="settings" element={<Settings />}></Route>
              </Route>
           
          </Route>
        </Routes>
         </GlobalContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
