import React, { useState } from 'react'
import axios from 'axios'
import Auth from '../lib/auth'

import { toast } from 'react-toastify'

const GroupForm = ({ props }) => {
  const notify = () => toast('Group Successfully Added!')

  const [details, setDetails] = useState({
    data: {
      name: '',
      description: ''
    },
    errors: ''
  })

  const handleChange = (e) => {
    const data = { ...details.data, [e.target.name]: e.target.value }
    const errors = ''
    setDetails({ data, errors })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/groups/', details.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => {
        notify()
        props.history.push(`/groups/${resp.data.id}`)
      })
      .catch(err => {
        setDetails({errors: 'Both name and description are required'})
        console.log(err)
      })
  }

  return <>
    <div className=''>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <form className='form' onSubmit={e => handleSubmit(e)}>

              <div className="field">
                <p className="control has-icons-left">
                  <input
                    onChange={handleChange}
                    className="input has-text-info"
                    name="name"
                    type="text"
                    placeholder="Group name"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-pencil-alt"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <textarea
                    onChange={handleChange}
                    name="description"
                    className="textarea has-text-info"
                    type="textarea"
                    placeholder="Description"
                  />
                </p>
              </div>
              {details.errors && <small className='help is-danger'>
                {details.errors}
              </small>}
              <button className='button is-link'>
                Add Group
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default GroupForm