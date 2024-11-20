import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";



const Discard = ({ setDiscard }) => {
    const closeDiscard = () => {
      setDiscard(false)
  };

  return (
    <section className="">
      <div className="bg-[#000000CC] opacity-100 h-full w-[100%] fixed  "></div>
      <div className=" bg-white w-[500px] rounded-[8px]  z-20 absolute pl-[28px] top-[20%] left-[30%]">
        <div onClick={closeDiscard} className="flex items-center cursor-pointer p-[10px] ">
          <IoIosArrowRoundBack className="text-[#0000004D] text[18px]" />
          <h3 className="font-bold text-[14px]">Go Back</h3>
        </div>
        <h3 className="text-center text-[36px] font-bold">Discard</h3>
        <div  className="flex justify-center mt-[62px] mb-[30px] ">
          <button  className="w-[179px] h-[40px] bg-[#3835ED] text-[white] font-semibold text-[14px] rounded-[8px] ">
            Proceed
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discard;
