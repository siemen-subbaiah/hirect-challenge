import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';

const WindowOptions = () => {
  const {
    data: { glassType, sectionGlazed, framing },
    updateDropDowns,
  } = useContext(AppContext);

  return (
    <section className='bg-white shadow-md my-3'>
      <header className='p-2 bg-[#E4E4E4] text-[#34495E] font-bold'>
        Window Options
      </header>
      <div className='p-3'>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Glass Type
          </label>
          <select
            name='glassType'
            value={glassType}
            onChange={updateDropDowns}
            className='border w-1/3 p-2 rounded-sm'
          >
            <option value='Solid (No Windows)'>Solid (No Windows)</option>
            <option value='Windows'>Windows</option>
          </select>
        </div>

        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Section(S) Glazed
          </label>
          <select
            name='sectionGlazed'
            value={sectionGlazed}
            onChange={updateDropDowns}
            className='border w-1/3 p-2 rounded-sm'
          >
            <option value='Sections 4'>Sections 4</option>
            <option value='Sections 5'>Sections 5</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Framing
          </label>
          <select
            name='framing'
            value={framing}
            onChange={updateDropDowns}
            className='border w-1/3 p-2 rounded-sm'
          >
            <option value='Arch 1 Design'>Arch 1 Design</option>
            <option value='Arch 2 Design'>Arch 2 Design</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default WindowOptions;
