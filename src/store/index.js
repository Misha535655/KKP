import {configureStore} from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice'
import CartReducer from './AddToCartReducer'


/*const rootReducer = combineReducers({
    goods:goodsReducer,
    Cart: CartReducer
    
  });*/

 const store = configureStore({
    reducer:{
        goods: goodsReducer ,
        Cart: CartReducer
    },
});
export default store;