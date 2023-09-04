import { Component } from 'react'

import img1 from '../../assets/firstimg.png'
import img2 from '../../assets/secondimg.png'
import img3 from '../../assets/thirdimg.png'

export default class News extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className='d-flex justify-content-between flex-wrap'>
            <div className="news__box">
              <img src={img1} alt="certificate" className="news__box-img" />
              <p className='news__box-data my-2'>
                28.01.2022
              </p>
              <p className='news__box-text'>
                <q>ЛеанГрупп</q> серебряный призер EcoVadis!
              </p>
            </div>
            <div className="news__box">
              <img src={img2} alt="certificate" className="news__box-img" />
              <p className='news__box-data my-2'>
                28.01.2022
              </p>
              <p className='news__box-text'>
                <q>ЛеанГрупп</q> серебряный призер EcoVadis!
              </p>
            </div>
            <div className="news__box">
              <img src={img3} alt="certificate" className="news__box-img" />
              <p className='news__box-data my-2'>
                28.01.2022
              </p>
              <p className='news__box-text'>
                Туба, как вид упаковки
              </p>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <a className='our__link' href="#">Все новости</a>
          </div>
        </div>
      </section>
    )
  }
}
