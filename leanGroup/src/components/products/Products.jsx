import { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import slF from '../../assets/image 7.png'
import slS from '../../assets/image 8.png'
import slT from '../../assets/image 9.png'
import slFo from '../../assets/image 10.png'
import slFi from '../../assets/image 11.png'

import 'swiper/css';

export default class Products extends Component {
  render() {
    return (
      <section className='my-5'>
        <div className="container">
          <h2 className="products__title my-5">
            Качество продукции подтверждают <span className='products__title-span'>сертификаты</span>
          </h2>
          <div className="products__box">
            <Swiper
              spaceBetween={50}
              slidesPerView={5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><img className='swiper__img' src={slF} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slS} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slT} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slFo} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slFi} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slF} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slS} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slT} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slFo} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slFi} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slF} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slS} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slT} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slFo} alt="" /></SwiperSlide>
              <SwiperSlide><img className='swiper__img' src={slFi} alt="" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    )
  }
}
