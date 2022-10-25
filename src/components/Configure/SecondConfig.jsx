import React from 'react';
import {
  LayoutOptions,
  WindowOptions,
  TrackOptions,
  OtherOptions,
} from '../Configure';

const SecondConfig = () => {
  return (
    <div className='relative'>
      <LayoutOptions />
      <WindowOptions />
      <TrackOptions />
      <OtherOptions />
    </div>
  );
};

export default SecondConfig;
