import React from 'react'
import './Details.css'

import Header from  '../../../assets/Portfolio/React_Webseite/Header.PNG'
import HeaderGIF from  '../../../assets/Portfolio/React_Webseite/Header.gif'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Details_React_Web = () => {
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
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${HeaderGIF})`, backgroundSize: 'cover'}}>
                  <img src={HeaderGIF} style={{visibility:'hidden'}}/>
                </SwiperSlide>
        </Swiper>


        {/* Text */}
        <h1>Meine erste React Webseite</h1>
            <p>
              Dies ist mein erster Versuch, eine responsive Webseite mit React zu erstellen. Hier stelle ich mich vor und zeige meine Projekte, mit denen ich mich während meines Studiums beschäftigt habe.
            </p>
            <br/>
            <p>
              Der vollständige Quellcode dieser React-Anwendung kann im verlinkten GitHub abgerufen werden.
            </p>
    </div>
  )
}

export default Details_React_Web