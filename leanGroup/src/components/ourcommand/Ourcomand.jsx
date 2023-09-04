import { Component } from 'react'

import img from '../../assets/girl.png'
import imgS from '../../assets/girl56.png'
import imgT from '../../assets/girl2.png'
import imgFo from '../../assets/girl3.png'
import imgFi from '../../assets/girl4.png'

export default class Ourcomand extends Component {
  render() {
    return (
      <section className='my-5'>
        <div className="container">
          <h2 className="our__title">
            Наша <span className="our__title-span">
              команда
            </span>
          </h2>
          <div className='d-flex justify-content-between flex-wrap'>
            <div>
              <img className='our__img' src={img} alt="img" />
              <h3 className='our__box__inner-title mt-2'>Войнич Дарья</h3>
              <p className='our__box__inner-text my-2'>Заместитель директора по продажам</p>
              <p className='our__box__inner-number'>+375 (17) 270-53-77 (317)</p>
            </div>
            <div>
              <img className='our__img' src={imgS} alt="img" />
              <h3 className='our__box__inner-title mt-2'>Мисько Екатерина</h3>
              <p className='our__box__inner-text my-2'>Начальник отдела сопровождения</p>
              <p className='our__box__inner-number'>+375 (17) 270-53-77 (115)</p>
              <p className='our__box__inner-number'>+375 (17) 270-53-77 (333)</p>
              <p className='our__box__inner-email mt-2'>k.melnichenko@leangroup.by</p>
            </div>
            <div>
              <img className='our__img' src={imgT} alt="img" />
              <h3 className='our__box__inner-title mt-2'>Дмитроченко Дмитрий</h3>
              <p className='our__box__inner-text my-2'>Начальник отдела допечатной подготовки</p>
              <p className='our__box__inner-number'>+375 (17) 270-53-77 (148)</p>
              <p className='our__box__inner-number'>+375 (17) 270-53-77 (322)</p>
              <p className='our__box__inner-email mt-2'>dmitrochenko@leangroup.by</p>
            </div>
            <div>
              <img className='our__img' src={imgFo} alt="img" />
              <h3 className='our__box__inner-title mt-2'>Антух Евгений</h3>
              <p className='our__box__inner-text my-2'>Начальник отдела снабжения</p>
              <p className='our__box__inner-number'> +375 29 112-73-48</p>
              <p className='our__box__inner-number'> +375 29 360-32-26</p>
              <p className='our__box__inner-email mt-2'>j.antuh@leangroup.by</p>
            </div>
            <div>
              <img className='our__img' src={imgFi} alt="img" />
              <h3 className='our__box__inner-title mt-2'>Мисник Елена</h3>
              <p className='our__box__inner-text my-2'>Специалист по работе с клиентами</p>
              <p className='our__box__inner-number'> +375 44 764-16-28</p>
              <p className='our__box__inner-number'> +375 29 329-34-03</p>
              <p className='our__box__inner-email mt-2'>e.misnik@leangroup.by</p>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <a className='our__link ' href="#">Наша команда</a>
          </div>
        </div>
      </section>
    )
  }
}
