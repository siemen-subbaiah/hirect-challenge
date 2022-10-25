import React, { useState } from 'react';
import { Header } from '../components/Common';
import { Table, Nodata, TableHeader } from '../components/Home';

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [tableIndex, setTableIndex] = useState(0);

  return (
    <div className='bg-[#F6F8FA] h-screen'>
      <Header tabs index={index} setIndex={setIndex} />
      <div className='px-4'>
        <TableHeader tableIndex={tableIndex} setTableIndex={setTableIndex} />
        <hr />
      </div>
      {index === 0 && tableIndex === 0 ? <Table /> : <Nodata />}
    </div>
  );
};

export default HomePage;
