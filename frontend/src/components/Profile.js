import React, { useState, useEffect } from 'react'
import MapGL from 'react-map-gl'
import ReactFilestack from 'filestack-react'
import { fileloaderKey } from '../config/environment'
import axios from 'axios'

import Mask from '../images/mask-dark-gradient.png'
import Auth from '../lib/auth'

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

const example_user = {
  "id": 2,
  "username": "kitkat",
  "first_name": "kit",
  "last_name": "kat",
  "score": null,
  "image": "https://bit.ly/37UONby",
  "towns": [
    {
      "model": "travels.town",
      "pk": 3705,

      "name": "\ufeffTokyo",
      "name_ascii": "Tokyo",
      "lat": "35,685",
      "lng": "139,7514",
      "country": "Japan",
      "iso2": "JP",
      "iso3": "JPN",
      "admin_name": "T\u014dky\u014d",
      "capital": "primary",
      "population": 35676000,
      "continent": "Asia",
      "visitors": []

    },
    {
      "model": "travels.town",
      "pk": 3706,

      "name": "New York",
      "name_ascii": "New York",
      "lat": "40,6943",
      "lng": "-73,9249",
      "country": "United States",
      "iso2": "US",
      "iso3": "USA",
      "admin_name": "New York",
      "capital": "",
      "population": 19354922,
      "continent": "North America",
      "visitors": []
    }
  ],
  "trips": [],
  'badges': [
    {
      "id": 1,
      "name": "﻿Afghanistan",
      "description": "Visit at least one city in Afghanistan",
      "image": "https://restcountries.eu/data/afg.svg",
      "users": []
    },
    {
      "id": 2,
      "name": "Albania",
      "description": "Visit at least one city in Albania",
      "image": "https://restcountries.eu/data/alb.svg",
      "users": []
    },
    {
      "id": 3,
      "name": "Algeria",
      "description": "Visit at least one city in Algeria",
      "image": "https://restcountries.eu/data/dza.svg",
      "users": []
    },
    {
      "id": 4,
      "name": "Angola",
      "description": "Visit at least one city in Angola",
      "image": "https://restcountries.eu/data/ago.svg",
      "users": []
    },
    {
      "id": 5,
      "name": "Argentina",
      "description": "Visit at least one city in Argentina",
      "image": "https://restcountries.eu/data/arg.svg",
      "users": []
    },
    {
      "id": 140,
      "name": "Romania",
      "description": "Visit at least one city in Romania",
      "image": "https://restcountries.eu/data/rou.svg",
      "users": []
    },
    {
      "id": 141,
      "name": "Russia",
      "description": "Visit at least one city in Russia",
      "image": "https://restcountries.eu/data/rus.svg",
      "users": []
    },
    {
      "id": 142,
      "name": "Rwanda",
      "description": "Visit at least one city in Rwanda",
      "image": "https://restcountries.eu/data/rwa.svg",
      "users": []
    },
    {
      "id": 143,
      "name": "Sao Tome And Principe",
      "description": "Visit at least one city in Sao Tome And Principe",
      "image": "https://restcountries.eu/data/stp.svg",
      "users": []
    },
    {
      "id": 144,
      "name": "Saudi Arabia",
      "description": "Visit at least one city in Saudi Arabia",
      "image": "https://restcountries.eu/data/sau.svg",
      "users": []
    },
    {
      "id": 145,
      "name": "Senegal",
      "description": "Visit at least one city in Senegal",
      "image": "https://restcountries.eu/data/sen.svg",
      "users": []
    },
    {
      "id": 146,
      "name": "Serbia",
      "description": "Visit at least one city in Serbia",
      "image": "https://restcountries.eu/data/srb.svg",
      "users": []
    },
    {
      "id": 147,
      "name": "Sierra Leone",
      "description": "Visit at least one city in Sierra Leone",
      "image": "https://restcountries.eu/data/sle.svg",
      "users": []
    },
    {
      "id": 148,
      "name": "Singapore",
      "description": "Visit at least one city in Singapore",
      "image": "https://restcountries.eu/data/sgp.svg",
      "users": []
    },
    {
      "id": 149,
      "name": "Slovakia",
      "description": "Visit at least one city in Slovakia",
      "image": "https://restcountries.eu/data/svk.svg",
      "users": []
    },
    {
      "id": 150,
      "name": "Slovenia",
      "description": "Visit at least one city in Slovenia",
      "image": "https://restcountries.eu/data/svn.svg",
      "users": []
    },
    {
      "id": 151,
      "name": "Somalia",
      "description": "Visit at least one city in Somalia",
      "image": "https://restcountries.eu/data/som.svg",
      "users": []
    },
    {
      "id": 152,
      "name": "South Africa",
      "description": "Visit at least one city in South Africa",
      "image": "https://restcountries.eu/data/zaf.svg",
      "users": []
    },
    {
      "id": 184,
      "name": "5+ Countries",
      "description": "Vistied at least 5 countries",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 185,
      "name": "10+ Countries",
      "description": "Visited at least 10 countries",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 195,
      "name": "5+ Cities",
      "description": "Vistied at least 5 cities",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 196,
      "name": "10+ Cities",
      "description": "Visited at least 10 cities",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 202,
      "name": "Europe",
      "description": "Visit at least one country on the continent of Europe",
      "image": "https://image.flaticon.com/icons/svg/533/533467.svg",
      "users": []
    }
  ],
  "groups_owned": [
    {
      "id": 1,
      "name": "Test group 1",
      "description": "for science",
      "image": "https://cdn.pixabay.com/photo/2014/04/02/10/47/globe-304586_1280.png",
      "owner": 2,
      "members": [
        2
      ],
      "requests": [],
      "podium_1_user": null,
      "podium_2_user": null,
      "podium_3_user": null,
      "podium_1_score": null,
      "podium_2_score": null,
      "podium_3_score": null
    },
    {
      "id": 2,
      "name": "Test group 2",
      "description": "for science",
      "image": "https://cdn.pixabay.com/photo/2014/04/02/10/47/globe-304586_1280.png",
      "owner": 2,
      "members": [
        2
      ],
      "requests": [],
      "podium_1_user": null,
      "podium_2_user": null,
      "podium_3_user": null,
      "podium_1_score": null,
      "podium_2_score": null,
      "podium_3_score": null
    }
  ],
  "groups_requested": [
    {
      "id": 5,
      "name": "Test group 5",
      "description": "for science",
      "image": "https://cdn.pixabay.com/photo/2014/04/02/10/47/globe-304586_1280.png",
      "owner": 3,
      "members": [
        3
      ],
      "requests": [
        2
      ],
      "podium_1_user": null,
      "podium_2_user": null,
      "podium_3_user": null,
      "podium_1_score": null,
      "podium_2_score": null,
      "podium_3_score": null
    },
    {
      "id": 6,
      "name": "Test group 6",
      "description": "for science",
      "image": "https://cdn.pixabay.com/photo/2014/04/02/10/47/globe-304586_1280.png",
      "owner": 3,
      "members": [
        3
      ],
      "requests": [
        2
      ],
      "podium_1_user": null,
      "podium_2_user": null,
      "podium_3_user": null,
      "podium_1_score": null,
      "podium_2_score": null,
      "podium_3_score": null
    }
  ],
  "groups_joined": [
    {
      "id": 1,
      "name": "Test group 1",
      "description": "for science",
      "image": "https://cdn.pixabay.com/photo/2014/04/02/10/47/globe-304586_1280.png",
      "owner": 2,
      "members": [
        2
      ],
      "requests": [],
      "podium_1_user": null,
      "podium_2_user": null,
      "podium_3_user": null,
      "podium_1_score": null,
      "podium_2_score": null,
      "podium_3_score": null
    },
    {
      "id": 2,
      "name": "Test group 2",
      "description": "for science",
      "image": "https://cdn.pixabay.com/photo/2014/04/02/10/47/globe-304586_1280.png",
      "owner": 2,
      "members": [
        2
      ],
      "requests": [],
      "podium_1_user": null,
      "podium_2_user": null,
      "podium_3_user": null,
      "podium_1_score": null,
      "podium_2_score": null,
      "podium_3_score": null
    },
    {
      "id": 3,
      "name": "Test group 3",
      "description": "for science",
      "image": "https://cdn.pixabay.com/photo/2014/04/02/10/47/globe-304586_1280.png",
      "owner": 3,
      "members": [
        2,
        3
      ],
      "requests": [],
      "podium_1_user": null,
      "podium_2_user": null,
      "podium_3_user": null,
      "podium_1_score": null,
      "podium_2_score": null,
      "podium_3_score": null
    },
    {
      "id": 4,
      "name": "Test group 4",
      "description": "for science",
      "image": "https://cdn.pixabay.com/photo/2014/04/02/10/47/globe-304586_1280.png",
      "owner": 3,
      "members": [
        2,
        3
      ],
      "requests": [],
      "podium_1_user": null,
      "podium_2_user": null,
      "podium_3_user": null,
      "podium_1_score": null,
      "podium_2_score": null,
      "podium_3_score": null
    }
  ],
  "groups_podium1": [],
  "groups_podium2": [],
  "groups_podium3": []
}

