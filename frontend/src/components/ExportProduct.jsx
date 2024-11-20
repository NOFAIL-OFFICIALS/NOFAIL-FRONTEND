import React from 'react'
import rafiki from '../assets/rafiki.svg'

const ExportProduct = () => {
  return (
    <div>
      <section className="w-[500px] rounded-[8px] pt-[30px] pb-[17px] bg-white z-40">
        <h3 className=" leading-[30px] text-[36px] font-bold text-center">
          Export Product list
        </h3>

        <div className="flex justify-center pt-[25px]">
          <img src={rafiki} alt="Image not available" />
        </div>
        <div className="flex justify-center mt-[22px]">
          <button className="w-[183px] h-[40px] bg-[#3835ED] text-white text-[14px] font-semibold rounded-[3px]">
            Proceed to Export
          </button>
        </div>
      </section>
    </div>
  );
}

export default ExportProduct