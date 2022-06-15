import React from 'react'


function Product({id, title, price, image, onClickAdd}) {
    return (
        <div className="flex-item">
        <div className="flex-item_block">
          <div className="flex-item_img">
            <img src={image}></img>
          </div>
          <div className="desc" >
            <p>{price} грн.</p>
            <p>{title}</p>   
            <button onClick={onClickAdd} className='shine-button' id={id}>В Кошик</button> 
        </div>
        </div>
      </div>
    )
    }

export default Product