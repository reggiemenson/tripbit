import React, { useState } from 'react'
import axios from 'axios'
import ReactFilestack from 'filestack-react'
import { fileloaderKey } from '../config/environment'

const options = {
  accept: 'image/*',
  transformations: {
    crop: true,
    circle: true,
    rotate: true
  }
}

const Register = ({ toggleRegistration, toggleLogin }) => {

  const [register, setRegister] = useState({
    data: {
      username: '',
      first_name: '',
      last_name: '',
      image: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    errors: {}
  })

  const handleChange = (e) => {
    const data = { ...register.data, [e.target.name]: e.target.value }
    const errors = ''
    // const errors = { ...register.errors, [e.target.name]: '' }
    setRegister({ data, errors })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(register.data)
    if (register.data.image === '') {
      delete register.data.image
    }
    axios.post('/api/register', register.data)
      // change code so that upon successful registration login modal appears
      .then(() => {
        toggleRegistration()
        toggleLogin()
      })
      .catch(err => {
        // console.log(err.response.data)
        setRegister({ errors: err.response.data })
      })
  }

  const handleImageUpload = (response) => {
    console.log(response)
    const data = { ...register.data, image: response.filesUploaded[0].url }
    setRegister({ data })
  }

  return <>
    {console.log(register)}
    <div className=''>
      <div className='container'>
        <h1>Register</h1>
        <div className='columns'>
          <div className='column'>
            <form className='form' onSubmit={handleSubmit}>

              <div className='field'>
                <label htmlFor='username' className='label'>
                  Username
                </label>
                <div className='control'>
                  <input
                    onChange={handleChange}
                    className="input has-text-info"
                    type='text'
                    name='username'
                  />
                </div>
                {register.errors.username && <small className='help is-danger'>
                  {register.errors.username[0]}
                </small>}
              </div>

              <div className='field'>
                <label htmlFor='first_name' className='label'>
                  First name
                </label>
                <div className='control'>
                  <input
                    onChange={handleChange}
                    className="input has-text-info"
                    type='text'
                    name='first_name'
                  />
                </div>
                {register.errors.first_name && <small className='help is-danger'>
                  {register.errors.first_name[0]}
                </small>}
              </div>

              <div className='field'>
                <label htmlFor='last_name' className='label'>
                  Last name
                </label>
                <div className='control'>
                  <input
                    onChange={handleChange}
                    className="input has-text-info"
                    type='text'
                    name='last_name'
                  />
                </div>
                {register.errors.last_name && <small className='help is-danger'>
                  {register.errors.last_name[0]}
                </small>}
              </div>

              <div className='field'>
                <label htmlFor='image' className='label'>
                  Image
                </label>
                <ReactFilestack
                  apikey={fileloaderKey}
                  componentDisplayMode={{
                    type: 'button',
                    customText: 'Add an Image'
                  }}
                  className='button'
                  options={options}
                  onSuccess={(response) => handleImageUpload(response)}
                  preload={true}
                />
                {register.data.image &&
                  <figure className="image is-128x128">
                    <img className="is-rounded" src={register.data.image} />
                    <br />
                  </figure>
                }
                {/* {register.errors.image && <small className='help is-danger'>
                      {register.errors.image[0]}
                    </small>} */}
              </div>

              <div className='field'>
                <label htmlFor='email' className='label'>
                  Email
                </label>
                <div className='control'>
                  <input
                    onChange={handleChange}
                    className="input has-text-info"
                    type='email'
                    name='email'
                  />
                </div>
                {register.errors.email && <small className='help is-danger'>
                  {register.errors.email[0]}
                </small>}
              </div>

              <div className='field'>
                <label htmlFor='password' className='label'>
                  Password
                </label>
                <div className='control'>
                  <input
                    onChange={handleChange}
                    className="input has-text-info"
                    type='text'
                    name='password'
                  />
                </div>
                {register.errors.password && <small className='help is-danger'>
                  {register.errors.password[0]}
                </small>}
              </div>
              <div className='field'>
                <label htmlFor='password_confirmation' className='label'>
                  Confirm Password
                </label>
                <div className='control'>
                  <input
                    onChange={handleChange}
                    className="input has-text-info"
                    type='text'
                    name='password_confirmation'
                  />
                </div>
                {register.errors.password_confirmation && <small className='help is-danger'>
                  {register.errors.password_confirmation[0]}
                </small>}
              </div>
              <button className='button is-rounded'>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </>
}

export default Register