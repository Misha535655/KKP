import React from 'react'
import { Link} from 'react-router-dom'
import Counter from './Counter'


function Menu() {
  const [visible, setVisible] = React.useState(false)
  const toggleVisible = () => {
		setVisible(!visible)
	}
  const [visible1, setVisible1] = React.useState(false)
  const toggleVisible1 = () => {
		setVisible1(!visible1)
	}
    return (
      <section className="navbar">
      <div className="navbar-toggle" onClick={toggleVisible}>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </div>
      <div className="tabs">
      <nav className="menu">
        <ul className="menu_list">
          <li className="menu_item">
              <Link id="nav" to='/'> Головна </Link>
          </li>

          <li className="menu_item">
          <div id="nav" onClick={toggleVisible1}> Магазин </div>
          {visible1 && 
          <ul onClick={toggleVisible1} className="submenu">
        <li><Link to="/Truna">Труни</Link></li>
        <li><Link to='/Venki'>Вінки</Link></li>
        <li><Link to="/Krest">Хрести</Link></li>
        <li><Link to="/Tovar">Інші товари</Link></li>
        <li><Link to="/Mogili">Копання могили</Link></li>
        <li><Link to="/Dostavka">Доставка труни</Link></li>
        <li><Link to="/Katafalk">Послуги катафалка</Link></li>
        <li><Link to="/Morg">Укладання та винос тіла</Link></li>
        <li><Link to="/Ather">Інші послуги</Link></li>
      </ul>}
          </li>


          <li className="menu_item">
              <Link id="nav" to='/Maps'> Кладовища міста </Link>
          </li>

          
          <li className="menu_item ">
          <Link id="nav" to='/info'>Важлива інформація</Link>
          </li>


          <li className="menu_item ">
          <Link id="nav" to='/Helper'> Питання-відповідь</Link>
          </li>

          <li className="menu_item ">
          <Link id="nav" to='/Contacts'> Контакти</Link>
          </li> 
          <li className="menu_item">  
              <Link id="nav" to='/Cart'> <Counter/> Кошик:  </Link>
          </li>
        </ul>
      </nav>
      </div>


    {visible && <nav className="menu_click">
      <ul className="menu_list_click">
        <li className="menu_item_click">
            <Link id="nav" to='/'> Главная </Link>
        </li>

        <li className="menu_item_click ">
        <Link id="nav" to='/info'> Об организации</Link>
        </li>

         <li className="menu_item_click">
        <Link id="nav" to='/Magazine'> Магазин </Link>
       </li>
      

        <li className="menu_item_click ">
        <Link id="nav" to='/Helper'> Вопрос-ответ</Link>
        </li>

        <li className="menu_item_click ">
        <Link id="nav" to='/Contacts'> Контакты</Link>
        </li> 
      </ul>
    </nav>}

      </section>

    )
}

export default Menu
