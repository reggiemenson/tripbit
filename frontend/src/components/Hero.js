import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Register from './RegistrationForm'
import Login from './LoginForm'
import WorldMap from './Worldmap'

const infoType = 'user'

const Hero = (props) => {

  const [registrationModal, setRegistrationModal] = useState(false)
  const [loginModal, setLoginModal] = useState(false)
  const [countriesData, setCountriesData] = useState({})
  const [errors, setErrors] = useState('')

  function fetchTownData() {
    axios.get('/api/towns')
      .then(resp => {
        console.log('RESPONSE')
        const data = resp.data
          .reduce((countries, town) => {
            if (countries[town.iso2]) {
              countries[town.iso2] += town.visitors.length
            } else {
              countries[town.iso2] = town.visitors.length
            }
            return countries
          }, {})
        setCountriesData(data)
      })
      .catch(err => {
        console.log(err)
        setErrors({ ...errors, ...err })
      })
  }

  useEffect(() => {
    fetchTownData()
  }, [])
  

  function toggleRegistration() {
    setRegistrationModal(!registrationModal)
  }

  function toggleLogin() {
    setLoginModal(!loginModal)
  }

  return (
    <section id="homepage" className="hero is-fullheight">
      <div className="hero-body">

        <div className="columns is-desktop">
          <div className="column is-8-desktop">
            <div id="home-worldmap" className="has-text-centered is-centered">
              <WorldMap countriesData={countriesData} infoType={infoType} />
            </div>
          </div>

          <div className="column is-4-desktop" id="title-column">
            <div className="container has-text-centered">
              <h1 className="title is-size-1">
                inCONTINENTAL 💩
              </h1>
              <h2 className="subtitle is-size-4">
                Wherever you&apos;ve been. Leave a trail.
              </h2>

              <button className="is-size-4 homepage" onClick={toggleLogin}>Login</button>
              <button className="is-size-4 homepage" onClick={toggleRegistration}>Register</button>
            </div>
          </div>
        </div>

      </div>


      <div className={registrationModal === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={toggleRegistration}></div>
        <div className="modal-content">
          <Register
            toggleRegistration={toggleRegistration}
            toggleLogin={toggleLogin}
          />
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleRegistration}></button>
      </div>
      <div className={loginModal === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={toggleLogin}></div>
        <div className="modal-content">
          <Login props={props}/>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleLogin}></button>
      </div>
    </section>
  )
}

export default Hero