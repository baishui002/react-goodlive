import React from 'react'
import { reqHomeHot1, reqHomeHot2 } from '../../../api'
import HomeHotView from './HomeHotView'

class HomeHot extends React.Component {
  constructor() {
    super()
    this.state = {
      homehotdata1: [],
      homehotdata2: []
    }
  }
  componentDidMount() {
    reqHomeHot1()
      .then(res => res.json())
      .then(res => {
        // console.log(1, res)
        this.setState({
          homehotdata1: res
        })
      })
    reqHomeHot2()
      .then(res => res.json())
      .then(res => {
        // console.log(2, res)
        this.setState({
          homehotdata2: res
        })
      })
  }
  render() {
    const { homehotdata1, homehotdata2 } = this.state
    return (
      <div>
        {
          homehotdata1.length > 0 ?
            <HomeHotView title={'热门推荐'} data={homehotdata1} /> :
            <div>数据正在加载...</div>
        }
        {
          homehotdata1.length > 0 ?
            <HomeHotView title={'家庭常用'} data={homehotdata2} /> :
            <div>数据正在加载...</div>
        }
      </div>
    )
  }
}

export default HomeHot