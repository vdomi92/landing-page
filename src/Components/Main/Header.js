import React from 'react'
import { Link } from 'react-router-dom'
import brandLogo from './Images/brand.png'
import faceIcon from './Images/facebookIcon.jpg'
import instaIcon from './Images/instagramIcon.png'
import { useState } from 'react'

export default function Header() {
  const [expandMenuVisible, setExpandMenuVisible] = useState(false)

  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand ms-4' to='/'>
          <img
            src={brandLogo}
            alt='Dilo Szaniter logo'
            style={{ width: '50px', height: '50px' }}
          />
        </Link>
        <button
          type='button'
          className='navbar-toggler'
          onClick={() => setExpandMenuVisible(!expandMenuVisible)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={
            expandMenuVisible
              ? 'collapse navbar-collapse show'
              : 'collapse navbar-collapse'
          }
        >
          <ul className='navbar-nav text-center ms-auto pe-4 '>
            <li className='nav-item'>
              <Link className='nav-link link-light' to='/'>
                Rólunk
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link link-light' to='/'>
                Termékek
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link link-light' to='/'>
                Szolgáltatások
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link link-light' to='/'>
                Regisztráció
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link link-light'
                to='https://www.facebook.com'
              >
                <img
                  src={faceIcon}
                  alt='Dilo Szaniter a Facebookon'
                  style={{ width: '30px', height: '30px' }}
                />
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link link-light'
                to='https://www.instagram.com'
              >
                <img
                  src={instaIcon}
                  alt='Dilo Szaniter az Instagramon'
                  style={{ width: '22px', height: '22px' }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
