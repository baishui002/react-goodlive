import React from 'react';
import "./style.less"

export default class HotCity extends React.Component {
  constructor() {
    super()
    this.state = {
      cityList: [
        '北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津', '重庆', '北京', '厦门', '武汉', '西安'
      ]
    }
  }
  clickHandler(cityName) {
    this.props.cityNameHandler(cityName)
  }

  render() {
    return (
      <div className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clear-fix">
          {
            this.state.cityList.map((item, index) => {
              return (
                <li key={index}>
                  {/* 事件两种传参方式  1）bind   2）箭头函数 */}
                  {/* <span onClick={this.clickHandler.bind(this, item)}>{item}</span> */}
                  <span onClick={() => { this.clickHandler(item) }}>{item}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}