import { createContext, useState } from "react";

let GlobalContext = createContext();
const GlobalContextProvider = (props) => {
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalPages] = useState(50);
  let nextPage = () => {
    
    setCurrentPage((prevPage) => (prevPage >= totalPages ? 1 : prevPage + 1));
  };
  let previousPage = () => {
    setCurrentPage((prevPage) => (prevPage <= 1 ? totalPages : prevPage - 1));
  };
  return (
    <GlobalContext.Provider
      value={{ currentPage, totalPages, nextPage, previousPage, setTotalPages,setCurrentPage }}
    >
      {props.children}{" "}
    </GlobalContext.Provider>
  );
};
export { GlobalContextProvider, GlobalContext };
