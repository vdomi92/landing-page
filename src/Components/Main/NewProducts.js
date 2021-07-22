import React from 'react'
import NewShower from './Images/NewShower.jpg'
import NewTap from './Images/NewTap.jpg'
import NewKitchenTap from './Images/NewKitchenTap.jpg'
import { Link } from 'react-router-dom'

export default function NewProducts() {
  return (
    <div className='newProductsContainer'>
      <div className='divNewProductsResp ' id='a'>
        <Link to='/' className='newProductsLink'>
          <div className='newProductsDivOne' id='a1'>
            <img
              src={NewShower}
              alt='new shower products'
              className='newProductsDivOneImage'
            />
          </div>
          <div className='newProductsDivTwo' id='a2'>
            <h3>Egyedülálló zuhanyélmény</h3>
            <span>
              Leheletfinoman ápolja a testet, az elmét és a lelket: burkolózzon
              be a mikrofinomságú vízcseppjeibe.
            </span>
          </div>
        </Link>
      </div>
      <div className='divNewProductsRespB ' id='b'>
        <Link to='/' className='newProductsLink'>
          <div className='newProductsDivOne' id='b1'>
            <img
              src={NewTap}
              alt='new shower products'
              className='newProductsDivOneImage'
            />
          </div>
          <div className='newProductsDivTwo ' id='b2'>
            <h3>Modern. Preciz. Lenyűgöző.</h3>
            <span>
              Minimalizmus és letisztult vonalvezetés: a csaptelepek letisztult
              geometriája a dizájn kifejeződése.
            </span>
          </div>
        </Link>
      </div>
      <div className='divNewProductsResp ' id='c'>
        <Link to='/' className='newProductsLink'>
          <div className='newProductsDivOne' id='c1'>
            <img
              src={NewKitchenTap}
              alt='new shower products'
              className='newProductsDivOneImage'
              id='c1Img'
            />
          </div>
          <div className='newProductsDivTwo' id='c2'>
            <h3>Új konyhai csaptelep minden környezetbe</h3>
            <span>
              Új csaptelep család: leljen rá kedvenc mosogatócsaptelepére széles
              választékunkban.
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
