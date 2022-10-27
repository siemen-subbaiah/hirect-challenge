import React from 'react';

const Fields = () => {
  return (
    <div className='flex flex-col text-[#34495E]'>
      <section className='bg-white shadow-md rounded-sm p-3 my-2'>
        <p className='my-2'>Change Delivery Date</p>
        <input
          type='date'
          className='border p-2 rounded-sm outline-none w-full'
          placeholder='Example: 31-DEC-1999'
        />
        <p className='my-2'>Standard Delivery: Tue May 28 - 2019</p>
      </section>
      <section className='bg-white shadow-md rounded-sm p-3 my-2'>
        <p className='my-2'>Purchase Order Number</p>
        <input
          type='text'
          className='border p-2 rounded-sm outline-none w-full'
          placeholder='Enter PO Number'
        />
        <p className='my-2'>This PO will be useful to track this order items</p>
      </section>
    </div>
  );
};

export default Fields;
