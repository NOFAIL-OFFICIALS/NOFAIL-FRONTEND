import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import ProductAdded from "./ProductAdded";

const AddProduct = ({ setAddProduct }) => {
  const [productAdd, setProductAdd] = useState(false);

  const closeAddProduct = () => {
    setAddProduct(false);
  };

  const handleProductAdded = () => {
    setProductAdd(true);
  };

  return (
    <div>
      <div className="bg-[#000000CC] opacity-100 h-full w-full fixed top-0 left-0"></div>

      {!productAdd ? (
        <div className="bg-white w-[500px] rounded-[8px] z-20 absolute top-[20%] left-[30%] transform  pl-[28px]">
          <div
            onClick={closeAddProduct}
            className="flex items-center cursor-pointer p-[10px]"
          >
            <IoIosArrowRoundBack className="text-[#0000004D] text-[18px]" />
            <h3 className="font-bold text-[14px]">Go Back</h3>
          </div>
          <h3 className="text-center text-[36px] font-bold">Add Product</h3>
          <div className="flex justify-center mt-[62px] mb-[30px]">
            <button
              type="button"
              onClick={handleProductAdded}
              className="w-[179px] h-[40px] bg-[#3835ED] text-[white] font-semibold text-[14px] rounded-[8px]"
            >
              Proceed
            </button>
          </div>
        </div>
      ) : (
        <div className="fixed top-[20%] left-[30%]  z-30">
          <ProductAdded setProductAdd={setProductAdd} setAddProduct={setAddProduct} />
        </div>
      )}
    </div>
  );
};

export default AddProduct;
