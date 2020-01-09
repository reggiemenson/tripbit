import React from 'react'

const Hero = () => {
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

          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </div>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Login</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <div className="model-content">
              <p>testing!</p>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default Hero