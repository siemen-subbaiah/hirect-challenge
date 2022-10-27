import React from 'react';

const Address = () => {
  return (
    <section className='flex p-3 bg-white shadow-md rounded-sm my-3 justify-between'>
      <div className='w-2/4'>
        <h1 className='font-semibold text-[#34495E] my-3'>Billing To</h1>
        <div className='flex my-2 items-center'>
          <div>
            <h1 className='font-semibold'>Bement Jared</h1>
            <p className='my-1 w-3/4'>
              144 Curt Shores, 50, Madison Avenue Hixson - 42040
            </p>
            <p className='my-1'>Contact: (123) 456 7890</p>
          </div>
          <h1 className='text-[#66332B] font-semibold'>CHANGE</h1>
        </div>
      </div>
      <div className='border-l-2 w-2/4 pl-5'>
        <h1 className='font-semibold text-[#34495E] my-3'>Shipping To</h1>
        <div className='flex my-2 items-center'>
          <div>
            <h1 className='font-semibold'>Bement Jared</h1>
            <p className='my-1 w-3/4'>
              144 Curt Shores, 50, Madison Avenue Hixson - 42040
            </p>
            <p className='my-1'>Contact: (123) 456 7890</p>
          </div>
          <h1 className='text-[#66332B] font-semibold'>CHANGE</h1>
        </div>
      </div>
    </section>
  );
};

export default Address;
