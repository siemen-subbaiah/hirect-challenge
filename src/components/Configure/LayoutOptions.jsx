import React from 'react';

const LayoutOptions = () => {
  return (
    <section className='bg-white shadow-md my-3'>
      <header className='p-2 bg-[#E4E4E4] text-[#34495E] font-bold'>
        Layout Options
      </header>
      <div className='p-3'>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Assembly Type
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>Complete Door</option>
            <option value='layout'>Half Door</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Measure Size
          </label>
          <div>
            <div className='flex items-center gap-[4.1rem] my-2'>
              <label htmlFor='layout' className='text-[#34495E]'>
                Width
              </label>
              <div className='flex gap-2'>
                <select name='layout' className='border p-2 rounded-sm w-36'>
                  <option value='layout'>8ft</option>
                  <option value='layout'>9ft</option>
                  <option value='layout'>10ft</option>
                </select>
                <select name='layout' className='border p-2 rounded-sm w-36'>
                  <option value='layout'>2 in.</option>
                  <option value='layout'>3 in.</option>
                  <option value='layout'>4 in.</option>
                </select>
              </div>
            </div>
            <div className='flex items-center gap-[3.79rem] my-2'>
              <label htmlFor='layout' className='text-[#34495E]'>
                Height
              </label>
              <div className='flex gap-2'>
                <select name='layout' className='border p-2 rounded-sm w-36'>
                  <option value='layout'>6ft</option>
                  <option value='layout'>5ft</option>
                  <option value='layout'>4ft</option>
                </select>
                <select name='layout' className='border p-2 rounded-sm w-36'>
                  <option value='layout'>0 in.</option>
                  <option value='layout'>1 in.</option>
                  <option value='layout'>2 in.</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Windcode
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>Windcode W1</option>
            <option value='layout'>Windcode W2</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Design
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>CC</option>
            <option value='layout'>DD</option>
            <option value='layout'>PP</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Color
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>Dark Finish</option>
            <option value='layout'>Lite Finish</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default LayoutOptions;
