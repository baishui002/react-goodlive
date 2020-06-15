import React from 'react'
import './style.less'

class LoadMore extends React.Component {
  constructor() {
    super()
    this.load = React.createRef()
    this.state = {
      winHeight: 0,
      timer: null
    }
  }
  componentDidMount() {
    // 获取页面高度
    const winHeight = document.documentElement.clientHeight
    this.setState({
      winHeight
    })
    // console.log('winHeight:', winHeight)
    window.addEventListener('scroll', this.throttleLoad)
    // window.onscroll = () => {
    //   // console.log('load', this.load.current.getBoundingClientRect().top)
    //   const top = this.load.current.getBoundingClientRect().top
    //   let timer = null
    //   if (top < winHeight) {

    //     clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       this.props.loadMore()
    //     }, 100)
    //   }
    // }
  }
  componentWillUnmount() {
    // 移除监听事件
    window.removeEventListener('scroll', this.throttleLoad)
  }

  throttleLoad = () => {
    const top = this.load.current.getBoundingClientRect().top
    if (top < this.state.winHeight) {

      clearTimeout(this.state.timer)
      let timer = setTimeout(() => {
        this.props.loadMore()
      }, 100)
      this.setState({ timer })
    }
  }

  render() {
    return (
      <div ref={this.load} className="more">加载更多...</div>
    )
  }
}

export default LoadMore