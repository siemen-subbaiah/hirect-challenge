import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiFilter } from 'react-icons/bi';

const TableHeader = ({ term, tableIndex, setTableIndex, handleSearch }) => {
  return (
    <section className='p-4 flex flex-col md:flex-row md:items-center justify-between'>
      <div className='flex items-center gap-5 md:mb-0 mb-4'>
        <h1
          onClick={() => setTableIndex(0)}
          className={`${
            tableIndex === 0 && 'border-b-2 border-black'
          } cursor-pointer`}
        >
          Active Charts
        </h1>
        <h1
          onClick={() => setTableIndex(1)}
          className={`${
            tableIndex === 1 && 'border-b-2 border-black'
          } cursor-pointer`}
        >
          Archived Charts
        </h1>
      </div>
      <div className='flex items-center gap-5'>
        <div className='bg-white flex items-center gap-2 border rounded-sm'>
          <input
            ref={term}
            onChange={handleSearch}
            type='text'
            className='p-2 outline-none bg-white w-20'
            placeholder='Search'
          />
          <AiOutlineSearch size='1.2rem' className='mr-2' />
        </div>
        <div className='p-2 bg-white border rounded-sm flex items-center gap-2'>
          <BiFilter size='1.5rem' />
          <h1>Filter</h1>
        </div>
      </div>
    </section>
  );
};

export default TableHeader;
