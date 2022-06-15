import React from 'react'
import img1 from '../image/IMG_E8533.JPG';
function Contacts() {
    return (
        <div className='a_color'>
    <div className='director'>
        <div className="dirPhoto">
            <img src={img1} alt="" />
        </div>
           
        <div className ='time'>
            <p className='marker'>Директор Степанкова Галина Юріївна</p>
            <p>Особистий прийом: Понеділок з 8.00 до 12.00</p>
        </div>
    </div>
        <div className='director'>
        <p>Старо-Кримське кладовище</p>
        <p>щоденно з 7.00 до 16.00</p>
        </div>
        <div className='director'>
        <p>Ново-Троїцьке кладовище</p>
        <p>щоденно з 7.00 до 16.00</p>
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
    )
}

export default Contacts
