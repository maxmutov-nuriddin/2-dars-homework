import { Component } from 'react'


export default class Hero extends Component {
  render() {
    return (
      <section className='hero '>
        <div className="container">
          <div className="hero__box">
            <div className='div '>
              <p className="box__inner-text">
                LEANGROUP - тубы и этикетки
              </p>
              <h2 className='box__inner-title mt-md-3 mt-1'>
                Ламинатные тубы
              </h2>
              <p className='box__inner-description my-md-3 my-2'>
                Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do-it-Yourself).
              </p>
              <a href="#" className='box__inner-link'>
                Каталог
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
