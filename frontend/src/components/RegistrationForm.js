import React from 'react'
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

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
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
    }
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    // console.log(this.state.data)
    axios.post('/api/register', this.state.data)
      .then(() => console.log('registered!'))
      .catch(err => {
        // console.log(err.response.data)
        this.setState({ errors: err.response.data })
      })
  }

  handleImageUpload(response) {
    const data = { ...this.state.data, image: response.filesUploaded[0].url }
    this.setState({ data })
  }

  render() {
    return (
      <>

        <div className=''>
          <div className='container'>
            <h1>Register</h1>
            <div className='columns'>
              <div className='column'>
                <form className='form' onSubmit={(e) => this.handleSubmit(e)}>

                  <div className='field'>
                    <label htmlFor='username' className='label'>
                      Username
                    </label>
                    <div className='control'>
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className='input'
                        type='text'
                        name='username'
                      />
                    </div>
                    {this.state.errors.username && <small className='help is-danger'>
                      {this.state.errors.username[0]}
                    </small>}
                  </div>

                  <div className='field'>
                    <label htmlFor='first_name' className='label'>
                      First name
                    </label>
                    <div className='control'>
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className='input'
                        type='text'
                        name='first_name'
                      />
                    </div>
                    {this.state.errors.first_name && <small className='help is-danger'>
                      {this.state.errors.first_name[0]}
                    </small>}
                  </div>

                  <div className='field'>
                    <label htmlFor='last_name' className='label'>
                      Last name
                    </label>
                    <div className='control'>
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className='input'
                        type='text'
                        name='last_name'
                      />
                    </div>
                    {this.state.errors.last_name && <small className='help is-danger'>
                      {this.state.errors.last_name[0]}
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
                      onSuccess={(response) => this.handleImageUpload(response)}
                      preload={true}
                    />
                    {this.state.data.image &&
                      <figure className="image is-128x128">
                        <img className="is-rounded" src={this.state.data.image} />
                        <br />
                      </figure>
                    }
                    {/* {this.state.errors.image && <small className='help is-danger'>
                      {this.state.errors.image[0]}
                    </small>} */}
                  </div>

                  <div className='field'>
                    <label htmlFor='email' className='label'>
                      Email
                    </label>
                    <div className='control'>
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className='input'
                        type='email'
                        name='email'
                      />
                    </div>
                    {this.state.errors.email && <small className='help is-danger'>
                      {this.state.errors.email[0]}
                    </small>}
                  </div>

                  <div className='field'>
                    <label htmlFor='password' className='label'>
                      Password
                    </label>
                    <div className='control'>
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className='input'
                        type='password'
                        name='password'
                      />
                    </div>
                    {this.state.errors.password && <small className='help is-danger'>
                      {this.state.errors.password[0]}
                    </small>}
                  </div>
                  <div className='field'>
                    <label htmlFor='password_confirmation' className='label'>
                      Confirm Password
                    </label>
                    <div className='control'>
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className='input'
                        type='password'
                        name='password_confirmation'
                      />
                    </div>
                    {this.state.errors.password_confirmation && <small className='help is-danger'>
                      {this.state.errors.password_confirmation[0]}
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
    )
  }
}

export default Register