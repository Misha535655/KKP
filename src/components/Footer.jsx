import React from 'react'

function Footer() {
    return (
<section className="footerp">
		<div className='green'>
		<img src="https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-pin-container-bg_4x.png,icons/onion/SHARED-mymaps-pin-container_4x.png,icons/onion/1899-blank-shape_pin_4x.png&highlight=ff000000,0F9D58&scale=2.0" alt=""/>
				<p>-Відкрито для поховань</p>

				
		</div>
		<div className='yellow'>

		<img src="https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-pin-container-bg_4x.png,icons/onion/SHARED-mymaps-pin-container_4x.png,icons/onion/1899-blank-shape_pin_4x.png&highlight=ff000000,F9A825&scale=2.0" alt=""/>
		<p>-Закрито з правом підпоховання</p>
		</div>
		<div className='red'>
		<img src="https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-pin-container-bg_4x.png,icons/onion/SHARED-mymaps-pin-container_4x.png,icons/onion/1899-blank-shape_pin_4x.png&highlight=ff000000,C2185B&scale=2.0" alt=""/>
		<p>-Закрито</p>
		</div>
	</section>
    )
}

export default Footer
