import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Link to={item.to}>
      <section className='bg-white shadow-sm rounded-md p-3 my-3 flex items-center justify-between cursor-pointer'>
        <div>
          <h1 className='text-xl font-semibold'>{item.name}</h1>
          <p className='mt-1 mb-3 text-[#8894A0]'>{item.subName}</p>
        </div>
        <AiOutlineRight size='1.3rem' />
      </section>
    </Link>
  );
};

export default Item;