const Profile = (props) => {

  // info from api get request will be stored here
  const [profile, setProfile] = useState({})
  const [errors, setErrors] = useState({})

  // TO DO write code to zoom to bounding box containing all places user has been to
  const [viewport, setViewport] = useState({
    latitude: 51.5,
    longitude: 0.13,
    zoom: 4,
    bearing: 0,
    pitch: 0
  })
  const [data, setData] = useState({})

  const handleImageUpload = (res) => {
    console.log(res.filesUploaded[0].url)
    // console.log(res.filesUploaded[1].url)
    const data = { ...data, image: res.filesUploaded[0].url }
    setData({ data })
  }


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
    return Array.from(new Set(all))
  }

  // work out how many continents, countries, or cities visited to show on modal
  const countContinentsCountries = (profile, size) => {
    return listContinentsCountries(profile, size).length
  }

  useEffect(() => {
    // use Auth to get your profile!
    // axios.get(`api/profile/${Auth.getUserId()}`)
    axios.get(`api/profile/${props.match.params.id}`)
      .then(resp => setProfile(resp))
      .catch(err => setErrors(err))
  }, [])

  console.log('profile ', profile)

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
      />

      <section className="hero" id="user-profile-header">
        <div className="hero-body level is-mobile">
          <p className="level-item subtitle is-3" onClick={showLeft}>Link 1</p>
          <ReactFilestack
            apikey={fileloaderKey}
            options={options}
            // actionOptions={PickerOptions}
            customRender={({ onPick }) => (
              <div>
                <figure className="level-item image is-128x128">
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
                <button onClick={onPick}>Pick</button>
              </div>
            )}
            onSuccess={handleImageUpload}
          />
          <p className="level-item subtitle is-3" onClick={showRight}>Link 2</p>
        </div>

        <div className="level is-mobile">
          <div className="level-item has-text-centered" onClick={toggleContinent}>
            <div>
              <p className="heading">Continents</p>
              <p className="title">{countContinentsCountries(example_user, 'continent')}</p>
            </div>
          </div>
          <div className="level-item has-text-centered" onClick={toggleCountry}>
            <div>
              <p className="heading">Countries</p>
              <p className="title">{countContinentsCountries(example_user, 'country')}</p>
            </div>
          </div>
          <div className="level-item has-text-centered" onClick={toggleCity}>
            <div>
              <p className="heading">Cities</p>
              <p className="title">{example_user.towns.length}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">XP</p>
              <p className="title">780</p>
            </div>
          </div>
        </div>

      </section>
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Add details</h1>
          <ReactFilestack
            mode='transform'
            apikey={fileloaderKey}
            componentDisplayMode={{
              type: 'button',
              customText: 'Add an Image'
            }}
            buttonClass='button'
            options={options}
            onSuccess={handleImageUpload}
            preload={true}
          />
          {data.image &&
            <figure className="image is-128x128">
              <img className="is-rounded" src={data.image} />
              <br />
            </figure>
          }
        </div>
      </section>

      <section className={panel ? 'section' : 'section hide'} id="user-profile">
        <div className="container">
          <div className="subtitle">
            Badges
          </div>
          <div className="badge-display">
            {/* replace test data with actual api data when ready */}
            {example_user.badges.map((badge, i) => {
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
          <div className="subtitle">
            Groups
          </div>
          {/* replace test data with profile.groups_joined when api call working */}
          {example_user.groups_joined.map((group, i) => {
            return <div key={i}>
              <p>{group.name}</p>
              <img src={group.image} alt="group photo" />
            </div>
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
        <div className="modal-background"></div>
        <div className="modal-content">
          <p>inContinents</p>
          {listContinentsCountries(example_user, 'continent').map((continent, i) => {
            return <div key={i}>
              <p>{continent}</p>
            </div>
          })}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleContinent}></button>
      </div>

      <div className={countryModal === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <p>Countries you've been to</p>
          {listContinentsCountries(example_user, 'country').map((country, i) => {
            return <div key={i}>
              <p>{country}</p>
            </div>
          })}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleCountry}></button>
      </div>

      <div className={cityModal === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <p>Cities you've been to</p>
          {example_user.towns.map((town, i) => {
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