import React, { useState } from 'react'

import Register from './RegistrationForm'
import Login from './LoginForm'
import WorldMap from './Worldmap'

const Hero = (props) => {

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
    <section id="homepage" className="hero is-fullheight">
      <div className="hero-body">

        <div className="columns is-desktop">
          <div className="column is-8-desktop">
            <div id="home-worldmap" className="has-text-centered is-centered">
              < WorldMap />
            </div>
          </div>

          <div className="column is-4-desktop" id="title-column">
            <div className="container has-text-centered">
              <h1 className="title">
                Scratch Map
              </h1>
              <h2 className="subtitle is-size-3">
                [insert brilliant tag line]
              </h2>

              <button className="is-size-3" onClick={toggleLogin}>Login</button>
              <button className="is-size-3" onClick={toggleRegistration}>Register</button>
            </div>
          </div>
        </div>

      </div>


      <div className={registrationModal === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-content">
          {/* need to pass state down to Register function? or will redirecting be enough? */}
          <Register
            toggleRegistration={toggleRegistration}
            toggleLogin={toggleLogin}
          />
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleRegistration}></button>
      </div>
      <div className={loginModal === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-content">
          {/* need to pass state down to Login function? or will redirecting be enough? */}
          <Login props={props}/>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleLogin}></button>
      </div>
    </section>
  )
}

export default Hero