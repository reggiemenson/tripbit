import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        username: '',
        first_name: '',
        last_name: '',
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
      .then(() => this.props.history.push('/login'))
      .catch(err => {
        // console.log(err.response.data)
        this.setState({ errors: err.response.data })
      })
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