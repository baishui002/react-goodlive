import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cityAction from '../actions/city'

class App extends React.Component {
  componentWillMount() {
    /**
 * 初始化需求
 *    1.城市初始化 --> 模拟调用定位接口 
 * 
 */
    const city = localStorage.getItem('city') || '深圳'
    this.props.cityAction.initCity({
      cityName: city
    })
  }
  render() {
    return (
      <div>
        {this.props.children}
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

export default connect(null, mapDispatchToProps)(App)