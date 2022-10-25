import React from 'react';

const Header = ({ tabs, setIndex, index }) => {
  return (
    <header className='bg-[#34495E] text-white p-3'>
      {tabs && (
        <div className='flex justify-center items-center gap-10'>
          <h1
            className={`cursor-pointer ${
              index === 0 && 'border-b-2 border-yellow-500'
            }`}
            onClick={() => setIndex(0)}
          >
            CHARTS
          </h1>
          <h1
            className={`cursor-pointer ${
              index === 1 && 'border-b-2 border-yellow-500'
            }`}
            onClick={() => setIndex(1)}
          >
            FAVORITES
          </h1>
        </div>
      )}
    </header>
  );
};

export default Header;
