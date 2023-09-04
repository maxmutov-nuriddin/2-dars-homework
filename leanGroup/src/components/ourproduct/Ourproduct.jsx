import { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import imgF from '../../assets/1.png'
import imgS from '../../assets/3.png'
import imgT from '../../assets/4.png'
import imgFo from '../../assets/5.png'
import imgFi from '../../assets/6.png'


import 'swiper/css';

export default class Ourproduct extends Component {
  render() {
    return (
      <section className='my-5'>
        <div className='container'>
          <h2 className='our__title'>
            Наша <span className='our__title-span'>продукция</span>
          </h2>
          <div className='d-flex justify-content-center gap-3 my-3 flex-wrap flex-md-nowrap'>
            <a className='our__box-link' href='#'>Ламинатные тубы</a>
            <a className='our__box-link' href='#'>Экструзионные тубы</a>
            <a className='our__box-link' href='#'>Другая упаковка</a>
          </div>
          <Swiper
            className='mt-5'
            spaceBetween={50}
            slidesPerView={4.9}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><img src={imgF} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgS} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgT} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgFo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgFi} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgF} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgS} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgT} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgFo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgFi} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgF} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgS} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgT} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgFo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgFi} alt="" /></SwiperSlide>
          </Swiper>
          <div className='d-flex justify-content-center mt-5'>
            <a className='our__link' href="#">Перейти в каталог</a>
          </div>
        </div>
      </section>
    )
  }
}
