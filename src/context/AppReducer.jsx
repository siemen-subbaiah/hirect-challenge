export const initialState = {
  data: {
    category: 'Residential Door',
    series: 'Canyon Ridge Collection',
    doorType: 'CAN212',
    assemblyType: 'Complete Door',
    wFeet: '8ft',
    wInch: '2 in.',
    hFeet: '6ft',
    hInch: '0 in.',
    windCode: 'Windcode W1',
    design: 'CC',
    color: 'Dark Finish',
    glassType: 'Solid (No Windows)',
    sectionGlazed: 'Sections 4',
    framing: 'Arch 1 Design',
    spring: 'Galvanized Torsion',
    trackSize: '2" Flag & Jamb Brackets Loose',
    trackMount: 'Bracket',
    trackLift: 'Standard',
    trackRadius: '12" Radius',
    lock: 'Inside Slide Lock (#2)',
    packaging: '[X] Distributor',
    extraStrut: false,
    spadeStrapHinge: false,
    lessBottomAstragal: false,
    lightSealKit: true,
    goldBarGurantee: false,
    extras: '5 extra stuffs',
  },
  cart: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  products: localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DROPDOWNS': {
      const { name, value } = action.payload;
      return { ...state, data: { ...state.data, [name]: value } };
    }

    case 'ADD_TO_CART': {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case 'PLUS_ITEM': {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, qty: item.qty++ };
          }
          return item;
        }),
      };
    }
    case 'MINUS_ITEM': {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, qty: item.qty <= 1 ? 1 : item.qty-- };
          }
          return item;
        }),
      };
    }

    case 'EDIT_CART_ITEM': {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...action.payload.data };
          }
          return item;
        }),
      };
    }
    case 'EDIT_ITEM': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'DELETE_ITEM': {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case 'ADD_PRODUCT': {
      return {
        ...state,
        products: [...state.products, ...action.payload],
        cart: [],
      };
    }
  }
};
