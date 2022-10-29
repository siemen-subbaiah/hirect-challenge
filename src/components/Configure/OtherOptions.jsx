import React, { useContext } from 'react';
import { AppContext } from '../../context/AppState';

const OtherOptions = () => {
  const {
    data: {
      lock,
      packaging,
      extraStrut,
      spadeStrapHinge,
      lessBottomAstragal,
      lightSealKit,
      goldBarGurantee,
      extras,
    },
    updateDropDowns,
  } = useContext(AppContext);

  return (
    <section className='bg-white shadow-md my-3'>
      <header className='p-2 bg-[#E4E4E4] text-[#34495E] font-bold'>
        Other Options
      </header>
      <div className='p-3'>
        <div className='flex flex-col md:flex-row md:items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Lock
          </label>
          <select
            name='lock'
            value={lock}
            onChange={updateDropDowns}
            className='border md:w-1/3 p-2 rounded-sm'
          >
            <option value='Inside Slide Lock (#2)'>
              Inside Slide Lock (#2)
            </option>
            <option value='Outside Slide Lock (#3)'>
              Outside Slide Lock (#3)
            </option>
          </select>
        </div>

        <div className='flex flex-col md:flex-row md:items-center justify-around my-3'>
          <label htmlFor='layout' className='text-[#34495E] w-52'>
            Packaging
          </label>
          <select
            name='packaging'
            value={packaging}
            onChange={updateDropDowns}
            className='border md:w-1/3 p-2 rounded-sm'
          >
            <option value='[x] Distributor'>[x] Distributor</option>
            <option value='[y] Distributor'>[y] Distributor</option>
          </select>
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-between my-3 md:w-[76%] mx-auto'>
          <label htmlFor='layout' className='text-[#34495E]'>
            Additional Options
          </label>
          <div className='md:w-[44%] flex flex-col md:flex-row md:items-start gap-5'>
            <div>
              <div className='flex items-center gap-3 justify-start my-7'>
                <input
                  type='checkbox'
                  name='extraStrut'
                  checked={extraStrut}
                  onChange={updateDropDowns}
                />
                <label htmlFor='extraStrut'>Extra Strut(s)</label>
              </div>
              <div className='flex items-center gap-3 justify-start my-7'>
                <input
                  type='checkbox'
                  name='spadeStrapHinge'
                  checked={spadeStrapHinge}
                  onChange={updateDropDowns}
                />
                <label htmlFor='spadeStrapHinge'>Spade StrapHinge</label>
              </div>
              <div className='flex items-center gap-3 justify-start my-7'>
                <input
                  type='checkbox'
                  name='lessBottomAstragal'
                  checked={lessBottomAstragal}
                  onChange={updateDropDowns}
                />
                <label htmlFor='lessBottomAstragal'>Less Bottom Astragal</label>
              </div>
              <div className='flex items-center gap-3 justify-start my-7'>
                <input
                  type='checkbox'
                  name='lightSealKit'
                  checked={lightSealKit}
                  onChange={updateDropDowns}
                />
                <label htmlFor='lightSealKit'>light Seal Kit</label>
              </div>
              <div className='flex items-center gap-3 justify-start my-7'>
                <input
                  type='checkbox'
                  name='goldBarGurantee'
                  checked={goldBarGurantee}
                  onChange={updateDropDowns}
                />
                <label htmlFor='goldBarGurantee'>Gold Bar Gurantee</label>
              </div>
            </div>
            <select
              name='extras'
              value={extras}
              onChange={updateDropDowns}
              className='border md:w-1/3 p-2 rounded-sm'
            >
              <option value='5 extra stuffs'>5 extra stuffs</option>
              <option value='4 extra stuff'>4 extra stuffs</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherOptions;
