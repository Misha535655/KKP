import {React, useState}from 'react'
import emailjs from 'emailjs-com'
import {useSelector, useDispatch} from 'react-redux'
import {ProductCart} from '../components/import'
import { DeleteCart, Minus, Plus, Clear} from '../store/AddToCartReducer'
import { SelectCart } from '../store/AddToCartReducer'
function Cart() {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
      setVisible(!visible)
    }
    const {items, count, totalPrice} = useSelector(SelectCart);
    const addedCart = Object.keys(items).map((key) => {
      return items[key].items[0];
    });

    const mailContent = addedCart.map((item) => {
      const count = items[item.id].items.length
      const title = item.title
      const mail = title + `________ ${count} шт.`
      
      return mail })
    


      const MailhHendel = () => {
       var Mail = 
       { 
        to_name: document.getElementById('name').value,
        from_name: document.getElementById('sername').value,
        tel: document.getElementById('tel').value,
        mail: document.getElementById('mail').value,
        message: document.getElementById('content').value,
        content2: document.getElementById('content2').value,

       };
       emailjs.send('service_tnvfhrx', 'template_iimwzya', Mail, 'user_inmh8GBfdYfjAswyJ97bM')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
   }
   

      
      


    const DleteItem = (item) => {
      const id = item.target.id
      dispatch(DeleteCart(id))
    }
    const onPlusItem = (item) => {
      const id = item.target.id
       dispatch(Plus(id))
    }
    const onMinusItem = (item) => {
      const id = item.target.id
       dispatch(Minus(id))
    }
    const hendelClear = () => {dispatch(Clear())}
    return (
      <div>
        {!visible ? (<div className= 'container'>
          
      



{addedCart.map((item) => <ProductCart 
onClickDelete = {DleteItem} 
onPlus = {onPlusItem}
onMinus = {onMinusItem}
totalPrice={items[item.id].totalPrice}
totalCount={items[item.id].items.length}
id = {item.id} 
title={item.title}
price={item.price} 
image={item.image}/>)}  



<div className="footer-Cart">
<div className="total-count">Ви обрали {count} товарів</div>
<div className="shine-button" onClick={hendelClear}>Видалити все</div>
<div className="shine-button"onClick={toggleVisible}>Оформити</div>
<div className="total-price"> загальна ціна: {totalPrice} грн</div>
</div>
</div>) 

: 

(
<form className="decor">
<div className="form-left-decoration"></div>
<div className="form-right-decoration"></div>
<div className="circle"></div>
<div className="form-inner">
<h3>Оформлення заказа</h3>

<input type="text" id='name' name = 'name' required placeholder="І'мя"/>
<input type="text" id='sername' name = 'sername'required placeholder="Прізвище"/>
<input type="tel"  id='tel' name = 'tel' required placeholder="Номер телефона"/>
<input type="email" id='mail' name = 'mail'  required placeholder="E-mail"/>
<input id = 'content' className = "none" value = {mailContent}/>
<input id = 'content2' className = "none" value = {totalPrice}/>

<div className="Itog">
<h3>Разом</h3>
<h3>Kількість товару: {count}  шт</h3>
<h3>Ціна замовлення: {totalPrice} грн</h3>


</div>
<div className = 'shine-button'  onClick={toggleVisible}> Відмінити замовлення</div>
<div className = 'shine-button'  onClick = {MailhHendel}> Відправити замовлення </div>
</div>
</form>)}




  </div>
    )  
}

export default Cart
{/* <FormCart onClickBack={toggleVisible} count={count} price={totalPrice} /> */}