import React from 'react';
import { RiFileCopyFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { AppContext } from '../../context/AppState';
import { Link } from 'react-router-dom';

const ProductCart = () => {
  const { cart, deleteItem, increaseItem, decreaseItem } =
    useContext(AppContext);

  return (
    <>
      {cart?.map((item) => {
        return (
          <div
            className='bg-white shadow-md rounded-sm my-3 p-3'
            key={item?.id}
          >
            <h1 className='text-xl w-3/4 font-semibold mb-2'>
              {item?.wFeet}' {item?.wInch}'' X {item?.hFeet}' {item?.hInch}''{' '}
              {item?.doorType} {item?.design} {item?.assemblyType}{' '}
              {item?.windCode},{item?.color}
            </h1>
            <p className='text-[#8894A0]'>Category: {item?.category}</p>
            <p className='text-[#8894A0]'>Product • {item?.series}</p>
            <p className='text-[#8894A0]'>
              Availability: IN STOCK (Available for Pickup)
            </p>
            <div className='my-5 flex flex-col md:flex-row md:items-center justify-between'>
              <div className='flex gap-3 md:mb-0 mb-2'>
                <button
                  onClick={() => decreaseItem(item?.id)}
                  className='bg-[#F6F8FA] px-3 py-1 border border-[#8894A0]'
                >
                  -
                </button>
                <button className='bg-white px-6 py-1 border border-[#8894A0]'>
                  {item?.qty}
                </button>
                <button
                  onClick={() => increaseItem(item?.id)}
                  className='bg-[#F6F8FA] px-3 py-1 border border-[#8894A0]'
                >
                  +
                </button>
              </div>
              <div>
                <h1 className='text-xl'>
                  Net Price: ${item?.price * item?.qty}
                </h1>
                <p>Unit Price: ${4800 * item?.qty}</p>
              </div>
            </div>

            <div className='my-3 flex w-full flex-col md:flex-row items-center'>
              <button className='w-full border md:pl-[6.8rem] md:pr-[6.8rem] py-2 cursor-pointer text-[#66332B] flex items-center justify-center gap-1'>
                <AiFillHeart />
                <span>FAVORITES</span>
              </button>
              <Link
                className='w-full justify-center border md:pl-[6.8rem] md:pr-[6.8rem] py-2 cursor-pointer text-[#66332B] flex items-center gap-1'
                to={`/configure?edit=${item?.id}`}
              >
                <MdEdit />
                <span>EDIT</span>
              </Link>
              <button className='w-full justify-center border md:pl-[6.8rem] md:pr-[6.8rem] py-2 cursor-pointer text-[#66332B] flex items-center gap-1'>
                <RiFileCopyFill />
                <span>COPY</span>
              </button>
              <button
                onClick={() => deleteItem(item?.id)}
                className='w-full justify-center border md:pl-[6.8rem] md:pr-[6.8rem] py-2 cursor-pointer text-[#66332B] flex items-center gap-1'
              >
                <MdDelete />
                <span>DELETE</span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCart;
