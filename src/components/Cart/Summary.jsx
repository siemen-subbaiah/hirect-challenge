import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';

const Summary = () => {
  const { cart } = useContext(AppContext);

  const total = cart?.reduce(
    (initialVal, item) => initialVal + item?.price * item?.qty,
    0
  );

  return (
    <section className='bg-white shadow-md rounded-sm p-3'>
      <h1 className='text-md my-2 font-semibold'>Bill Summary</h1>
      <div className='flex justify-between my-1'>
        <p>Sub Total</p>
        <p>$ {total}</p>
      </div>
      <div className='flex justify-between my-1'>
        <p>Energy Surcharge</p>
        <p>$ 70</p>
      </div>
      <div className='flex justify-between my-1'>
        <p>Sales Tax</p>
        <p>$ 490</p>
      </div>
      <div className='flex justify-between my-1'>
        <h1 className='text-md text-[#2A292A] text-xl font-semibold'>Total</h1>
        <p className='text-xl font-semibold'>$ {total + 70 + 490}</p>
      </div>
      <hr className='my-4' />
      <div className='flex items-center gap-3 justify-start my-2'>
        <input type='checkbox' name='tax' />
        <label for='tax'>Apply Tax</label>
      </div>
      <p>
        (The 1% iStore discount is calculated into the total price for all doors
        and door parts. Please refer to the quote or order acknowledgment for
        details.)
      </p>
    </section>
  );
};

export default Summary;
