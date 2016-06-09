import React, { Component } from 'react'

class ProductSearchBarComponent extends Component {
  constructor () {
    super()
    this.search = this.search.bind(this)
  }

  search (e) {
    this.props.searchProducts({ searchTerm: e.target.value })
  }

  render () {
    return (
      <div className="control has-icon">
        <input type="text"
               name="search"
               className="input is-flat"
               placeholder="Search here..."
               onChange={this.search}/>

        <i className="fa fa-search"></i>
      </div>
    )
  }
}

export default ProductSearchBarComponent
