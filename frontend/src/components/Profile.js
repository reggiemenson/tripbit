import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MapGL, { Marker, Popup } from 'react-map-gl'
import ReactFilestack from 'filestack-react'
import { fileloaderKey } from '../config/environment'
import axios from 'axios'
import Auth from '../lib/Auth'

import Mask from '../images/mask-dark-gradient.png'
import Settings from './SettingsForm'

import { toast } from 'react-toastify'

// this is a public key but maybe change to different key and put in .env?
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2VvcmdwIiwiYSI6ImNrMzM1bnN0azBuY2IzZnBiZ3d2eDA5dGQifQ.Ym1lHqYUfUUu2m897J4hcg' // Set your mapbox token here

// options for ReactFilestack
const options = {
  accept: 'image/*',
  options: {
    resize: {
      width: 50
    },
    transformations: {
      force: true,
      circle: true,
      crop: false
    }
  }
}


const Profile = (props) => {

  const notifyImage = () => toast('Image Changed!')
  const notifyProfile = () => toast('Details changed!')
  const notifyError = () => toast('Profile Not Found..')

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

  const [showPopup, setShowPopup] = useState(true)

  const [popupInfo, setPopupInfo] = useState({
    latitude: 0,
    longitude: 0,
    message: ''
  })

  // console.log(popupInfo)

  const fuckingClose = () => {
    setShowPopup(false)
  }

  // a lot of pain to get to work but probably not even worth it - would make more sense to center on last added city and 'home' if coming via profile
  const midCoordinate = (towns) => {
    const arrLats = towns.map((town) => {
      return parseFloat(town.lat.replace(',', '.'))
    })
    const maxLat = Math.max(...arrLats)
    const minLat = Math.min(...arrLats)
    const midLat = (maxLat + minLat) / 2
    const arrLngs = towns.map((town) => {
      return parseFloat(town.lng.replace(',', '.'))
    })
    const maxLng = Math.max(...arrLngs)
    const minLng = Math.min(...arrLngs)
    const midLng = (maxLng + minLng) / 2
    setViewport({ latitude: midLat, longitude: midLng, zoom: 1 })
  }

  // store profile image here
  const [data, setData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    dexterity: ''
  })

  const handleImageUpload = (res) => {
    setData({ ...data, image: res.filesUploaded[0].url })
  }

  // Django creates a user input window when an authorised path does is incorrectly authorised.

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({})
  }

  const modalSubmit = (e) => {
    e.preventDefault()

    // console.log(token)
    axios.put('api/profile', data, {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    })
      .then(resp => {
        notifyProfile()
        console.log(resp, 'success')
        toggleSettings()
      })
      .catch(err => {
        console.log(err.response.data, 'failed')
        // console.log(data, 'failed')
        setErrors(err.response.data)
      })
  }

  const handleSubmit = () => {

    // console.log(token)
    axios.put('api/profile', data, {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    })
      .then(resp => {
        notifyImage()
        console.log(resp, 'success')
      })
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
  const [settingModal, setSettingModal] = useState(false)

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

  function toggleSettings() {
    setSettingModal(!settingModal)
  }

  // work out which continents, countries or cities visited to show on modal
  const listContinentsCountries = (profile, size) => {
    const all = profile.towns.map((elem) => {
      return elem[size]
    })
    // console.log(Array.from(new Set(all)))
    return Array.from(new Set(all))
  }

  // work out how many continents, countries, or cities visited to show on modal
  const countContinentsCountries = (profile, size) => {
    // console.log(listContinentsCountries(profile, size).length)
    return listContinentsCountries(profile, size).length
  }

  const showMarkerInfo = (e) => {
    const cityId = parseInt(e.target.id)
    const citySelected = profile.towns.filter((elem) => {
      return elem.id === cityId
    })[0]
    setPopupInfo({
      latitude: parseFloat(citySelected.lat.replace(',', '.')),
      longitude: parseFloat(citySelected.lng.replace(',', '.')),
      message: citySelected.name
    })
    setShowPopup(true)
  }

  // const closePopup = () => {
  //   setMarkerInfo({ showPopup: null })
  // }
  useEffect(() => {
    // use Auth to get your profile!
    // axios.get(`api/profile/${Auth.getUserId()}`)
    axios.get(`api/profile/${props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => {
        // console.log('api resp ', resp.data)
        setProfile(resp.data)
        setData({
          username: resp.data.username,
          first_name: resp.data.first_name,
          last_name: resp.data.last_name
        })
        Object.keys(profile.towns).length > 0 && midCoordinate(resp.data.towns)
      })
      // Profile not found and redirect
      .catch(() => {
        notifyError()
        props.history.push(`/profile/${Auth.getUserId()}`) 
        // setErrors(err)
      })
  }, [])

  return (
    <div id="profile">
      {/* {console.log('profile.towns ', profile.towns)}
      {console.log('length of profile.towns ', Object.keys(profile.towns).length)}
      {console.log('boolean check ', Object.keys(profile.towns).length > 0)} */}
      <MapGL
        {...viewport}
        position="absolute"
        width="100vw"
        height="64vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      // onClick={fuckingClose}
      >
        {/* boolean check not necessary */}
        {Object.keys(profile.towns).length > 0 && profile.towns.map((city, i) => {
          return <Marker
            key={i}
            latitude={parseFloat(city.lat.replace(',', '.'))}
            longitude={parseFloat(city.lng.replace(',', '.'))}
            offsetTop={-30}
            offsetLeft={-20}
          >
            <div className="marker" id2='no' id={city.id} onClick={showMarkerInfo}></div>
            {/* {console.log(city.name_ascii, ' coordinates: lat ', parseFloat(city.lat.replace(',', '.')), 'lng ', parseFloat(city.lng.replace(',', '.')))} */}
          </Marker>
        })}
        {showPopup && <Popup
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeButton={true}
          // closeOnClick={true} // not needed?
          onClose={fuckingClose}>
          <div>{popupInfo.message}</div>
        </Popup>}
      </MapGL>

      <section className="hero" id="user-profile-header">
        {/* {console.log(data.email)} */}
        {/* <div className="is-link">
          Settings
        </div> */}
        <div className={settingModal === true ? 'modal is-active' : 'modal'}>
          <div className="modal-background" onClick={toggleSettings}></div>
          <div className="modal-content">
            <Settings
              toggleSettings={toggleSettings}
              handleChange={(e) => handleChange(e)}
              modalSubmit={(e) => modalSubmit(e)}
              data={data}
              errors={errors}
            />
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={toggleSettings}></button>
        </div>


        <div className="mobile-header">
          <div className="banner level is-mobile">
            <div className="level-left">
              <div className="name level-item">
                <div className="username title is-size-3 is-size-4-mobile">
                  {data.username}
                  <span className="fullname is-size-4 is-size-7-mobile"> ({data.first_name} {data.last_name})</span>
                </div>
              </div>
            </div>

            <div className="level-right">
              <div className="buttons level-item">
                <button className="button is-link" id='settings' onClick={toggleSettings}>
                  <span className="icon is-small">
                    <i className="fas fa-cog"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="hero-body level is-mobile">
            <i className={panel ? 'level-item fas fa-chevron-left is-size-1' : 'level-item fas fa-chevron-left is-size-1 click-me'} onClick={showLeft}></i>
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
            <i className={!panel ? 'level-item fas fa-chevron-right is-size-1' : 'level-item fas fa-chevron-right is-size-1 click-me'} onClick={showRight}></i>
          </div>
          {/* <i className="fas fa-chevron-down"></i> */}
        </div>

        <div className="level is-mobile stats">
          <div className="level-item has-text-centered" onClick={toggleContinent}>
            <div className="stat">
              <p className="heading">Continents</p>
              <p className="title">{countContinentsCountries(profile, 'continent')}</p>
            </div>
          </div>
          <div className="level-item has-text-centered" onClick={toggleCountry}>
            <div className="stat">
              <p className="heading">Countries</p>
              <p className="title">{countContinentsCountries(profile, 'country')}</p>
            </div>
          </div>
          <div className="level-item has-text-centered" onClick={toggleCity}>
            <div className="stat">
              <p className="heading">Cities</p>
              <p className="title">{profile.towns.length}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Travel XP</p>
              <p className="title unclickable">{profile.score}</p>
            </div>
          </div>
        </div>

      </section>

      <section className={panel ? 'section' : 'section hide'} id="user-profile">
        <div className="container">
          <h2 className="title">
            Badges
          </h2>
          <div className="display">
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
          <div className="display">
            {/* replace test data with profile.groups_joined when api call working */}
            {profile.groups_joined.map((group, i) => {
              return <Link to={`/groups/${group.id}`} className="group-link" key={i}>
                <div className="image is-150x150">
                  <div className="group">
                    <div className="label">{group.name}</div>
                    <img className="image is-150x150 is-rounded" src={group.image} alt="" />
                    <div className="overlay">
                      <div className="is-size-7">{group.description}</div>
                    </div>
                  </div>
                </div>
              </Link>
            })}
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