import React from 'react'
import {selectGoods} from '../store/goodsSlice'
import {useSelector, useDispatch} from 'react-redux'
import Product from '../components/Product'

function Magazine() {
    const dispatch = useDispatch()
    const goods = useSelector(selectGoods);
    return (
  <div className="flex-container">
      {goods.map((item) => <Product title={item.title} price={item.price} image={item.image}/>)}
  </div>
    )
}

export default Magazine
