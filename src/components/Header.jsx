import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../image/logo.png'

function Header() {
    return (
      <div className='Header'>
        <div className="Header_flex">
          <div className="flex-item">
            <div className="logo">
                <Link to='/'><img src={Logo} alt=""/></Link>
            </div>
          </div>
          <div className="flex-item">
            <div className="title">
              <p>КОМУНАЛЬНЕ ПІДПРИЄМСТВО</p>
              <p >Маріупольської міської ради</p>
              <p className="space">РИТУАЛЬНА СЛУЖБА</p>
              <p>Допомогаємо людям більше 30 років</p>
              <a className='adres' href="https://www.google.com/maps/place/улица+Греческая,+41,+Мариуполь,+Донецкая+область,+87500/@47.0945232,37.5512948,17z/data=!3m1!4b1!4m5!3m4!1s0x40e6e467ad87386b:0x829aa6bdee1707a!8m2!3d47.0945232!4d37.5534835">Адреса вул. Грецька, 41, м.Маріуполь 87515</a>
                </div>
            </div>
          
          <div className="flex-item">
          <p className="sup">Телефон для довідок</p>
              <div className="flex-numb">
                  <a href="tel:(0629) 33 51 47">(0629) 33 51 47 </a><br/>
                  <a href="tel:(0629) 47 00 81">(0629) 47 00 81 </a><br/>
                  <a href="tel:+38 (097) 927 15 95">+38 (097) 927 15 95</a><br/>
                  <a href="https://mail.google.com/mail/u/0/?tab=mm#inbox?compose=CllgCKCBBHxkXJzxzjJzMqXSJdLhlLQsJkkKSnkqWmGJwHhJpqGgSGslKqGMdznsfqhjVZNHfMg">kp.mmr.rs@gmail.com</a>
        </div>
         </div>
         </div>
      </div>

    )
}

export default Header
