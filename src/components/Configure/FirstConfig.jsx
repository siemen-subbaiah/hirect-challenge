import React from 'react';

const FirstConfig = ({ setConfigNumb }) => {
  return (
    <div className='bg-white shadow-sm rounded-md mt-3 p-3 h-[80vh] relative'>
      <form>
        <div className='flex items-center justify-around my-5'>
          <label htmlFor='category' className='text-[#34495E] w-52'>
            Select Category
          </label>
          <select name='category' className='border w-1/3 p-2 rounded-sm'>
            <option value='category'>Residential Door</option>
            <option value='category'>Industrial Door</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-5'>
          <label htmlFor='category' className='text-[#34495E] w-52'>
            Select Series
          </label>
          <select name='category' className='border w-1/3 p-2 rounded-sm'>
            <option value='category'>Canyon Ridge Collection</option>
            <option value='category'>Uday Collections</option>
            <option value='category'>Siemen Collections</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-5'>
          <label htmlFor='category' className='text-[#34495E] w-52'>
            Door Type
          </label>
          <select name='category' className='border w-1/3 p-2 rounded-sm'>
            <option value='category'>CAN212</option>
            <option value='category'>CAN341</option>
            <option value='category'>CAN872</option>
          </select>
        </div>
      </form>
      <div className='absolute bottom-1 right-5 my-2'>
        <button
          className='bg-[#66332B] px-3 py-1 rounded-sm text-white'
          onClick={() => setConfigNumb(3)}
        >
          Configure
        </button>
      </div>
    </div>
  );
};

export default FirstConfig;
