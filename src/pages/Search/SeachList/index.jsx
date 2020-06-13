import React from 'react'
import SearchListView from './SearchListView'
import { reqSearch } from '../../../api'


export default class SearchList extends React.Component {
  constructor() {
    super()
    this.state = {
      searchData: []
    }
  }

  componentDidMount() {
    // console.log(this.props)
    const { city, content } = this.props
    this.getSearchData(city, content)
  }
  componentWillUpdate(prevProps, prevState) {
    const { city, content } = this.props
    // console.log(11, prevProps)
    // console.log(22, city, content)
    if (content === prevProps.content) {
      return
    }
    this.getSearchData(city, content)
  }

  getSearchData(city, content) {
    reqSearch(city, content)
      .then(res => res.json())
      .then(res => {
        this.setState({
          searchData: res.data
        })
      })
  }

  render() {
    return (
      <div>
        {
          this.state.searchData ?
            <SearchListView data={this.state.searchData} />
            : <div>数据正在加载...</div>
        }

      </div>
    )
  }
}
