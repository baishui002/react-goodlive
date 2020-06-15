import React from 'react'
import SearchListView from './SearchListView'
import { reqSearch } from '../../../api'
import LoadMore from '../../../components/LoadMore'
import './style.less'

export default class SearchList extends React.Component {
  constructor() {
    super()
    this.state = {
      searchData: [],
      hasMore: null,
      page: 0
    }
  }

  componentDidMount() {
    // console.log(this.props)
    const { city, content } = this.props
    this.getSearchData(city, content, 0)
  }

  componentWillUpdate(prevProps, prevState) {
    // componentWillUpdate - 检查数据变化 -> 搜索框重新输入 
    const { city, content } = this.props
    if (content === prevProps.content) {
      return
    }
    this.setState({ searchData: [] })
    this.getSearchData(city, content, 0)
  }

  getSearchData(city, content, page) {
    reqSearch(city, content, page)
      .then(res => res.json())
      .then(res => {
        console.log(99, res)
        this.setState({
          searchData: this.state.searchData.concat(res.data),
          hasMore: res.hasMore,
          page: this.state.page + 1
        })
      })
  }

  onLoadMoreHandler = () => {
    console.log('loadMore....', this)
    const { city, content } = this.props
    this.getSearchData(city, content, this.state.page)
  }

  render() {
    return (
      <div>
        {
          this.state.searchData ?
            <SearchListView data={this.state.searchData} />
            : <div>数据正在加载...</div>
        }
        {
          this.state.hasMore ?
            <LoadMore loadMore={this.onLoadMoreHandler} /> :
            <div className="no-more">没有数据了！</div>
        }
      </div>
    )
  }
}
