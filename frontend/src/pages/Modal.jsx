import React from 'react'
import Discard from '../components/Discard';
import AddProduct from '../components/AddProduct';
import ProductAdded from '../components/ProductAdded';
import { useState } from "react";

const Modal = () => {
    const [discard, setDiscard] = useState(false);
    const [addProduct, setAddProduct] = useState(false)
    
    const handleDiscard = () => {
        setDiscard(true)
    }
    const handleAddProduct = () => {
        setAddProduct(true)
    }
  return (
    <div>
      {/* <Discard /> */}
      {addProduct && <AddProduct setAddProduct={setAddProduct} />}
      {discard && <Discard setDiscard={setDiscard} />}
      <form className="w-[500px] rounded-[8px] py-[27px] pl-[28px] pr-[36px] shadow-lg">
        <h3 className="font-medium text-[20px]">New Product</h3>
        <div className="flex items-center justify-center gap-[20px] text-[14px] pt-[12px]">
          <div className="border-[1px] border-[#00000080] rounded-[10px] w-[81px] h-[81px] border-dotted"></div>
          <div>
            <p className="text-[#858D9D]">Drag image here</p>
            <div className="flex gap-[46px] text-right">
              <p className="pl-[42px]">or</p>
              <p>(Optional)</p>
            </div>
            <label className="text-[#3835ED] cursor-pointer" htmlFor="upload">
              Browse image
            </label>
            <input type="file" id="upload" className="hidden" />
          </div>
        </div>
        <div className="flex gap-[55px] items-center mt-[32px]">
          <label htmlFor="" className="text-[16px] font-medium">
            Product Name
          </label>
          <input
            placeholder="Enter product name"
            className="pl-[14px] w-[273px] h-[44px] rounded-[8px] border-[1px] border-[#D0D5DD]"
            type="text"
          />
        </div>
        <div className="flex gap-[84px] items-center mt-[32px]">
          <label htmlFor="" className="text-[16px] font-medium">
            Product ID
          </label>
          <input
            placeholder="Enter product ID"
            className="pl-[14px] w-[273px] h-[44px] rounded-[8px] border-[1px] border-[#D0D5DD]"
            type="text"
          />
        </div>
        <div className="flex gap-[94px] items-center mt-[32px]">
          <label htmlFor="" className="text-[16px] font-medium">
            Category
          </label>
          <input
            placeholder="Select product category"
            className="pl-[14px] w-[273px] h-[44px] rounded-[8px] border-[1px] border-[#D0D5DD]"
            type="text"
          />
        </div>
        <div className="flex gap-[69px] items-center mt-[32px]">
          <label htmlFor="" className="text-[16px] font-medium">
            Buying Price
          </label>
          <input
            placeholder="Enter buying price"
            className="pl-[14px] w-[273px] h-[44px] rounded-[8px] border-[1px] border-[#D0D5DD]"
            type="text"
          />
        </div>
        <div className="flex gap-[99px] items-center mt-[32px]">
          <label htmlFor="" className="text-[16px] font-medium">
            Quantity
          </label>
          <input
            placeholder="Enter product quantity"
            className="pl-[14px] w-[273px] h-[44px] rounded-[8px] border-[1px] border-[#D0D5DD]"
            type="text"
          />
        </div>
        <div className="flex gap-[133px] items-center mt-[32px]">
          <label htmlFor="" className="text-[16px] font-medium">
            Unit
          </label>
          <input
            placeholder="Enter product unit"
            className="pl-[14px] w-[273px] h-[44px] rounded-[8px] border-[1px] border-[#D0D5DD]"
            type="text"
          />
        </div>
        <div className="flex gap-[78px] items-center mt-[32px]">
          <label htmlFor="" className="text-[16px] font-medium">
            Expiry Date
          </label>
          <input
            placeholder="Enter expiry date"
            className="pl-[14px] w-[273px] h-[44px] rounded-[8px] border-[1px] border-[#D0D5DD]"
            type="text"
          />
        </div>
        <div className="flex gap-[12px] justify-end mt-[44px]">
          <button
            type="button"
            onClick={handleDiscard}
            className="w-[110px] h-[40px] text-[16px] font-medium text-[#858D9D] border-[1px] rounded-[8px] hover:bg-[#3835ED] hover:text-white cursor-pointer hover:text-[14px]"
          >
            Discard
          </button>
          <button
            type="button"
            onClick={handleAddProduct}
            className="w-[110px] h-[40px] text-[16px] font-medium text-[#858D9D] border-[1px] rounded-[8px] hover:bg-[#3835ED] cursor-pointer  hover:text-[white] hover:text-[14px]"
          >
            Add Product
          </button>
        </div>
      </form>
      {/* <ProductAdded/> */}
    </div>
  );
}

export default Modal