import React from 'react';
import { MdApps, MdNotifications } from 'react-icons/md';
import { FaQuestionCircle } from 'react-icons/fa';
import avatar from '../../images/avatar.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='bg-black text-white flex items-center justify-between p-3'>
      <Link to='/'>
        <div className='flex items-center gap-2 ml-2 cursor-pointer'>
          <div className='bg-[#ED357E] pl-[0.65rem] pr-[0.65rem] py-1 rounded-full'>
            <p>f1</p>
          </div>
          <h1 className='text-xl font-semibold'>studioz</h1>
        </div>
      </Link>
      <div className='flex gap-7 items-center mr-5 cursor-pointer'>
        <MdApps color='#525960' size='1.7rem' />
        <MdNotifications color='#525960' size='1.5rem' />
        <FaQuestionCircle color='#525960' size='1.4rem' />
        <img src={avatar} height={28} width={28} alt='avatar' />
      </div>
    </nav>
  );
};

export default NavBar;
