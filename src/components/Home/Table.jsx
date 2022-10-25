import React from 'react';
import { ImPlus } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Table = () => {
  return (
    <section className='flex justify-center mt-5 px-3 overflow-x-auto relative rounded-2xl'>
      <table className='shadow-md'>
        <tbody>
          <tr>
            <td className='text-[#8894A0]'>PRODUCT INFORMATION</td>
            <td className='text-[#8894A0]'>CART NAME</td>
            <td className='text-[#8894A0]'>SHIPPING POINT</td>
            <td className='text-[#8894A0]'>CREATED BY</td>
            <td className='text-[#8894A0]'>EXPIRY</td>
          </tr>
          <tr>
            <td>2 Classic Collection Garage Door, 2 Entry Door</td>
            <td>Johnson_Classic14209123</td>
            <td>Russia Plant</td>
            <td>Manoj Bajpayee</td>
            <td>Expires in 6 days</td>
          </tr>
          <tr>
            <td>10' 0'' X 10' 0.0'' CAN211CCW1 COMPLETE DOOR INTELLICORE</td>
            <td>Carter_Classic14209123</td>
            <td>Russia Plant</td>
            <td>Steve Benneth...</td>
            <td>Expires in 4 days</td>
          </tr>
          <tr>
            <td>
              Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®
            </td>
            <td>Michigan_Classic14209123</td>
            <td>ABC Plant</td>
            <td>Steve Benneth...</td>
            <td>Expires in 90 days</td>
          </tr>
          <tr>
            <td>
              Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®
            </td>
            <td>Michigan_Classic14209123</td>
            <td>ABC Plant</td>
            <td>Steve Benneth...</td>
            <td>Expires in 90 days</td>
          </tr>
          <tr>
            <td>
              Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®
            </td>
            <td>Michigan_Classic14209123</td>
            <td>ABC Plant</td>
            <td>Steve Benneth...</td>
            <td>Expires in 90 days</td>
          </tr>
          <tr>
            <td>
              Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®
            </td>
            <td>Michigan_Classic14209123</td>
            <td>ABC Plant</td>
            <td>Steve Benneth...</td>
            <td>Expires in 90 days</td>
          </tr>
        </tbody>
      </table>
      <Link to='/create'>
        <div className='absolute bottom-10 right-[6rem] cursor-pointer'>
          <div className='bg-[#66332B] p-3 rounded-full shadow shadow-red-900'>
            <ImPlus color='#fff' size='1.2rem' />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Table;
