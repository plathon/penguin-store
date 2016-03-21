import React, { Component } from 'react'
import TopBarMenu from './TopBarMenuComponent'
import TopBarCategory from './TopBarCategoryComponent'

export default function TopBarComponent (props) {
  return (
    <section className="hero is-primary is-medium">

      <div className="hero-header">
        <header className="header">
          <div className="container">
            <div className="header-left">
              <a className="header-item" href="#">
                <img src="http://bulma.io/images/bulma-white.png" alt="Logo"/>
              </a>
            </div>
            <span className="header-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <TopBarMenu user={props.user}
                        logoutUser={props.logoutUser}/>

          </div>
        </header>
      </div>

      <div className="hero-content">
        <div className="container">
          <h1 className="title">
            My Store
          </h1>
          <h2 className="subtitle">
            50% Off all night long
          </h2>
        </div>
      </div>

      <TopBarCategory categories={props.categories}/>

    </section>
  )
}
