import React, { useState } from 'react'

import Register from './RegistrationForm'
import Login from './LoginForm'

const Hero = () => {

  const [registrationModal, setRegistrationModal] = useState(false)
  const [loginModal, setLoginModal] = useState(false)

  function showRegistration() {
    setRegistrationModal(true)
  }
  
  function hideRegistration() {
    setRegistrationModal(false)
  }
  
  function showLogin() {
    setLoginModal(true)
  }
  
  function hideLogin() {
    setLoginModal(false)
  }

  return (
    <section className="hero is-dark is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            Scratch Map
          </h1>
          <h2 className="subtitle">
            [insert brilliant tag line]
          </h2>

          <a href="#" onClick={showLogin}>Login</a>
          <a href="#" onClick={showRegistration}>Register</a>
        </div>
      </div>
      <div className={ registrationModal === true ? 'modal is-active' : 'modal' }>
        <div className="modal-background"></div>
        <div className="modal-content">
          <Register />
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={hideRegistration}></button>
      </div>
      <div className={ loginModal === true ? 'modal is-active' : 'modal' }>
        <div className="modal-background"></div>
        <div className="modal-content">
          <Login />
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={hideLogin}></button>
      </div>
    </section>
  )
}

export default Hero