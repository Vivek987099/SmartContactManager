
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GlobalContext } from "../Context/GlobleContext";
import { useContext } from "react";

function Pagination() {
  let {currentPage,totalPages,nextPage,previousPage}=useContext(GlobalContext);

  return (
    <>
      <div className="flex items-center gap-x-5 justify-center mt-20">
        <button
          onClick={previousPage}
          
          className="bg-[#32b4a7] hover:bg-[#5a9e96] active:scale-105 text-white text-2xl py-1.5 px-6 rounded"
        >
          <GrPrevious />
        </button>
        {`${currentPage} of ${totalPages}`}

        <button
          onClick={nextPage}
          className="bg-[#32b4a7] hover:bg-[#5a9e96] active:scale-105 text-white text-2xl py-1.5 px-6 rounded"
        >
          <GrNext />
        </button>
      </div>
    </>
  );
}

export default Pagination;
