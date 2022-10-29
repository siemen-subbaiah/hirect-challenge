import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppState';

const LayoutOptions = ({ fuck }) => {
  const {
    data: { assemblyType, wInch, wFeet, hFeet, hInch, windCode, design, color },
    updateDropDowns,
  } = useContext(AppContext);

  return (
    <section className='bg-white shadow-md my-3'>
      <header className='p-2 bg-[#E4E4E4] text-[#34495E] font-bold'>
        Layout Options
      </header>
      <div className='p-3'>
        <div className='flex md:flex-row flex-col md:items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Assembly Type
          </label>
          <select
            name='assemblyType'
            value={assemblyType}
            onChange={updateDropDowns}
            className='border md:w-1/3 p-2 rounded-sm'
          >
            <option value='Complete Door'>Complete Door</option>
            <option value='Half Door'>Half Door</option>
          </select>
        </div>
        <div className='flex md:flex-row flex-col md:items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Measure Size
          </label>
          <div>
            <div className='flex md:flex-row flex-col md:items-center md:gap-[4.1rem] my-2'>
              <label htmlFor='layout' className='text-[#34495E]'>
                Width
              </label>
              <div className='flex gap-2'>
                <select
                  name='wFeet'
                  value={wFeet}
                  onChange={updateDropDowns}
                  className='border p-2 rounded-sm w-36'
                >
                  <option value='8ft'>8ft</option>
                  <option value='9ft'>9ft</option>
                  <option value='10ft'>10ft</option>
                </select>
                <select
                  name='wInch'
                  value={wInch}
                  onChange={updateDropDowns}
                  className='border p-2 rounded-sm w-36'
                >
                  <option value='2 in.'>2 in.</option>
                  <option value='3 in.'>3 in.</option>
                  <option value='4 in.'>4 in.</option>
                </select>
              </div>
            </div>
            <div className='flex md:flex-row flex-col md:items-center md:gap-[3.79rem] my-2'>
              <label htmlFor='layout' className='text-[#34495E]'>
                Height
              </label>
              <div className='flex gap-2'>
                <select
                  name='hFeet'
                  value={hFeet}
                  onChange={updateDropDowns}
                  className='border p-2 rounded-sm w-36'
                >
                  <option value='6ft'>6ft</option>
                  <option value='5ft'>5ft</option>
                  <option value='4ft'>4ft</option>
                </select>
                <select
                  name='hInch'
                  value={hInch}
                  onChange={updateDropDowns}
                  className='border p-2 rounded-sm w-36'
                >
                  <option value='0 in.'>0 in.</option>
                  <option value='1 in.'>1 in.</option>
                  <option value='2 in.'>2 in.</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='flex md:flex-row flex-col md:items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Windcode
          </label>
          <select
            name='windCode'
            value={windCode}
            onChange={updateDropDowns}
            className='border md:w-1/3 p-2 rounded-sm'
          >
            <option value='Windcode W1'>Windcode W1</option>
            <option value='Windcode W2'>Windcode W2</option>
          </select>
        </div>
        <div className='flex md:flex-row flex-col md:items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Design
          </label>
          <select
            name='design'
            value={design}
            onChange={updateDropDowns}
            className='border md:w-1/3 p-2 rounded-sm'
          >
            <option value='CC'>CC</option>
            <option value='DD'>DD</option>
            <option value='PP'>PP</option>
          </select>
        </div>
        <div className='flex md:flex-row flex-col md:items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Color
          </label>
          <select
            name='color'
            value={color}
            onChange={updateDropDowns}
            className='border md:w-1/3 p-2 rounded-sm'
          >
            <option value='Dark Finish'>Dark Finish</option>
            <option value='Lite Finish'>Lite Finish</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default LayoutOptions;
