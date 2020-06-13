import React from 'react'
import SearchInput from "../../../components/SearchInput"
import "./style.less"

export default class SearchHeader extends React.Component {

  clickBackHandler() {
    window.history.back();
  }

  render() {
    return (
      <div id="search-header" >
        <span className="back-icon " onClick={this.clickBackHandler}>
          <i className="icon-chevron-left"></i>
        </span>
        <SearchInput history={this.props.history} />
      </div>


    )
  }
}