import React, { Component } from 'react'
import { Link } from 'react-router'

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
            <div className="header-right header-menu">
              <span className="header-item">
                <Link to="/" className="is-active">Home</Link>
              </span>
              <span className="header-item">
                <Link to="user" className="is-active">My account</Link>
              </span>
              <span className="header-item">
                <Link to="signin" className="button is-primary is-inverted">Sign In</Link>
              </span>
              <span className="header-item"><a href="" onClick={props.logoutUser}>Logout</a></span>
            </div>
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

      <div className="hero-footer">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active"><a href="#">All</a></li>
              <li><a href="#">Category one</a></li>
              <li><a href="#">Category two</a></li>
              <li><a href="#">Category three</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  )
}
