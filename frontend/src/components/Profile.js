import React, { useState } from 'react'
import LazyHero from 'react-lazy-hero'
// import ReactMapGL from 'react-map-gl'
// use this instead for hooks?
import MapGL from 'react-map-gl'
// why is this needed?
import { render } from 'react-dom'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2VvcmdwIiwiYSI6ImNrMzM1bnN0azBuY2IzZnBiZ3d2eDA5dGQifQ.Ym1lHqYUfUUu2m897J4hcg' // Set your mapbox token here

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
        parallaxOffset="100"
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
      <h1 className="title is-1">Welcome to your profile!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis distinctio delectus voluptatem ratione illo laborum tenetur autem dolor nostrum aliquid odio saepe, quo nobis sunt impedit eos laboriosam. Accusamus?</p>

    </div>
  )
}

export default Profile