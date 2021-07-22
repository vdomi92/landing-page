import React from 'react'
import Header from './Header.js'

import SectionOne from './SectionOne.js'
import SectionTwo from './SectionTwo.js'
import NewProducts from './NewProducts.js'

export default function Home() {
  return (
    <>
      <Header></Header>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <NewProducts></NewProducts>
    </>
  )
}
