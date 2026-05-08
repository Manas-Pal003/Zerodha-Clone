import React from 'react'
import HeroSection from './HeroSection'
import Kite from './Kite'
import Console from './Console'
import Coin from './Coin'
import ConnectApi from './ConnectApi'
import VarsityMobile from './VarsityMobile'
import EndPage from './EndPage'

const ProductsPage = () => {
  return (
    <div>
      <HeroSection />
      <Kite />
      <Console />
      <Coin />
      <ConnectApi />
      <VarsityMobile />
      <EndPage />
    </div>
  )
}

export default ProductsPage
