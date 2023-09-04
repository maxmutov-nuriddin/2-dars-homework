import { Component } from 'react';

export default class Information extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="info__box">
            <div className="info__box-inner col-md-6 col-12">
              <h2 className='info__inner-title'>
                Получить подробную <span className='info__inner__title-span'>информацию</span>
              </h2>
              <p className='info__inner-text my-3'>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
              <div className='d-flex flex-wrap gap-3'>
                <div className="form-floating col-6 mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating col-5">
                  <input type="password" className="form-control " id="floatingPassword" placeholder="Password" />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating col-12">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>
              </div>
            </div>
            <div className='col-6 d-md-block d-none'>
            </div>
          </div>
        </div>
      </section>
    );
  }
}