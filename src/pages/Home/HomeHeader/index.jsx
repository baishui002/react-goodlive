import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../../../components/SearchInput'

import './style.less'

class HomeHeader extends React.Component {
  render() {
    const { city } = this.props
    return (
      <div id="header">
        <div className="city">
          <Link to="/city">{city}</Link>
          <i className="icon-angle-down"></i>
        </div>
        {/* <div className="search">
          <i className="icon-search"></i>
          <input type="text" />
        </div> */}
        <SearchInput history={this.props.history} />
        <div className="car">
          <i className="iconfont icon-car"></i>
        </div>
      </div>
    )
  }
}

export default HomeHeader
// const mapStateToProps = (state) => {
//   return {
//     city: state.city
//   }
// }

// export default connect(mapStateToProps)(HomeHeader)