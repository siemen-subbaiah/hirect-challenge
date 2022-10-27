import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Address, Fields, ProductCart, Summary } from '../components/Cart';
import Header from '../components/Common/Header';
import { AppContext } from '../context/AppState';

const CartPage = () => {
  const { cart, addProducts } = useContext(AppContext);

  const total = cart?.reduce(
    (initialVal, item) => {
      initialVal.totalPrice = initialVal.totalPrice + item?.price * item?.qty;
      initialVal.totalItem = initialVal.totalItem + item?.qty;
      return initialVal;
    },
    {
      totalPrice: 0,
      totalItem: 0,
    }
  );

  return (
    <>
      <Header cart />
      <div className='mt-3 px-4 md:px-40 container mx-auto'>
        <ProductCart />
        <div className='grid grid-cols-10 gap-3 place-content-stretch items-center'>
          <div className='col-span-5'>
            <Fields />
          </div>
          <div className='col-span-5'>
            <Summary />
          </div>
        </div>
        <Address />
        <div className='bg-white p-3 shadow-md rounded-sm flex justify-between'>
          <div>
            <p className='text-sm'>{total.totalItem} ITEM</p>
            <h1 className='text-xl font-semibold'>
              ${total.totalPrice + 70 + 490}
            </h1>
          </div>
          <div className='flex gap-3 items-center'>
            <Link to='/configure'>
              <button className='border border-[#66332B] px-3 py-1 rounded-sm'>
                ADD MORE
              </button>
            </Link>
            <Link to='/'>
              <button
                onClick={() => addProducts(cart)}
                className='bg-[#66332B] px-3 py-1 rounded-sm text-white'
              >
                PLACE ORDER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
