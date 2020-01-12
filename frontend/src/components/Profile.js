import React, { useState } from 'react'
import LazyHero from 'react-lazy-hero'
// import ReactMapGL from 'react-map-gl'
// use this instead for hooks?
import MapGL from 'react-map-gl'
// why is this needed?
// import { render } from 'react-dom'

import Mask from '../images/mask2.png'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2VvcmdwIiwiYSI6ImNrMzM1bnN0azBuY2IzZnBiZ3d2eDA5dGQifQ.Ym1lHqYUfUUu2m897J4hcg' // Set your mapbox token here

const example_user = {
  'id': 2,
  'username': 'kitkat',
  'first_name': 'kit',
  'last_name': 'kat',
  'score': null,
  'image': 'https://bit.ly/37UONby',
  'towns': [],
  'trips': [],
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
    },
    {
      "id": 203,
      "name": "North America",
      "description": "Visit at least one country on the continent of North America",
      "image": "https://image.flaticon.com/icons/svg/1973/1973592.svg",
      "users": []
    },
    {
      "id": 204,
      "name": "South America",
      "description": "Visit at least one country on the continent of South America",
      "image": "https://image.flaticon.com/icons/svg/1752/1752275.svg",
      "users": []
    },
    {
      "id": 205,
      "name": "Asia",
      "description": "Visit at least one country on the continent of Asia",
      "image": "https://image.flaticon.com/icons/svg/1086/1086208.svg",
      "users": []
    },
    {
      "id": 206,
      "name": "Africa",
      "description": "Visit at least one country on the continent of Africa",
      "image": "https://image.flaticon.com/icons/svg/520/520064.svg",
      "users": []
    },
    {
      "id": 207,
      "name": "Oceania",
      "description": "Visit at least one country on the continent of Oceania",
      "image": "https://image.flaticon.com/icons/svg/284/284475.svg",
      "users": []
    },
    {
      "id": 208,
      "name": "Viking",
      "description": "Visit at least one of Norway, Sweden, Denmark, Finland or Iceland",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 209,
      "name": "Columbus",
      "description": "Spain, Portugal and one of (South America)",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 210,
      "name": "Kerouac",
      "description": "Visit 6 in the USA",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 211,
      "name": "Stan",
      "description": "Visit any of the -stans",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 212,
      "name": "Arctic Circle",
      "description": "Vist any city above 66°N",
      "image": "https://image.flaticon.com/icons/svg/2445/2445217.svg",
      "users": []
    },
    {
      "id": 213,
      "name": "Equator",
      "description": "Vist any city within 1°S and 1°N",
      "image": "https://image.flaticon.com/icons/svg/1899/1899084.svg",
      "users": []
    },
    {
      "id": 214,
      "name": "Most countries",
      "description": "Visit the most countries on the platform",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 215,
      "name": "Most cities",
      "description": "Visit the most cities on the platform",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 216,
      "name": "Most capitals",
      "description": "Visit the most capitals on the platform",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    },
    {
      "id": 217,
      "name": "MEGA BADGE",
      "description": "Have the most badges on the platform",
      "image": "http://pixelartmaker.com/art/086fe7507559c28.png",
      "users": []
    }
  ],
  'groups_owned': [],
  'groups_joined': [],
  'groups_podium1': [],
  'groups_podium2': [],
  'groups_podium3': []
}

const Profile = () => {

  // TO DO write code to zoom to bounding box containing all places user has been to
  const [viewport, setViewport] = useState({
    latitude: 51.5,
    longitude: 0.13,
    zoom: 4,
    bearing: 0,
    pitch: 0
  })

  return (
    <div>
      {/* parallaxOffset warning expects number not string */}
      {/* LazyHero probably isn't compatible with mapbox as it takes an image via imageSrc */}
      <LazyHero
        // parallaxOffset="100"
        minHeight="33vh"
        color="#00eaff"
        opacity="0.4"
        isFixed="true"  
        transitionDuration="1000"
        // imageSrc="https://unsplash.it/2000/1000"
      >
        {/* <h1>Generic Startup Hype Headline</h1> */}
        <MapGL
          {...viewport}
          width="100vw"
          height="33vh"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={setViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </LazyHero>
      {/* placeholder text to test parallax effect with mapbox */}

      <section className="section">
        <div className="container">
          <h1 className="title is-1">Welcome to your profile!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus?</p>
        </div>
      </section>


      <section className="section" id="user-profile">
        <div className="container">
          <div className="subtitle">
            Badges
          </div>
          <div className="badge-display">
            {example_user.badges.map((badge, i) => {
              return <div className="badge" key={i}>
                <div className="image is-150x150">
                  <div className="badge" >
                    <img className="image is-150x150" style={{ backgroundImage: `url(${badge.image})` }} src={Mask} alt=""/>
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


      <section className="section">
        <div className="container">
          <div className="subtitle">
            Need some space down here
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile