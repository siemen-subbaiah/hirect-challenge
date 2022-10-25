import React from 'react';

const OtherOptions = () => {
  return (
    <section className='bg-white shadow-md my-3'>
      <header className='p-2 bg-[#E4E4E4] text-[#34495E] font-bold'>
        Other Options
      </header>
      <div className='p-3'>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Lock
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>Inside Slide Lock (#2)</option>
            <option value='layout'>Outside Slide Lock (#3)</option>
          </select>
        </div>

        <div className='flex items-center justify-between mx-36 my-3'>
          <label htmlFor='layout' className='text-[#34495E]'>
            MISC Lock Options
          </label>
          <div className='flex items-center gap-3 justify-start w-[44%]'>
            <input type='radio' name='lock' value='No Lock Hole' />
            <label for='lock'>No Lock Hole</label>
            <input type='radio' name='lock' value='With Lock Hole' />
            <label for='lock'>With Lock Hole</label>
          </div>
        </div>

        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Packaging
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>[x] Distributor</option>
            <option value='layout'>[y] Distributor</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default OtherOptions;
