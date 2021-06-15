import React from 'react';
import './Footer.css';
import { Button } from '../../utils/button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join us using EMAIL
        </p>
        <p className='footer-subscription-text'>
          You can start at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline' style={{ color: "#fff" }}>SIGN UP</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>名前</h2>
            <Link to='/'>Cong<b> (TL)</b></Link>
            <Link to='/'>Chi<b> (SL)</b></Link>
            <Link to='/'>Minh</Link>
            <Link to='/'>Vinh</Link>
            <Link to='/'>Phong</Link>
          </div>
          <div className='footer-link-items'>
            <h2>学籍番号</h2>
            <Link to='/'>20176707</Link>
            <Link to='/'>20176700</Link>
            <Link to='/'>20176821</Link>
            <Link to='/'>20176912</Link>
            <Link to='/'>20176843</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TheReviewer
              <i className='fab fa-typo3' />
            </Link>
          </div>
          {/* <small className='website-rights'>Middle of footer</small> */}
          <div className='social-icons'>
            <a
              className='social-icon-link github'
              href='http://github.com/phongdk29101999/Review-Movie-API'
              target='_blank'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </a>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link google'
              to='/'
              target='_blank'
              aria-label='Google'
            >
              <i className='fab fa-google' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;