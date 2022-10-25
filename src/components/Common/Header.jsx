import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = ({
  tabs,
  setIndex,
  index,
  create,
  configure,
  configNumb,
  setConfigNumb,
}) => {
  return (
    <header className='bg-[#34495E] text-white p-3'>
      {tabs && (
        <div className='flex justify-center items-center gap-10'>
          <h1
            className={`cursor-pointer ${
              index === 0 && 'border-b-2 border-yellow-500'
            }`}
            onClick={() => setIndex(0)}
          >
            CHARTS
          </h1>
          <h1
            className={`cursor-pointer ${
              index === 1 && 'border-b-2 border-yellow-500'
            }`}
            onClick={() => setIndex(1)}
          >
            FAVORITES
          </h1>
        </div>
      )}
      {create && (
        <div className='flex items-center gap-4'>
          <Link to='/' className='cursor-pointer'>
            <IoMdArrowBack size='1.3rem' />
          </Link>
          <p>Create a new order</p>
        </div>
      )}
      {configure && (
        <div className='flex items-center gap-4'>
          {configNumb === 2 ? (
            <>
              <Link to='/create'>
                <IoMdArrowBack size='1.3rem' className='cursor-pointer' />
              </Link>
              <p>Configure a new door</p> {configNumb} of 3
            </>
          ) : (
            <>
              <IoMdArrowBack
                size='1.3rem'
                onClick={() => setConfigNumb(2)}
                className='cursor-pointer'
              />
              <p>Configure a new door</p> {configNumb} of 3
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
