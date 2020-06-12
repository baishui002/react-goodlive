import React from 'react'
import './style.less'
import SwipeableViews from 'react-swipeable-views';
import Pagination from './Pagination'
import { autoPlay, virtualize, bindKeyboard } from 'react-swipeable-views-utils'

const EnhancedSwipeableViews = bindKeyboard(autoPlay(virtualize(SwipeableViews)))

class Swiper extends React.Component {
  constructor() {
    super()
    this.state = {
      cIndex: 0
    }
  }
  onChangeIndex = (index) => {
    this.setState({
      cIndex: index
    })
  }
  slideRenderer = () => {
    return this.props.banners.map((item, index) => {
      return (
        <div key={index} >
          <img className="img" src={item} alt='/' />
        </div>
      )
    })
  }
  render() {
    const { banners } = this.props
    return (
      <div className="banner-box">
        <SwipeableViews onChangeIndex={this.onChangeIndex}>
          {banners.map((item, index) => {
            return (
              <div key={index} >
                <img className="img" src={item} alt='/' />
              </div>
            )
          })}
        </SwipeableViews>
        {/* <EnhancedSwipeableViews onChangeIndex={this.onChangeIndex} slideCount={6} slideRenderer={this.slideRenderer} /> */}
        <Pagination allImg={banners.length} cIndex={this.state.cIndex} />
      </div>
    )
  }
}

export default Swiper