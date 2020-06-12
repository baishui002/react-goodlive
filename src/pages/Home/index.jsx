import React from 'react'
import FootNav from '../../components/FootNav'
import HomeHeader from './HomeHeader'
import Swiper from '../../components/Swiper'
import HomeHot from './HomeHot'

import bimg1 from '../../static/images/banner1.png'
import bimg2 from '../../static/images/banner2.png'
import bimg3 from '../../static/images/banner3.png'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Swiper banners={[bimg1, bimg2, bimg3]} />
        <HomeHot />
        <FootNav />
      </div>
    )
  }
}