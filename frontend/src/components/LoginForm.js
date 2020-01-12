import React from 'react'
import axios from 'axios'
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
    axios.post('/api/login', this.state.data)
      .then(resp => {
        // Auth.setToken(resp.data.token)
        console.log(resp)
        this.props.history.push(`/profile/${resp.data.id}`)
      })
      .catch((err) => {
        this.setState({ errors: err.response.data  })
        console.log(err.response.data)
      })
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

                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className="input"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control has-icons-left">
                      <input
                        onChange={(e) => this.handleChange(e)}
                        name="password"
                        className="input"
                        type="password"
                        placeholder="Password"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </p>
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