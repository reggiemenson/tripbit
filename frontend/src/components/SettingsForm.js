import React from 'react'

const Settings = ({ data, handleChange, modalSubmit }) => {

  return <>
    <div className='container has-text-centered'>
      <div className='columns'>
        <h1 className='title'>Profile Information</h1>
        <div className='column'>
          <form className='form has-text-centered' onSubmit={modalSubmit}>

            <div className='field'>
              <div className='control has-icons-left has-icons-right'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='username'
                  className='input has-text-info'
                  value={data.username}
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-user'></i>
                </span>
                <span className='icon is-small is-right'>
                  <i className='fas fa-check'></i>
                </span>
              </div>
            </div>

            <div className='field'>
              <p className='control has-icons-left'>
                <input
                  onChange={handleChange}
                  className='input has-text-info'
                  type='text'
                  name='first_name'
                  value={data.first_name}
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-id-card'></i>
                </span>
              </p>
            </div>

            <div className='field'>
              <p className='control has-icons-left'>
                <input
                  onChange={handleChange}
                  className='input has-text-info'
                  type='text'
                  name='last_name'
                  value={data.last_name}
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-id-card'></i>
                </span>
              </p>
            </div>

            <div className="field">
              <div className="control">
                <div className='control has-icons-left'>
                  <div className='select'>
                    <select>
                      <option>Left-handed operation</option>
                      <option>Right-handed operation</option>
                    </select>
                  </div>
                  <span className="icon is-small is-left">
                    <i className='fas fa-gamepad'></i>
                  </span>
                </div>
              </div>
            </div>

            <button className='button'>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>

  </>
}

export default Settings