
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GlobalContext } from "../Context/GlobleContext";
import { useContext } from "react";

function Pagination({getContactData}) {
  let {currentPage,totalPages,setCurrentPage}=useContext(GlobalContext);
  let handlePageChange = (newPage) => {
    if(newPage >= 0 && newPage < totalPages ) {
      setCurrentPage(newPage);
      getContactData(newPage );
    }
  }
 
  
  


  return (
    <>
   
      <div className="flex items-center gap-x-5 justify-center mt-20">
        <button
         onClick={()=>{handlePageChange(currentPage-1)}}
          disabled={currentPage <= 0}

         
          className="bg-[#32b4a7] hover:bg-[#5a9e96] active:scale-105 text-white text-2xl py-1.5 px-6 rounded"
        >
          <GrPrevious />
        </button>
        {`${currentPage+1} of ${totalPages}`}

        <button
        onClick={()=>{handlePageChange(currentPage+1)}}
   
          disabled={currentPage >= totalPages-1}
          className="bg-[#32b4a7] hover:bg-[#5a9e96] active:scale-105 text-white text-2xl py-1.5 px-6 rounded"
        >
          <GrNext />
        </button>
      </div>
    </>
  );
}

export default Pagination;
