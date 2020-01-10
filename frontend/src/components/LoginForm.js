import React from 'react'
// import axios from 'axios'
// import Auth from '../lib/auth'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        password: ''
      },
      errors: ''
    }
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = ''
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    // axios.post('/api/login', this.state.data)
    //   .then(resp => {
    //     Auth.setToken(resp.data.token)
    //     console.log(resp)
    //     this.props.history.push(`/lists/${resp.data.id}`)
    //   })
    //   .catch(() => this.setState({ errors: 'Incorrect username/password combination' }))
  }

  render() {
    console.log(this.state.errors)
    return (
      <>
        <div className=''>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <h1>Login</h1>
                <form className='form' onSubmit={(e) => this.handleSubmit(e)}>

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
                  </div>
                  {this.state.errors && <small className='help is-danger'>
                    {this.state.errors}
                  </small>}
                  <button className='button is-rounded'>
                    Login
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

export default Login