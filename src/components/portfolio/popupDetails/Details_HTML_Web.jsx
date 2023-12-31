import React from 'react'
import './Details.css'

import Home from '../../../assets/Portfolio/JDX_Webseite/Home.png'
import Product from '../../../assets/Portfolio/JDX_Webseite/Product.png'
import Collaboration from '../../../assets/Portfolio/JDX_Webseite/Collaboration.png'
import About from '../../../assets/Portfolio/JDX_Webseite/About.png'
import Ad from '../../../assets/Portfolio/JDX_Webseite/Ad.png'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Details_HTML_Web = () => {
  return (
    <div className='details__wrapper'>
        {/* Top Picture */}
        <Swiper className='container details__container'
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${Home})`, backgroundSize: 'cover'}}>
                  <img src={Home} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${Product})`, backgroundSize: 'cover'}}>
                  <img src={Product} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${Collaboration})`, backgroundSize: 'cover'}}>
                  <img src={Collaboration} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${About})`, backgroundSize: 'cover'}}>
                  <img src={About} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${Ad})`, backgroundSize: 'cover'}}>
                  <img src={Ad} style={{visibility:'hidden'}}/>
                </SwiperSlide>
        </Swiper>


        {/* Text */}
        <h1>HTML Webseite</h1>
        <p>
          Im Rahmen des Studienmoduls "Medieninformatik 1" haben wir die Aufgabe erhalten, eine Werbekampagne für ein eigenständig konzipiertes Produkt unter dem Leitthema "Mars" zu erstellen. Dazu gehören ein Radiospot, ein Werbeplakat und eine Webseite, diese beiden sollten in die Webseite integriert werden.  Die Webseite verfügt über einen sich verändernden Hintergrund, ist responsiv und besteht nur aus HTML- und CSS-Code.
        </p>
        <br/>
        <p>
          Die Webseite und das Plakat habe ich in Einzelarbeit erstellt, ebenso war es meine erste richtige Auseinandersetzung mit HTML, CSS und GIMP(für das Plakat).
        </p>
        <br/>
        <p>    
          Das Projekt ist im GitHub-Repository zu finden.
        </p>

    </div>
  )
}

export default Details_HTML_Web