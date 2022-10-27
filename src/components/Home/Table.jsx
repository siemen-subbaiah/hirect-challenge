import React from 'react';
import { ImPlus } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useState } from 'react';

const Table = ({ filteredProducts, handleSeriesSort1, handleSeriesSort2 }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <section className='flex justify-center my-5 px-3 overflow-x-auto relative rounded-2xl'>
      <table className='shadow-md w-full'>
        <tbody>
          <tr>
            <td className='text-[#8894A0] cursor-pointer'>
              PRODUCT INFORMATION
            </td>
            <td className='text-[#8894A0]'>COLOR</td>
            <td className='text-[#8894A0] flex items-center gap-2'>
              <span>SERIES</span>
              {toggle ? (
                <AiOutlineArrowDown
                  onClick={() => {
                    handleSeriesSort1();
                    setToggle(!toggle);
                  }}
                  size='1rem'
                  className='cursor-pointer'
                />
              ) : (
                <AiOutlineArrowUp
                  onClick={() => {
                    handleSeriesSort2();
                    setToggle(!toggle);
                  }}
                  size='1rem'
                  className='cursor-pointer'
                />
              )}
            </td>
            <td className='text-[#8894A0]'>WINDCODE</td>
            <td className='text-[#8894A0]'>CATEGORY</td>
            <td className='text-[#8894A0]'>TRACK LIFT</td>
          </tr>
          {filteredProducts?.map((item) => {
            return (
              <tr>
                <td>
                  {item?.doorType} {item?.design} {item?.assemblyType}
                </td>
                <td>{item?.color}</td>
                <td>{item?.series}</td>
                <td>{item?.windCode}</td>
                <td>{item?.category}</td>
                <td>{item?.trackLift}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to='/create'>
        <div className='absolute bottom-10 right-[6rem] cursor-pointer'>
          <div className='bg-[#66332B] p-3 rounded-full shadow shadow-red-900'>
            <ImPlus color='#fff' size='1.2rem' />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Table;
