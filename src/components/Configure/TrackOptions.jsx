import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';
const TrackOptions = () => {
  const {
    data: { spring, trackSize, trackMount, trackLift, trackRadius },
    updateDropDowns,
  } = useContext(AppContext);

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
          <select
            name='spring'
            value={spring}
            onChange={updateDropDowns}
            className='border w-1/3 p-2 rounded-sm'
          >
            <option value='Galvanized Torsion'>Galvanized Torsion</option>
            <option value='Another Torsion'>Another Torsion</option>
          </select>
        </div>

        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Track Size
          </label>
          <select
            name='trackSize'
            value={trackSize}
            onChange={updateDropDowns}
            className='border w-1/3 p-2 rounded-sm'
          >
            <option value='2" Flag & Jamb Brackets Loose'>
              2" Flag & Jamb Brackets Loose
            </option>
            <option value='3" Flag & Jamb Brackets Loose'>
              3" Flag & Jamb Brackets Loose
            </option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Track Mount
          </label>
          <select
            name='trackMount'
            value={trackMount}
            onChange={updateDropDowns}
            className='border w-1/3 p-2 rounded-sm'
          >
            <option value='Bracket'>Bracket</option>
            <option value='Windoes'>Windoes</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Track Lift
          </label>
          <select
            name='trackLift'
            value={trackLift}
            onChange={updateDropDowns}
            className='border w-1/3 p-2 rounded-sm'
          >
            <option value='Standard'>Standard</option>
            <option value='Premium'>Premium</option>
          </select>
        </div>
        <div className='flex items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Track Radius
          </label>
          <select
            name='trackRadius'
            value={trackRadius}
            onChange={updateDropDowns}
            className='border w-1/3 p-2 rounded-sm'
          >
            <option value='12" Radius'>12" Radius</option>
            <option value='14" Radius'>14" Radius</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default TrackOptions;
