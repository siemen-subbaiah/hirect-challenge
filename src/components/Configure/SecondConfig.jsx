import React, { useContext, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AppContext } from '../../context/AppState';
import {
  LayoutOptions,
  WindowOptions,
  TrackOptions,
  OtherOptions,
} from '../Configure';

const SecondConfig = () => {
  const { data, addToCart, editItem, cart, editCartItem } =
    useContext(AppContext);

  const [URLParams] = useSearchParams();

  const id = URLParams.get('edit');

  const item = cart?.find((item) => item?.id === id);

  useEffect(() => {
    item && editItem(item);
  }, [item]);

  return (
    <>
      <LayoutOptions />
      <WindowOptions />
      <TrackOptions />
      <OtherOptions />
      <div className='bg-white p-4 flex gap-3 justify-end'>
        <button className='border border-[#66332B] px-3 py-1 rounded-sm'>
          PREVIEW
        </button>
        {item ? (
          <Link to='/cart'>
            <button
              className='bg-[#66332B] px-3 py-1 rounded-sm text-white'
              onClick={() => editCartItem(item?.id, data)}
            >
              EDIT ITEM
            </button>
          </Link>
        ) : (
          <Link to='/cart'>
            <button
              className='bg-[#66332B] px-3 py-1 rounded-sm text-white'
              onClick={addToCart}
            >
              ADD T0 CART
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default SecondConfig;
