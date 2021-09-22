import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.png'
import './logo.css'
import {
  Link
} from "react-router-dom";


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt='logo' id='logokicss'/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={props.unitlink} aria-current="page" to="/unitconversion">Unit Conversion</Link>
              </li>
              <li className="nav-item">
                <Link className={props.currlink} aria-current="page" to="/currency">Currency Conversion</Link>
              </li>


            </ul>
            
            { props.search?<form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button classNameName="btn btn-outline-success" type="submit">Search</button>
            </form> : "No search bar"}
          </div>
        </div>
      </nav>
    )
}

Header.defaultProps={
  title: "Your title here",
  search : true,
  homelink:'nav-link',
  unitlink:'nav-link',
  currlink:'nav-link'
}

Header.propTypes={
  title: PropTypes.string,
  search: PropTypes.bool.isRequired

}