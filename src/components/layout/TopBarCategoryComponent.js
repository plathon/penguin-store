import React from 'react'

export default function TopBarCategoryComponent (props) {
  return (
    <div className="hero-footer">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li className="is-active"><a>All</a></li>
            {props.categories.map((category, i) =>
              <li key={i}><a>{category.name}</a></li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  )
}
