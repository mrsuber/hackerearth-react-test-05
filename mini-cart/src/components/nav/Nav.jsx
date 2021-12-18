import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
const Nav = ({number}) => {


  return (
    <nav>
      <div className="nav__wrapper">
      <span>
          <Link to="/"><button>home</button></Link>
          <Link to="/checkout"><button>check out</button></Link>
      </span><Link to="/" className="link_parrent">
      <span className="number">{number}</span>
      <img className="logo" src={logo} alt="logo" /></Link>
      </div>
    </nav>
  )
}

export default Nav
