import React from 'react'
import './style.less'



class Pagination extends React.Component {
  render() {
    const { allImg, cIndex } = this.props
    const count = new Array(allImg).fill(1)
    return (
      <div className="point-box ">
        <ul>
          {count.map((item, index) => {
            return (
              <li className={cIndex === index ? 'selected' : ''} key={index}></li>
            )
          })}
        </ul>
      </div>

    )
  }
}

export default Pagination