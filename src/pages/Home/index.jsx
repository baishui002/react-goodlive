import React from 'react'
import FootNav from '../../components/FootNav'
import HomeHeader from './HomeHeader'
import Swiper from '../../components/Swiper'
import HomeHot from './HomeHot'

import bimg1 from '../../static/images/banner1.png'
import bimg2 from '../../static/images/banner2.png'
import bimg3 from '../../static/images/banner3.png'

import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    const { cityName } = this.props.city
    return (
      <div>
        <HomeHeader city={cityName} />
        <Swiper banners={[bimg1, bimg2, bimg3]} />
        <HomeHot city={cityName} />
        <FootNav city={cityName} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    city: state.city
  }
}

export default connect(mapStateToProps)(Home)
// export default Home
