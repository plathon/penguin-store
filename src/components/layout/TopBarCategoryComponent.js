import React from 'react'

export default function TopBarCategoryComponent (props) {
  return (
    <div className="hero-footer">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li className="is-active"><a onClick={props.searchProducts.bind(this, {})}>All</a></li>
            {props.categories.map((category, i) =>
              <li className="is-active" key={i}><a onClick={props.searchProducts.bind(this, { category: category.name })}>{category.name}</a></li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  )
}
