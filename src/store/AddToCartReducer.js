import {createSlice} from '@reduxjs/toolkit';
/*const initialState = {
    items: {}
  };

const cart = (state = initialState, actions) => {
    switch (actions.type) {
        case "ADD_TO_CART" :
            return {
                ...state,
                items: {
                    ...state.items,
                    [actions.payload.id]: !state.item[actions.payload.id]
                        ? [actions.payload]
                        : [...state.item[actions.payload.id], actions.payload],
                },
            };
        default:
            return state;    
    }
}
export default cart*/
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};


export const addToCart = createSlice({
    name: "adder",
    initialState: {
        items : {},
        totalPrice: 0,
        count: 0,
    },
    reducers: {
        AddCart: (state, action) => {
          

        const currentItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

        const newItems = {
            ...state.items,
            [action.payload.id]: {
              items: currentItems,
              totalPrice: getTotalPrice(currentItems),
            },
          };
          const totalCount = getTotalSum(newItems, 'items.length');
          const totalPrice = getTotalSum(newItems, 'totalPrice');
          return {
            ...state,
            count: totalCount,
            items: newItems,
            totalPrice: totalPrice,
          };

        },


        DeleteCart: (state, action) => {
          const newItems = {
            ...state.items,
          };
          const currentTotalPrice = newItems[action.payload].totalPrice;
          const currentTotalCount = newItems[action.payload].items.length;
          delete newItems[action.payload];
          return {
            ...state,
            items: newItems,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.count - currentTotalCount,
          };
        },
        


        Plus: (state, action) => {
          const newObjItems = [
          ...state.items[action.payload].items,
          state.items[action.payload].items[0],
        ];
        const newItems = {
          ...state.items,
          [action.payload]: {
            items: newObjItems,
            totalPrice: getTotalPrice(newObjItems),
          },
        };
  
        const totalCount = getTotalSum(newItems, 'items.length');
        const totalPrice = getTotalSum(newItems, 'totalPrice');
        return {
          ...state,
          items: newItems,
          count: totalCount,
          totalPrice:totalPrice
        };
      },

      Minus: (state, action) => {
        const oldItems = state.items[action.payload].items;
        const newObjItems =
          oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
        const newItems = {
          ...state.items,
          [action.payload]: {
            items: newObjItems,
            totalPrice: getTotalPrice(newObjItems),
          },
        };
  
        const totalCount = getTotalSum(newItems, 'items.length');
        const totalPrice = getTotalSum(newItems, 'totalPrice');

  
        return {
          ...state,
          items: newItems,
          count: totalCount,
          totalPrice:totalPrice,
        };
      },

      Clear: () => {return { totalPrice: 0, totalCount: 0, items: {} }}
    },
})
export const {AddCart, DeleteCart, Plus, Minus, Clear} = addToCart.actions;
export const SelectCart = state => state.Cart
export default addToCart.reducer;
