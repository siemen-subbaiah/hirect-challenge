import React from 'react';

const WindowOptions = () => {
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
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>Solid (No Windows)</option>
            <option value='layout'>Windows</option>
          </select>
        </div>

        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Section(S) Glazed
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>Sections 4</option>
            <option value='layout'>Sections 5</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Framing
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>Arch 1 Design</option>
            <option value='layout'>Arch 2 Design</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default WindowOptions;
