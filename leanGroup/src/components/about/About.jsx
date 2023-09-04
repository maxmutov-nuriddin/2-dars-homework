import { Component } from 'react'

import aboutImg from '../../assets/video.png'

export default class About extends Component {
  render() {
    return (
      <section className='my-5'>
        <div className="container">
          <h2 className="about__title">
            О компании <span className='about__title-span'>LEANGROUP</span>
          </h2>
          <div className="about__box d-flex flex-xl-nowrap flex-wrap gap-5 align-items-center">
            <div className="about__box-img">
              <img src={aboutImg} alt="" className="box__img" />
            </div>
            <div className="about__box-description d-flex flex-column gap-5">
              <p className="inner__text">Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.</p>
              <p className="inner__text">Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.</p>
              <p className="inner__text">С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
