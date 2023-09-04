import { Component } from 'react';

import HeaderLogo from '../../assets/logo.svg';

import burger from '../../assets/burger-bar.png'


const style = {
  background: 'transparent'
};

export default class Header extends Component {
  state = {
    dropdowns: {
      products: false,
      certificates: false,
      ourTeam: false,
      aboutUs: false,
      news: false,
      careers: false,
      contacts: false
    }
  };

  handleClick = (dropdownName) => {
    this.setState((prevState) => ({
      dropdowns: {
        ...prevState.dropdowns,
        [dropdownName]: !prevState.dropdowns[dropdownName]
      }
    }));
  };

  render() {
    const { dropdowns } = this.state;

    return (
      <div className="">
        <div className='header__nav-box'>
          <a className='' href="#">
            <img src={HeaderLogo} alt="header logo" />
          </a>
          <button className='btn'><img className='btn__img' src={burger} alt="" /></button>
        </div>
        <nav className="header__nav d-flex justify-content-between align-items-center ">
          <a className='' href="#">
            <img src={HeaderLogo} alt="header logo" />
          </a>
          <ul className="d-flex gap-5">
            <li>
              <a className="item__list-link" href="#" onClick={() => this.handleClick('products')}>
                Продукция
              </a>
              <div className={`dropdown ${dropdowns.products ? 'open' : 'close'}`}>
                <ul>
                  <li><a className='item__list-link' href="#">Ламинатные тубы</a></li>
                  <li><a className='item__list-link' href="#">Экструзионные тубы</a></li>
                  <li><a className='item__list-link' href="#">Другая упаковка</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a className="item__list-link" href="#" onClick={() => this.handleClick('certificates')}>
                Сертификаты
              </a>
              <div className={`dropdown ${dropdowns.certificates ? 'open' : 'close'}`}>
                <ul>
                  <li><a className='item__list-link' href="#">Ламинатные тубы</a></li>
                  <li><a className='item__list-link' href="#">Экструзионные тубы</a></li>
                  <li><a className='item__list-link' href="#">Другая упаковка</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a className="item__list-link" href="#" onClick={() => this.handleClick('ourTeam')}>
                Наша команда
              </a>
              <div className={`dropdown ${dropdowns.ourTeam ? 'open' : 'close'}`}>
                <ul>
                  <li><a className='item__list-link' href="#">Ламинатные тубы</a></li>
                  <li><a className='item__list-link' href="#">Экструзионные тубы</a></li>
                  <li><a className='item__list-link' href="#">Другая упаковка</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a className="item__list-link" href="#" onClick={() => this.handleClick('aboutUs')}>
                О нас
              </a>
              <div className={`dropdown ${dropdowns.aboutUs ? 'open' : 'close'}`}>
                <ul>
                  <li><a className='item__list-link' href="#">Ламинатные тубы</a></li>
                  <li><a className='item__list-link' href="#">Экструзионные тубы</a></li>
                  <li><a className='item__list-link' href="#">Другая упаковка</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a className="item__list-link" href="#" onClick={() => this.handleClick('news')}>
                Новости
              </a>
              <div className={`dropdown ${dropdowns.news ? 'open' : 'close'}`}>
                <ul>
                  <li><a className='item__list-link' href="#">Ламинатные тубы</a></li>
                  <li><a className='item__list-link' href="#">Экструзионные тубы</a></li>
                  <li><a className='item__list-link' href="#">Другая упаковка</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a className="item__list-link" href="#" onClick={() => this.handleClick('careers')}>
                Вакансии
              </a>
              <div className={`dropdown ${dropdowns.careers ? 'open' : 'close'}`}>
                <ul>
                  <li><a className='item__list-link' href="#">Ламинатные тубы</a></li>
                  <li><a className='item__list-link' href="#">Экструзионные тубы</a></li>
                  <li><a className='item__list-link' href="#">Другая упаковка</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a className="item__list-link" href="#" onClick={() => this.handleClick('contacts')}>
                Контакты
              </a>
              <div className={`dropdown ${dropdowns.contacts ? 'open' : 'close'}`}>
                <ul>
                  <li><a className='item__list-link' href="#">Ламинатные тубы</a></li>
                  <li><a className='item__list-link' href="#">Экструзионные тубы</a></li>
                  <li><a className='item__list-link' href="#">Другая упаковка</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="d-flex gap-1">
            <li>
              <button
                className="border border-0 item__list-link"
                style={style}
                onClick={() => this.handleClick('languageRU')}
              >
                RU
              </button>
            </li>
            <li>|</li>
            <li>
              <button
                className="border border-0 item__list-link"
                style={style}
                onClick={() => this.handleClick('languageEN')}
              >
                EN
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}