import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PGS from '../logo.svg';

const Navbar = () => {
  return (
    <nav className={'nav-wrapper'}>
      <div className={'container'}>
        <div className={'navbar'}>
          <div className={'logo-wrapper'}>
            <a className={'brand-logo'}>
              <img src={PGS} alt={'PGS software'} />
            </a>
          </div>
          <div>
            <ul className={'nav-menu'}>
              <li className={'nav-link'}>
                <Link className='nav-link-a' to='/'>About</Link>
              </li>
              <li className={'nav-link'}>
                <Link className={'nav-link-a'} to='/skicams'>Skicams</Link>
              </li>
              <li className={'nav-link'}>
                <Link className={'nav-link-a'} to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)