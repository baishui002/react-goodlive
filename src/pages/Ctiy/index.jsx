import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityAction from '../../actions/city'
import Header from '../../components/Header'
import CurrentCity from './CurrentCity'
import HotCity from './HotCity'

class City extends React.Component {
  constructor() {
    super()
    this.state = {
      // city: '北京'
    }
  }

  cityNameHandler = (cityName) => {
    this.props.cityAction.updataCity({
      cityName
    })
    localStorage.setItem('city', cityName)
    window.history.back(-1)
  }

  render() {
    const { cityName } = this.props.city
    return (
      <div>
        <Header title={'城市选择'} />
        <CurrentCity city={cityName} />
        <HotCity cityNameHandler={this.cityNameHandler} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.city
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    cityAction: bindActionCreators(cityAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)