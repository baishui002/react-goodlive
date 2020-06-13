import React from 'react'
import './style.less'

class SearchInput extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  onchange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  onKeyUp = (e) => {

    // 路由传参
    if (e.keyCode === 13) {
      console.log(999, this.props.history)
      this.props.history.push('/search/' + this.state.value)
    }
  }
  render() {
    return (
      <div className="search">
        <i className="icon-search"></i>
        <input type="text" value={this.state.value} onChange={this.onchange} onKeyUp={this.onKeyUp} />
      </div>
    )
  }
}

export default SearchInput