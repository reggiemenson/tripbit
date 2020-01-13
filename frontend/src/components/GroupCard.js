import React from 'react'

const GroupCard = ({ group }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-9by10">
          <img 
            src={group.image} 
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <p className="has-text-grey-darker is-size-6">{group.name}</p>
      </div>
      <footer className="card-footer">
        <a 
          className="card-footer-item is-size-5" 
        >
          <i className="fas fa-info-circle" />
        </a>
        <a 
          className="card-footer-item" 
        >
          <i className="fas fa-times-circle is-size-5" />
        </a>
      </footer>
    </div>
  </div>
)

export default GroupCard