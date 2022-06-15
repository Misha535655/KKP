import React from 'react'
function ProductCart({ title, id, totalPrice, totalCount, onClickDelete, onPlus, onMinus,}) {
    return (

      <div className="flex-cart">
            <p className='titleCart'>{title}</p>
            <div className="count-tovar">     
            <div className="shine-button cart" onClick={onPlus} id={id}>+</div>
      
              <p className='cart'>{totalCount}</p>
              <div className="shine-button cart" onClick={onMinus} id={id}>-</div> 
            </div>
            <p>{totalPrice} грн.</p>
            <div className="count-tovar">
            <button className='shine-button cart' onClick={onClickDelete} id={id} >Видалити</button>
            </div>
          </div>

    )
}

export default ProductCart
