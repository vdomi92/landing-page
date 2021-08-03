import React from 'react'
import Background1 from './Images/slideshowbg1.jpg'
import Background2 from './Images/slideshowbg2.jpg'
import Background3 from './Images/slideshowbg3.jpg'
import KitchenProductsImg from './Images/KitchenProducts.jpg'
import ShowerProductsImg from './Images/ShowerProducts.jpg'
import { Link } from 'react-router-dom'

export default function SectionOne() {
  return (
    <>
      <div className='slideShowDiv'>
        <div
          className='slideShowFirst slideElement'
          style={{
            backgroundImage: `url(${Background1})`,
          }}
        ></div>
        <div
          className='slideShowSecond slideElement'
          style={{
            backgroundImage: `url(${Background2})`,
          }}
        ></div>
        <div
          className='slideShowThird slideElement'
          style={{
            backgroundImage: `url(${Background3})`,
          }}
        ></div>
      </div>
      <div className='mt-5 productLinkDiv productContainer'>
        <h1 className='text-center headingOne'>DiLo. A víz a mindenünk.</h1>
        <div className='row prodLinkContainer'>
          <Link to='/' className='col-xl-6 link-light productLink mt-5 '>
            <div
              className='text-center showerProductDiv'
              style={{
                backgroundImage: `url(${ShowerProductsImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <span className='imgSpan'>Fürdőszoba</span>
            </div>
          </Link>

          <Link to='/' className='col-xl-6 link-light productLink mt-5'>
            <div
              className='text-center kitchenProductDiv '
              style={{
                backgroundImage: `url(${KitchenProductsImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <span className='imgSpan'>Konyha</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
