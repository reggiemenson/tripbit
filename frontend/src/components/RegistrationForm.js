import React from 'react'
// import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        firstname: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirmation: ''
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
    // axios.post('/api/register', this.state.data)
    //   .then(() => this.props.history.push('/login'))
    //   .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return (
      <>

        <div className=''>
          <div className='container'>
            <h1>Register</h1>
            <div className='columns'>
              <div className='column is-half'>
                <form className='form' onSubmit={(e) => this.handleSubmit(e)}>

                  <div className='field'>
                    <label htmlFor='firstname' className='label'>
                      First name
                    </label>
                    <div className='control'>
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className='input'
                        type='text'
                        name='firstname'
                      />
                    </div>
                    {this.state.errors.firstname && <small className='help is-danger'>
                      {this.state.errors.firstname}
                    </small>}
                  </div>

                  <div className='field'>
                    <label htmlFor='surname' className='label'>
                      Surname
                    </label>
                    <div className='control'>
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className='input'
                        type='text'
                        name='surname'
                      />
                    </div>
                    {this.state.errors.surname && <small className='help is-danger'>
                      {this.state.errors.surname}
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
                      {this.state.errors.email}
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
                      {this.state.errors.password}
                    </small>}
                  </div>
                  <div className='field'>
                    <label htmlFor='' className='label'>
                      Confirm Password
                    </label>
                    <div className='control'>
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className='input'
                        type='password'
                        name='passwordConfirmation'
                      />
                    </div>
                    {this.state.errors.passwordConfirmation && <small className='help is-danger'>
                      {this.state.errors.passwordConfirmation}
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