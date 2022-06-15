import React from 'react'
import {selectGoods} from '../store/goodsSlice'
import {useSelector, useDispatch} from 'react-redux'
import Product from '../components/Product'
import { AddCart } from '../store/AddToCartReducer'
import { Link} from 'react-router-dom'


function Truna() {
  const [visible, setVisible] = React.useState(false)
    const dispatch = useDispatch()
    const goods = useSelector(selectGoods);
    const goodsTruna = [];
    const toggleVisible = () => {
      setVisible(!visible)
    }
    goods.map((item) =>{if(item.articul==="truna"){goodsTruna.push(item)}} );
    const goToCart = () => {<Link to='/Cart'></Link>}
    const goBackToBuy = () => toggleVisible();
    const addToCart = (item) =>  {
      const id = item.target.id
      const finder = goodsTruna.find(item => item.id == id)
      dispatch(AddCart(finder));
      const element = item.target;
      toggleVisible()
      setTimeout(() => {
        element.className = "shine-button"

      }, 300);
      if (element.className == 'shine-button'){element.className = "activeBut"}
    }

   
    
    return (
<div className="flex-container">
{goodsTruna.map((item) => <Product onClickAdd = {addToCart} id={item.id} title={item.title} price={item.price} image={item.image}/>)}

{visible && <div className='accept'>
<div className='question'>Товар доданий до кошика!</div>
  <div className='question'>Перейти до кошика?</div>
    <div className="flex-conteiner">
<Link className="shine-button" to='/Cart'>Так</Link>
  <div className="shine-button" onClick={goBackToBuy}>Ні</div>
  </div>
</div>}
  </div>
    )
}

export default Truna
