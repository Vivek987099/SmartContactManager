import { createContext, useState } from "react";

let GlobalContext = createContext();
const GlobalContextProvider = (props) => {
  let [currentPage, setCurrentPage] = useState(0);
  let [totalPages, setTotalPages] = useState(5);
 
 
  return (
    <GlobalContext.Provider
      value={{ currentPage, totalPages,  setTotalPages,setCurrentPage }}
    >
      {props.children}{" "}
    </GlobalContext.Provider>
  );
};
export { GlobalContextProvider, GlobalContext };
