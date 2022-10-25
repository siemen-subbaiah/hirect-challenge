import React from 'react';
import { useState } from 'react';
import { Header } from '../components/Common';
import { FirstConfig, SecondConfig } from '../components/Configure';

const ConfigurePage = () => {
  const [configNumb, setConfigNumb] = useState(2);

  return (
    <>
      <Header configure configNumb={configNumb} setConfigNumb={setConfigNumb} />
      <div className='mt-3 px-4 md:px-40 container mx-auto'>
        {configNumb === 2 ? (
          <FirstConfig setConfigNumb={setConfigNumb} />
        ) : (
          <SecondConfig />
        )}
      </div>
    </>
  );
};

export default ConfigurePage;
