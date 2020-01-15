import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Auth from '../lib/auth'
import SearchBar from './SearchBar'

const Navbar = ({ toggleSearch }) => {
  const history = useHistory()


  const [state, setState] = useState({
    isOpen: false
  })

  const handleLogout = () => {
    Auth.logout()
    history.push('/')
    setState({ isOpen: false })
  }

  const [nav, setNav] = useState(false)

  const toggleNavbar = () => {
    setNav(!nav)
  }
  
  return (
    <>
      {Auth.isAuthorized() && <section className="menu menu--circle" id="navbar">
        <input type="checkbox" id="menu__active" checked={nav ? true : false} onChange={toggleNavbar}/>
        <label htmlFor="menu__active" className="menu__active">
          <div className="menu__toggle">
            <div className="icons">
              <div className="hamburger"></div>
            </div>
          </div>
          <input type="radio" name="arrow--up" id="degree--up-0" />
          <input type="radio" name="arrow--up" id="degree--up-1" />
          <input type="radio" name="arrow--up" id="degree--up-2" />
          <div className="menu__listings">
            <ul className="circle">
              <li>
                <div className="placeholder">
                  <div className="upside">

                    <Link to="/groups" className="navbutton" onClick={toggleNavbar}> <i className="fa fa-users"></i> </Link>
                    {'\n'}
                    <Link to="/groups"> <p className="navbar-links">GROUPS</p> </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to={`/profile/${Auth.getUserId()}`} className="navbutton" onClick={toggleNavbar}><i className="fa fa-user"></i></Link>
                    {'\n'}
                    <Link to={`/profile/${Auth.getUserId()}`}> <p className="navbar-links">USER</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/city_selection" className="navbutton"><i className="fa fa-building"></i></Link>
                    {'\n'}
                    <Link to="/city_selection"> <p className="navbar-links">ADD CITIES</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/city_selection" className="navbutton"><i className="fa fa-building"></i></Link>
                    {'\n'}
                    <Link><p className="navbar-links">TEST</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="navbutton"><i className="fa fa-trash"></i></a>
                    {'\n'}
                    <p className="navbar-links">TEST</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="navbutton"><i className="fa fa-battery-4"></i></a>
                    {'\n'}
                    <p className="navbar-links">TEST</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/" onClick={() => handleLogout()} className="navbutton"><i className="fa fa-sign-out"></i> </Link>
                    {'\n'}
                    <Link to="/" onClick={() => handleLogout()}> <p className="navbar-links"> {' '}LOG-OUT</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/play" className="navbutton" onClick={toggleNavbar}><i className="fa fa-gamepad"></i></Link>
                    {'\n'}
                    <Link to="/play"><p className="navbar-links">GAME</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a className="navbutton" ><i className="fa fa-search" onClick={toggleSearch}></i></a>
                    {'\n'}
                    <p className="navbar-links">SEARCH</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/city_selection" className="navbutton" onClick={toggleNavbar}><i className="fa fa-building"></i></Link>
                    {'\n'}
                    <Link to="/city_selection"><p className="navbar-links">ADD CITY</p></Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="menu__arrow menu__arrow--top">
            <ul>
              <li>
                <label htmlFor="degree--up-0"><div className="arrow"></div></label>
                <label htmlFor="degree--up-1"><div className="arrow"></div></label>
                {/* <label htmlFor="degree--up-2"><div className="arrow"></div></label> */}
              </li>
            </ul>
          </div>
        </label>
      </section>

      }
    </>
  )
}

export default Navbar












// {Auth.isAuthorized() && <div className="navbar is-fixed-bottom is-transparent">
// <div className="navbar-brand">
//   <Link className="navbar-item" to="/"
//     onClick={() => setState({ isOpen: false })}
//   >
//     <em className='logo-text'>Scratch Map</em>
//   </Link>
//   <a
//     role="button"
//     className={`navbar-burger burger ${state.isOpen ? 'is-active' : ''}`}
//     onClick={() => toggleNavbar()}
//     aria-label="menu"
//     aria-expanded="false"
//   >
//     <span aria-hidden="true"></span>
//     <span aria-hidden="true"></span>
//     <span aria-hidden="true"></span>
//   </a>
// </div>
// {/* ternary below no longer necessary */}
// <div className={`navbar-menu ${state.isOpen ? 'is-active' : ''} ${history.location.pathname === '/' ? 'navbar-is-transparent' : 'navbar-is-transparent'}`}>
//   <div className="navbar-end">
//     <div className="navbar-item">
//       <Link className="navbar-item" to="/profile"
//         onClick={() => toggleNavbar()}
//       >
//         Profile
//       </Link>
//     </div>
//     <div className="navbar-item">
//       <Link className="navbar-item" to="/add_group"
//         onClick={() => toggleNavbar()}
//       >
//         Add group
//       </Link>
//     </div>
//     <div className="navbar-item">
//       <Link className="navbar-item" to="/city_selection"
//         onClick={() => toggleNavbar()}
//       >
//         Select cities
//       </Link>
//     </div>
//     <div className="navbar-item">
//       <Link className="navbar-item" to="/add_trip"
//         onClick={() => toggleNavbar()}
//       >
//         Add trip
//       </Link>
//     </div>
//     <div className="navbar-item">
//       <Link className="navbar-item" to="/play"
//         onClick={() => toggleNavbar()}
//       >
//         Play game
//       </Link>
//     </div>
//     <div className="navbar-item">
//       {/* added to prop to deal with warning message */}
//       <Link className="navbar-item" to="/" onClick={() => handleLogout()}>
//         Logout
//       </Link>
//     </div>
//     <div className="navbar-item">
//       <div className="field has-addons">
//         <div className="control">
//           <input className="input has-text-info" type="text" placeholder="Find a friend" />
//         </div>
//         <div className="control">
//           <a className="button is-info">
//             Search
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>}
