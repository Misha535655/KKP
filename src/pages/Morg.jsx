import React from 'react'
import {selectGoods} from '../store/goodsSlice'
import {useSelector, useDispatch} from 'react-redux'
import Product from '../components/Product'
import { AddCart } from '../store/AddToCartReducer'

function Krest() {
    const dispatch = useDispatch()
    const goods = useSelector(selectGoods);
    const goodsMorg = [];
    goods.map((item) =>{if(item.articul==="morg"){goodsMorg.push(item)}})
    const addToCart = (item) =>  {
      const id = item.target.id
      const finder = goodsMorg.find(item => item.id == id)
      dispatch(AddCart(finder));
      const element = item.target;
      setTimeout(() => {
        element.className = "shine-button"
      }, 300);
      if (element.className == 'shine-button'){element.className = "activeBut"}
    }
    
    return (
<div className="flex-container">
{goodsMorg.map((item) => <Product onClickAdd={addToCart} id={item.id} title={item.title} price={item.price} image={item.image}/>)}
  </div>
    )
}

export default Krest