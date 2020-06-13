import React from 'react'
import { connect } from 'react-redux'
import SearchHeader from './SearchHeader'

import SearchList from './SeachList'

class Search extends React.Component {

  render() {
    const { cityName } = this.props.city
    const { content } = this.props.match.params
    // console.log(this.props.match.params) // 接收路由传参
    return (
      <div>
        <SearchHeader history={this.props.history} />
        <SearchList city={cityName} content={content} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.city
  }
}
export default connect(mapStateToProps)(Search)