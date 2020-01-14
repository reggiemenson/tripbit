import React from 'react'
import Auth from '../lib/Auth'

const UserCard = ({ user, goToUserProfile }) => (
  <div id="group-card" className="column is-one-fifth-desktop is-one-quarter-tablet is-half-mobile">
    <div className="card">

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <figure className="image is-48x48">
              <img className="is-rounded" src={user.image} alt="group profile image" />
            </figure>
          </div>

          {user.id === Auth.getUserId() ? <div className="media-right">
            <i className="fas fa-crown is-size-5" />
          </div> : <></>
          }

        </div>
        <div className="media">
          <div className="media-content">
            <p className="subtitle is-5">{user.first_name} {user.last_name}</p>
            <p className="text"></p>
          </div>
        </div>

        <footer className="card-footer">
          <a
            className="card-footer-item is-size-5"
            onClick={(e) => goToUserProfile(e)}
            id={user.id}
          />
          <i
            className="fas fa-info-circle"
            onClick={(e) => goToUserProfile(e)}
            id={user.id}
          />


        </footer>
      </div>
    </div>
  </div>
)

export default UserCard