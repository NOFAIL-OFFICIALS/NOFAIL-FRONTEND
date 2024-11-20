import React from 'react'
import success from '../assets/pana.svg'


const ProductAdded = ({setProductAdd, setAddProduct}) => {
   
    const handleClose = () => {
        setProductAdd(false)
        setAddProduct(false)
    }
    
  return (
    <div>
      <section className="w-[500px] rounded-[8px] pt-[30px] pb-[17px] bg-white z-40">
        <div className="flex justify-center">
          <h3 className="w-[317px] leading-[30px] text-[36px] font-bold text-center">
            New Product Added Sucessfully
          </h3>
        </div>
        <div className="flex justify-center pt-[20px]">
          <img src={success} alt="Image not available" />
        </div>
        <div className='flex justify-center mt-[22px]'>
          <button onClick={handleClose} className="w-[107px] h-[40px] bg-[#3835ED] text-white text-[14px] font-semibold rounded-[3px]">
            Ok
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductAdded