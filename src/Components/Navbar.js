import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
  <>
  
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/TextForm"><strong>{props.title}</strong></Link>
    {/* <a className="navbar-brand" href="/TextForm"><strong>{props.title}</strong></a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/TextForm"><b>Home</b></Link>
          {/* <a className="nav-link active" aria-current="page" href="/TextForm"><b>Home</b></a> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About"><b>{props.about}</b></Link>
          {/* <a className="nav-link" href="/About"><b>{props.about}</b></a> */}
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.Mode==='dark'?'light':'dark'} mx-3`}>
           <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggelMode} id="flexSwitchCheckDefault"/> 
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"   >Dark Mode</label> 
          {/* <button className="btn btn-primary mx-2" style={MyStyle} onClick={handleToggle} >{btnText}</button> */}
        </div>
    </div>
  </div>
</nav></>
  )
}
Navbar.prototype={
  title:PropTypes.string.isRequired,
  about:PropTypes.string.isRequired
}
// Navbar.defaultprops={
//   title:"Set some value",
//   about:"Tell something"
// }