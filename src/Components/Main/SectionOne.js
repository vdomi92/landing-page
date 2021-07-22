import React from 'react'
import Background from './Images/backgroundImgKitchen.jpg'
import KitchenProductsImg from './Images/KitchenProducts.jpg'
import ShowerProductsImg from './Images/ShowerProducts.jpg'
import { Link } from 'react-router-dom'

export default function SectionOne() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '90vh',
        }}
      ></div>
      <div className='mt-5 productLinkDiv productContainer'>
        <h1 className='text-center headingOne'>DiLo. A víz a mindenünk.</h1>
        <div className='row prodLinkContainer'>
          <Link to='/' className='col-xl-6 link-light productLink mt-5 '>
            <div
              className='text-center showerProductDiv'
              style={{
                backgroundImage: `url(${ShowerProductsImg})`,
                backgroundPosition: 'center',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              Fürdőszobai termékek
            </div>
          </Link>

          <Link to='/' className='col-xl-6 link-light productLink mt-5'>
            <div
              className='text-center kitchenProductDiv '
              style={{
                backgroundImage: `url(${KitchenProductsImg})`,
                backgroundPosition: 'center',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                minWidth: '450px',
                minHeight: '340px',
              }}
            >
              Konyhai termékek
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
