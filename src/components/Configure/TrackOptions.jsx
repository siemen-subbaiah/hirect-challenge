import React from 'react';

const TrackOptions = () => {
  return (
    <section className='bg-white shadow-md my-3'>
      <header className='p-2 bg-[#E4E4E4] text-[#34495E] font-bold'>
        Track Options
      </header>
      <div className='p-3'>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Spring
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>Galvanized Torsion</option>
            <option value='layout'>Another Torsion</option>
          </select>
        </div>

        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Track Size
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>2" Flag & Jamb Brackets Loose</option>
            <option value='layout'>3" Flag & Jamb Brackets Loose</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Track Mount
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>Bracket</option>
            <option value='layout'>Windoes</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Track Lift
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>Standard</option>
            <option value='layout'>Premium</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Track Radius
          </label>
          <select name='layout' className='border w-1/3 p-2 rounded-sm'>
            <option value='layout'>12" Radius</option>
            <option value='layout'>14" Radius</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default TrackOptions;
