import React from 'react'
import {selectGoods} from '../store/goodsSlice'
import {useSelector, useDispatch} from 'react-redux'
import Product from '../components/Product'
import { AddCart } from '../store/AddToCartReducer'


function Tovar() {
    const dispatch = useDispatch()
    const goods = useSelector(selectGoods);
    const goodsTovar = [];
    goods.map((item) =>{if(item.articul==="Tovar"){goodsTovar.push(item)}} );
    // const accept = () => {

    // }
    const addToCart = (item) =>  {
      const id = item.target.id
      const finder = goodsTovar.find(item => item.id == id)
      dispatch(AddCart(finder));
      const element = item.target;
      setTimeout(() => {
        element.className = "shine-button"
      }, 300);
      if (element.className == 'shine-button'){element.className = "activeBut"}
    }
    
    return (
<div className="flex-container">
{goodsTovar.map((item) => <Product  onClickAdd = {addToCart}  id={item.id} title={item.title} price={item.price} image={item.image}/>)}
  </div>
    )
}

export default Tovar