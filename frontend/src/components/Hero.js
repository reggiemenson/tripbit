import React, { useState } from 'react'

import Register from './RegistrationForm'
import Login from './LoginForm'

const Hero = () => {

  const [registrationModal, setRegistrationModal] = useState(false)
  const [loginModal, setLoginModal] = useState(false)

  function toggleRegistration() {
    setRegistrationModal(!registrationModal)
  }

  function toggleLogin() {
    setLoginModal(!loginModal)
  }

  // add Ken's escape function for desktop?

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

          <a href="#" onClick={toggleLogin}>Login</a>
          <a href="#" onClick={toggleRegistration}>Register</a>
        </div>
      </div>
      <div className={ registrationModal === true ? 'modal is-active' : 'modal' }>
        <div className="modal-background"></div>
        <div className="modal-content">
          <Register />
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleRegistration}></button>
      </div>
      <div className={ loginModal === true ? 'modal is-active' : 'modal' }>
        <div className="modal-background"></div>
        <div className="modal-content">
          <Login />
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleLogin}></button>
      </div>
    </section>
  )
}

export default Hero