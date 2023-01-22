import React from 'react'
import BannerCarousel from '../BannerCarousel';
import BannerFooter from '../BannerFooter';
import Categories from '../Categories';
import ItemsCarouselHome from '../ItemsCarouselHome';
import SubscribeBanner from '../SubscribeBanner';

const Home = () => {
  return (
    <>
      <BannerCarousel />
      <BannerFooter />
      <h2>Nuestros Productos</h2>
      <div className='titleUnderline'></div>
      <Categories />
      <h2>Los mas vendidos</h2>
      <div className='titleUnderline'></div>
      <ItemsCarouselHome />
      <h2>Ofertas de la semana</h2>
      <div className='titleUnderline'></div>
      <ItemsCarouselHome />
      <SubscribeBanner />
    </>
  )
}

export default Home