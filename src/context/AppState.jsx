import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { initialState, reducer } from './AppReducer';

export const AppContext = createContext();

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('products', JSON.stringify(state.products));
  }, [state.cart, state.products]);

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: `${Date.now()}`,
        category: state.data.category,
        series: state.data.series,
        doorType: state.data.doorType,
        assemblyType: state.data.assemblyType,
        wFeet: state.data.wFeet,
        wInch: state.data.wInch,
        hFeet: state.data.hFeet,
        hInch: state.data.hInch,
        windCode: state.data.windCode,
        design: state.data.design,
        color: state.data.color,
        glassType: state.data.glassType,
        sectionGlazed: state.data.sectionGlazed,
        framing: state.data.framing,
        spring: state.data.spring,
        trackSize: state.data.trackSize,
        trackMount: state.data.trackMount,
        trackLift: state.data.trackLift,
        trackRadius: state.data.trackRadius,
        lock: state.data.lock,
        packaging: state.data.packaging,
        extraStrut: state.data.extraStrut,
        spadeStrapHinge: state.data.spadeStrapHinge,
        lessBottomAstragal: state.data.lessBottomAstragal,
        lightSealKit: state.data.lightSealKit,
        goldBarGurantee: state.data.goldBarGurantee,
        extras: state.data.extras,
        price: 4500,
        qty: 1,
      },
    });
  };

  const editItem = (item) => {
    dispatch({ type: 'EDIT_ITEM', payload: item });
  };

  const editCartItem = (id, data) => {
    dispatch({ type: 'EDIT_CART_ITEM', payload: { id, data } });
  };

  const deleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  const increaseItem = (id) => {
    dispatch({ type: 'PLUS_ITEM', payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: 'MINUS_ITEM', payload: id });
  };

  const addProducts = (cartItem) => {
    dispatch({ type: 'ADD_PRODUCT', payload: cartItem });
  };

  const updateDropDowns = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'extraStrut') {
      value = e.target.checked;
    }
    if (name === 'spadeStrapHinge') {
      value = e.target.checked;
    }
    if (name === 'lessBottomAstragal') {
      value = e.target.checked;
    }
    if (name === 'lightSealKit') {
      value = e.target.checked;
    }
    if (name === 'goldBarGurantee') {
      value = e.target.checked;
    }

    dispatch({ type: 'UPDATE_DROPDOWNS', payload: { name, value } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateDropDowns,
        addToCart,
        increaseItem,
        decreaseItem,
        editItem,
        editCartItem,
        deleteItem,
        addProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
