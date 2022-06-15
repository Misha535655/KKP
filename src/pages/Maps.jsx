import React from 'react'
import {Footer } from '../components/import'
import table from '../image/table.png'

function Maps() {
    return (
        <div>
            <h1 className="table-name">Перелік кладовищ міста Маріуполь</h1>
        <div className='flex-container-table'>
        <div className='map'>
            <iframe className='mapp' src="https://www.google.com/maps/d/embed?mid=1lQATz1bQ_4G5sVmpZvQyIVVQqRew90-k" ></iframe>
          </div>
       <img src={table} alt=""/>


        </div>
        <Footer/>
        </div>

    )
}

export default Maps
