import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';

const FirstConfig = ({ setConfigNumb }) => {
  const {
    data: { category, series, doorType },
    updateDropDowns,
  } = useContext(AppContext);

  return (
    <div className='bg-white shadow-sm rounded-md mt-3 p-3 h-[80vh] relative'>
      <form>
        <div className='flex flex-col md:flex-row md:items-center justify-around my-5'>
          <label htmlFor='category' className='text-[#34495E] w-52'>
            Select Category
          </label>
          <select
            name='category'
            value={category}
            onChange={updateDropDowns}
            className='border md:w-1/3 p-2 rounded-sm'
          >
            <option value='Residential Door'>Residential Door</option>
            <option value='Industrial Door'>Industrial Door</option>
          </select>
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-around my-5'>
          <label htmlFor='category' className='text-[#34495E] w-52'>
            Select Series
          </label>
          <select
            name='series'
            value={series}
            onChange={updateDropDowns}
            className='border md:w-1/3 p-2 rounded-sm'
          >
            <option value='Canyon Ridge Collection'>
              Canyon Ridge Collection
            </option>
            <option value='Uday Collections'>Uday Collections</option>
            <option value='Siemen Collections'>Siemen Collections</option>
          </select>
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-around my-5'>
          <label htmlFor='category' className='text-[#34495E] w-52'>
            Door Type
          </label>
          <select
            name='doorType'
            value={doorType}
            onChange={updateDropDowns}
            className='border md:w-1/3 p-2 rounded-sm'
          >
            <option value='CAN212'>CAN212</option>
            <option value='CAN341'>CAN341</option>
            <option value='CAN872'>CAN872</option>
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
