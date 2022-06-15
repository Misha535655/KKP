import React from 'react'
import back from '../image/IMG_0532.JPG'



function Index() {
    return (
<div>
            <section className="about">
                <img className='back_img' src={back} alt=""/>
		<div className="about_text">
			<h1 className="lozung">Ми єдині в місті надаємо повний пакет послуг з поховання та гарантуємо самі низькі ціни </h1>
            <h1>Наші послуги: </h1>
            <ul className="organization">
            <li>Укладення договорів – замовлення на організацію та проведення поховань</li>
            <li>Надання свідоцтва про поховання</li>
            <li>Реєстрація поховань та перепоховань, намогильних споруд</li>
            <li>Надання місць поховання на кладовищах для поховання померлих</li>
            <li>Укладення договорів на надання ритуальних послуг іншим організаціям та ФOП</li>
            <li>Охорона нового майданчика Старо-Кримського</li>
            <li>Поховання одиноких (безрідних) громадян</li>
            <li>Транспортування померлих та загиблих громадян до моргів Маріуполя</li>
            </ul>


            
            
            {/* <div className ='time'>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>

            </div> */}
		</div>
	</section>
        </div>

    )
}

export default Index
