import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MapGL, { Marker } from 'react-map-gl'
import ReactFilestack from 'filestack-react'
import { fileloaderKey } from '../config/environment'
import axios from 'axios'
import Auth from '../lib/Auth'

import Mask from '../images/mask-dark-gradient.png'
// import Register from './RegistrationForm'

// this is a public key but maybe change to different key and put in .env?
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2VvcmdwIiwiYSI6ImNrMzM1bnN0azBuY2IzZnBiZ3d2eDA5dGQifQ.Ym1lHqYUfUUu2m897J4hcg' // Set your mapbox token here

// options for ReactFilestack
const options = {
  accept: 'image/*',
  transformations: {
    crop: true,
    circle: true,
    rotate: true
  }
}

const Profile = (props) => {

  // info from api get request will be stored here
  const [profile, setProfile] = useState({
    id: null,
    username: '',
    first_name: '',
    last_name: '',
    score: null,
    image: '',
    towns: [],
    trips: [],
    badges: [],
    groups_owned: [],
    groups_requested: [],
    groups_joined: [],
    groups_podium1: [],
    groups_podium2: [],
    groups_podium3: []
  })
  const [errors, setErrors] = useState({})

  // TO DO write code to zoom to bounding box containing all places user has been to
  const [viewport, setViewport] = useState({
    latitude: 51.5,
    longitude: 0.13,
    zoom: 4,
    bearing: 0,
    pitch: 0
  })

  // store profile image here
  const [data, setData] = useState({})

  const handleImageUpload = (res) => {
    // console.log(res.filesUploaded[0].url)
    // console.log(res.filesUploaded[1].url)
    setData({ ...data, image: res.filesUploaded[0].url })
    // handleSubmit()
  }

  // Django creates a user input window when an authorised path does is incorrectly authorised.

  const handleSubmit = () => {
    // e.preventDefault()

    // console.log(token)
    axios.put('api/profile', data, {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    })
      .then(resp => console.log(resp, 'success'))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (data.image) {
      handleSubmit()
    }
  }, [data])


  // toggle between profile info, true for left and false for right (links next to profile image)
  const [panel, setPanel] = useState(true)
  // states for stats modals
  const [continentModal, setContinentModal] = useState(false)
  const [countryModal, setCountryModal] = useState(false)
  const [cityModal, setCityModal] = useState(false)

  // show 'right' stats
  const showRight = () => {
    setPanel(false)
  }

  // show 'left' stats
  const showLeft = () => {
    setPanel(true)
  }

  const toggleContinent = () => {
    setContinentModal(!continentModal)
  }

  const toggleCountry = () => {
    setCountryModal(!countryModal)
  }

  const toggleCity = () => {
    setCityModal(!cityModal)
  }

  // work out which continents, countries or cities visited to show on modal
  const listContinentsCountries = (profile, size) => {
    const all = profile.towns.map((elem) => {
      return elem[size]
    })
    console.log(Array.from(new Set(all)))
    return Array.from(new Set(all))
  }

  // work out how many continents, countries, or cities visited to show on modal
  const countContinentsCountries = (profile, size) => {
    console.log(listContinentsCountries(profile, size).length)
    return listContinentsCountries(profile, size).length
  }

  useEffect(() => {
    // use Auth to get your profile!
    // axios.get(`api/profile/${Auth.getUserId()}`)
    axios.get(`api/profile/${props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => {
        console.log(resp.data)
        setProfile(resp.data)
        setData({
          username: resp.data.username,
          first_name: resp.data.first_name,
          last_name: resp.data.last_name
        })
      })
      .catch(err => setErrors(err))
  }, [])

  return (
    <div>

      <MapGL
        {...viewport}
        position="absolute"
        width="100vw"
        height="66vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {profile.towns.map((country, i) => {
          return <Marker
            key={i}
            latitude={parseFloat(country.lat.replace(',', '.'))}
            longitude={parseFloat(country.lng.replace(',', '.'))}
            offsetTop={-30}
            offsetLeft={-20}
          >
            <div className="marker"></div>
            {/* {console.log(country.name_ascii, ' coordinates: lat ', parseFloat(country.lat.replace(',', '.')), 'lng ', parseFloat(country.lng.replace(',', '.')))} */}
          </Marker>
        })}
      </MapGL>

      <section className="hero" id="user-profile-header">
        {/* {console.log(profile)} */}
        <div className="hero-body level is-mobile">
          <i className={!panel ? 'level-item fas fa-chevron-left' : 'level-item fas fa-chevron-left click-me'} onClick={showLeft}></i>
          <ReactFilestack
            preload={true}
            apikey={fileloaderKey}
            options={options}
            customRender={({ onPick }) => (
              <div onClick={onPick}>
                <figure className="level-item image is-128x128">
                  {/* Class creates an oval. Look to change this so all propics are circles. */}
                  <img className="is-rounded" src={!data.image ? 'https://bulma.io/images/placeholders/128x128.png' && profile.image : data.image} />
                </figure>
              </div>
            )}
            onSuccess={handleImageUpload}
          />
          <i className={panel ? 'level-item fas fa-chevron-right' : 'level-item fas fa-chevron-right click-me'} onClick={showRight}></i>
          {/* <button onClick={handleSubmit} className="button is-link">
            Save Image
          </button> */}
        </div>

        <div className="level is-mobile">
          <div className="level-item has-text-centered" onClick={toggleContinent}>
            <div>
              <p className="heading">Continents</p>
              <p className="title">{countContinentsCountries(profile, 'continent')}</p>
            </div>
          </div>
          <div className="level-item has-text-centered" onClick={toggleCountry}>
            <div>
              <p className="heading">Countries</p>
              <p className="title">{countContinentsCountries(profile, 'country')}</p>
            </div>
          </div>
          <div className="level-item has-text-centered" onClick={toggleCity}>
            <div>
              <p className="heading">Cities</p>
              <p className="title">{profile.towns.length}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Travel XP</p>
              <p className="title">780</p>
            </div>
          </div>
        </div>

      </section>

      <section className={panel ? 'section' : 'section hide'} id="user-profile">
        <div className="container">
          <h2 className="title">
            Badges
          </h2>
          <div className="badge-display">
            {/* replace test data with actual api data when ready */}
            {profile.badges.sort().map((badge, i) => {
              return <div className="badge" key={i}>
                <div className="image is-150x150">
                  <div className="badge" >
                    <img className="image is-150x150" style={{ backgroundImage: `url(${badge.image})` }} src={Mask} alt="" />
                    <div className="overlay">
                      <div className="is-size-6">{badge.name}</div>
                      <div className="is-size-7">{badge.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>

      <section className={panel ? 'section hide' : 'section'} id="user-profile">
        <div className="container">
          <h2 className="title">
            Groups
          </h2>
          {/* replace test data with profile.groups_joined when api call working */}
          {profile.groups_joined.map((group, i) => {
            return <Link to={`/groups/${group.id}`} key={i}>
              <p>{group.name}</p>
              <img src={group.image} alt="group photo" />
            </Link>
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="subtitle">
            Need some space down here - agreed!
          </div>
        </div>
      </section>

      {/* stats modals below */}

      <div className={continentModal === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={toggleContinent}></div>
        <div className="modal-content modal-stats">
          <h2 className="title">Continents visited</h2>
          {listContinentsCountries(profile, 'continent').sort().map((continent, i) => {
            return <div key={i}>
              <p>{continent}</p>
            </div>
          })}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleContinent}></button>
      </div>

      <div className={countryModal === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={toggleCountry}></div>
        <div className="modal-content modal-stats">
          <h2 className="title">Countries visited</h2>
          {listContinentsCountries(profile, 'country').sort().map((country, i) => {
            return <div key={i}>
              <p>{country}</p>
            </div>
          })}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleCountry}></button>
      </div>

      <div className={cityModal === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={toggleCity}></div>
        <div className="modal-content modal-stats">
          <h2 className="title">Cities visited</h2>
          {/* if you want to sort anything numerically */}
          {/* {profile.towns.sort((a, b) => a.id - b.id).map((town, i) => { */}
          {profile.towns.sort((a, b) => a.name_ascii.localeCompare(b.name_ascii)).map((town, i) => {
            return <div key={i}>
              <p>{town.name_ascii}</p>
            </div>
          })}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleCity}></button>
      </div>

    </div>
  )
}

export default Profile