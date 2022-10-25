import React from 'react';
import { Item } from '.';
import { items } from '../../data/items';

const Items = () => {
  return (
    <div className='mt-7 px-40 container mx-auto'>
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
