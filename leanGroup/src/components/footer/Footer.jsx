import { Component } from 'react'


import logo from '../../assets/logo.svg'

export default class Footer extends Component {
  render() {
    return (
      <footer className='mt-5'>
        <div className='d-flex justify-content-between flex-wrap'>
          <img src={logo} alt="logo" />
          <div className='d-flex align-items-center justify-content-between gap-3'>
            <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.3122 1.97563C29.5218 1.2622 29.3122 0.739014 28.3211 0.739014H25.0379C24.2025 0.739014 23.8207 1.19162 23.6111 1.68873C23.6111 1.68873 21.9418 5.8604 19.5764 8.56532C18.8128 9.3524 18.464 9.60095 18.0478 9.60095C17.8397 9.60095 17.5373 9.3524 17.5373 8.63896V1.97563C17.5373 1.11951 17.2963 0.739014 16.6001 0.739014H11.441C10.92 0.739014 10.6056 1.13486 10.6056 1.51229C10.6056 2.32238 11.7883 2.50956 11.9096 4.79255V9.74517C11.9096 10.8299 11.7195 11.0278 11.3003 11.0278C10.1879 11.0278 7.48112 6.8408 5.87471 2.04775C5.56181 1.11644 5.24592 0.740549 4.40753 0.740549H1.12584C0.18714 0.740549 0 1.19316 0 1.69026C0 2.58321 1.11236 7.0019 5.18154 12.8459C7.89433 16.8366 11.7135 18.9999 15.1928 18.9999C17.2783 18.9999 17.5358 18.5197 17.5358 17.6912V14.6748C17.5358 13.7143 17.7349 13.521 18.3951 13.521C18.8802 13.521 19.7156 13.7726 21.6634 15.6951C23.8881 17.975 24.2564 18.9984 25.5065 18.9984H28.7882C29.7254 18.9984 30.194 18.5181 29.9245 17.5699C29.6295 16.6264 28.5666 15.2532 27.1563 13.6284C26.3898 12.7017 25.2445 11.7044 24.8956 11.2058C24.4091 10.5629 24.5498 10.2791 24.8956 9.70835C24.8971 9.70989 28.896 3.93796 29.3122 1.97563Z" fill="#EF7C00" />
            </svg>
            <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.2609 0.842911C18.2609 0.62197 18.1734 0.410078 18.0178 0.253849C17.8621 0.0976202 17.651 0.00985146 17.4308 0.00985146H13.2806C11.1908 -0.0946294 9.14471 0.635298 7.58942 2.04015C6.03413 3.445 5.09609 5.41057 4.98024 7.50739V12.0059H0.83004C0.609899 12.0059 0.398776 12.0937 0.243113 12.2499C0.0874505 12.4061 0 12.618 0 12.839V17.1709C0 17.3918 0.0874505 17.6037 0.243113 17.7599C0.398776 17.9162 0.609899 18.0039 0.83004 18.0039H4.98024V29.1669C4.98024 29.3879 5.06769 29.5998 5.22335 29.756C5.37901 29.9122 5.59014 30 5.81028 30H10.7905C11.0107 30 11.2218 29.9122 11.3774 29.756C11.5331 29.5998 11.6206 29.3879 11.6206 29.1669V18.0039H15.97C16.1545 18.0066 16.3347 17.9474 16.4821 17.8358C16.6294 17.7241 16.7354 17.5664 16.7834 17.3875L17.9787 13.0556C18.0117 12.9325 18.0161 12.8034 17.9916 12.6783C17.9671 12.5533 17.9144 12.4355 17.8374 12.3341C17.7604 12.2327 17.6613 12.1504 17.5476 12.0935C17.434 12.0366 17.3088 12.0066 17.1818 12.0059H11.6206V7.50739C11.6618 7.09499 11.8548 6.71284 12.1618 6.43556C12.4687 6.15829 12.8677 6.0058 13.2806 6.00788H17.4308C17.651 6.00788 17.8621 5.92011 18.0178 5.76388C18.1734 5.60765 18.2609 5.39576 18.2609 5.17482V0.842911Z" fill="#EF7C00" />
            </svg>
            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.76813 2.97092C5.76813 4.43309 4.79059 5.6915 3.01312 5.6915C1.34029 5.6915 0.260864 4.50469 0.260864 3.04251C0.260864 1.54178 1.30724 0.217285 3.0145 0.217285C4.72175 0.217285 5.73508 1.47019 5.76813 2.97092ZM0.260864 25V7.10136H5.76813V25H0.260864Z" fill="#EF7C00" />
              <path d="M8.52166 13.2191C8.52166 11.0919 8.45144 9.31448 8.38123 7.77933H13.3295L13.5746 10.1516H13.6792C14.3759 9.03498 16.0831 7.39795 18.9414 7.39795C22.4275 7.39795 25.0434 9.73165 25.0434 14.7529V24.9992H19.5362V15.5528C19.5362 13.3582 18.7005 11.684 16.7826 11.684C15.3204 11.684 14.5879 12.868 14.2038 13.8442C14.0633 14.1939 14.0289 14.6813 14.0289 15.1701V24.9992H8.52166V13.2191Z" fill="#EF7C00" />
            </svg>
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-between flex-wrap'>
          <ul className=''>
            <li className='mb-3'><strong className='footer__item-strong'>Продукция</strong></li>
            <li className='my-2'><p className='footer__item-text'>Ламинатные тубы</p></li>
            <li className='my-2'><p className='footer__item-text'>Экструзионные тубы</p></li>
            <li className='my-2'><p className='footer__item-text'>Другая упаковка</p></li>
          </ul>
          <ul className=''>
            <li className='mb-3'><strong className='footer__item-strong'>Компания</strong></li>
            <li className='my-2'><p className='footer__item-text'>О нас</p></li>
            <li className='my-2'><p className='footer__item-text'>Контакты</p></li>
            <li className='my-2'><p className='footer__item-text'>Наша команда</p></li>
          </ul>
          <ul className=''>
            <li className='mb-3'><strong className='footer__item-strong'>Разделы</strong></li>
            <li className='my-2'><p className='footer__item-text'>Новости</p></li>
            <li className='my-2'><p className='footer__item-text'>Сертификаты</p></li>
            <li className='my-2'><p className='footer__item-text'>Вакансии</p></li>
          </ul>
          <div className='d-flex flex-wrap gap-4'>
            <ul className='col-6'>
              <li><strong className='footer__item-name'>Беларусь</strong></li>
              <li><p className='footer__item-text'>+375 (17) 270 53 77</p></li>
              <li><p className='footer__item-text'>+375 (17) 270 53 78</p></li>
            </ul>
            <ul className='col-5'>
              <li><strong className='footer__item-name'>Европа</strong></li>
              <li><p className='footer__item-text'>+48 73 1111 044</p></li>
            </ul>
            <ul className='col-6'>
              <li><strong className='footer__item-name'>Москва</strong></li>
              <li><p className='footer__item-text'>+7 (495) 280 73 44</p></li>
              <li><p className='footer__item-text'>+7 (495) 280 73 44</p></li>
            </ul>
            <ul className='col-5'>
              <li><strong className='footer__item-name'>Екатеринбург</strong></li>
              <li><p className='footer__item-text'>+7 (343) 346 82 06</p></li>
            </ul>
          </div>
        </div>
        <div className="btn__top">
          <a className='fs-1' href="#"><svg xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 132 132" fill="none">
            <g filter="url(#filter0_d_7342_479)">
              <rect x="32" y="28" width="68" height="68" rx="34" fill="white" />
            </g>
            <path d="M50.3883 68.6216C50.6422 68.8642 50.983 69 51.3379 69C51.6928 69 52.0336 68.8642 52.2875 68.6216L66.5 55.0678L80.7097 68.6216C80.9635 68.8642 81.3043 69 81.6592 69C82.0141 69 82.3549 68.8642 82.6088 68.6216C82.7326 68.5037 82.831 68.3627 82.8982 68.2069C82.9654 68.0512 83 67.8839 83 67.7148C83 67.5458 82.9654 67.3785 82.8982 67.2227C82.831 67.067 82.7326 66.926 82.6088 66.8081L67.4922 52.3948C67.2268 52.1417 66.8707 52 66.5 52C66.1293 52 65.7732 52.1417 65.5078 52.3948L50.3912 66.8081C50.2674 66.926 50.169 67.067 50.1018 67.2227C50.0346 67.3785 50 67.5458 50 67.7148C50 67.8839 50.0346 68.0512 50.1018 68.2069C50.169 68.3627 50.2674 68.5037 50.3912 68.6216L50.3883 68.6216Z" fill="#EF7C00" />
            <defs>
              <filter id="filter0_d_7342_479" x="0" y="0" width="132" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="16" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0627451 0 0 0 0 0.239216 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7342_479" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7342_479" result="shape" />
              </filter>
            </defs>
          </svg></a>
        </div>
      </footer>
    )
  }
}
