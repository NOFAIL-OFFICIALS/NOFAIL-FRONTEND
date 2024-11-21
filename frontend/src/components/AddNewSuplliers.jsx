import { useState } from "react";
import Arrow from "../assets/arrowback.png";
import rafiki from "../assets/rafiki.png";

const AddNewSuplliers = () => {
  const [isDiscardOpen, setIsDiscardOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      {!isDiscardOpen && !isSuccessOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-[40%] px-[32px] pt-[27px]">
            <h2 className="text-xl font-medium leading-[30px] mb-[38px] text-[#000000]">
              New Supplier
            </h2>
            <form>
              <div className="flex items-center justify-between pb-6">
                <label className="text-[#000000] text-base font-medium leading-6">
                  Supplier Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  className="outline-none border-[#D0D5DD] border rounded-[8px] py-[10px] px-[14px] w-[273px] text-base font-normal leading-6 shadow-[#1018280D] shadow-sm"
                />
              </div>

              <div className="flex items-center justify-between pb-6">
                <label className="text-[#000000] text-base font-medium leading-6">
                  Region
                </label>
                <input
                  type="text"
                  placeholder="Enter Region"
                  className="outline-none border-[#D0D5DD] border rounded-[8px] py-[10px] px-[14px] w-[273px] text-base font-normal leading-6 shadow-[#1018280D] shadow-sm"
                />
              </div>

              <div className="flex items-center justify-between pb-6">
                <label className="text-[#000000] text-base font-medium leading-6">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Select Supplier’s category"
                  className="outline-none border-[#D0D5DD] border rounded-[8px] py-[10px] px-[14px] w-[273px] text-base font-normal leading-6 shadow-[#1018280D] shadow-sm"
                />
              </div>

              <div className="flex items-center justify-between pb-6">
                <label className="text-[#000000] text-base font-medium leading-6">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  className="outline-none border-[#D0D5DD] border rounded-[8px] py-[10px] px-[14px] w-[273px] text-base font-normal leading-6 shadow-[#1018280D] shadow-sm"
                />
              </div>

              <div className="flex items-center justify-between pb-6">
                <label className="text-[#000000] text-base font-medium leading-6">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Supplier’s email"
                  className="outline-none border-[#D0D5DD] border rounded-[8px] py-[10px] px-[14px] w-[273px] text-base font-normal leading-6 shadow-[#1018280D] shadow-sm"
                />
              </div>
            </form>
            <div className="flex items-center justify-end gap-[10px] pt-[53px] pb-[40px]">
              <button
                onClick={() => setIsDiscardOpen(true)}
                className="px-[37px] py-[10px] border border-[#F0F1F3] rounded-sm text-[#858D9D]"
              >
                Discard
              </button>
              <button
                onClick={() => setIsSuccessOpen(true)}
                className="px-2 py-[10px] bg-[#3835ED] rounded-sm text-[#ffffff]"
              >
                Add New Supplier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Discard Modal */}
      {isDiscardOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-[40%] px-[32px] py-[30px]">
            <div className="flex items-center">
              <img src={Arrow} alt="" className="cursor-pointer" />
              <button
                onClick={() => setIsDiscardOpen(false)}
                className="text-[#000000] text-xs leading-[18px] font-bold"
              >
                Go Back
              </button>
            </div>
            <div>
              <h2 className="text-4xl font-bold leading-[30px] text-[#000000] pl-[170px] mb-[62px]">
                Discard
              </h2>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setIsDiscardOpen(false)}
                className="px-[57.5px] py-[11.1px] bg-[#3835ED] rounded-[2.98px] text-[14.89px] leading-[18.15px] font-semibold text-white"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-[40%] px-[32px] py-[30px] text-center">
            <h2 className="text-[36px] font-bold leading-[30px] text-[#000000] mb-[21.52px]">
              New Supplier Added
            </h2>
            <h2 className="text-[36px] font-bold leading-[30px] text-[#000000] mb-[21.52px]">
              Successfully
            </h2>
            <img
              src={rafiki}
              alt="Success"
              className="mx-auto mb-[6.11px] w-[220.65px] h-[170.47px]"
            />
            <button
              onClick={() => setIsSuccessOpen(false)}
              className="px-[42.6px] py-[11.1px] bg-[#3835ED] rounded-sm text-white"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewSuplliers;
