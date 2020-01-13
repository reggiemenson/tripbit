import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'



/*
MAKE GROUPS PROFILE PAGE BASED ON LAYOUT OF INDIVIDUAL USER PROFILE

ADDITIONAL CONSIDERATIONS:
- for owners of the group, need to list out all the users who sent requests and provide option to approve
- for owners of the group, ened to provide option to edit and delete the group
*/

const IndividualGroup = (props) => {
  
  const [group, setGroup] = useState([])
  const [errors, setErrors] = useState('')


  function fetchGroupData() {
    axios.get(`/api/groups/${props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => {
        setGroup(resp.data)
      })
      .catch(err => {
        console.log(err)
        setErrors({ ...errors, ...err })
      })
  }

  useEffect(() => {
    fetchGroupData()
  }, [])

  return (
    <section className="section">
      {console.log(group)}
      <div className="container">

        <div className="title">
          {group.name}
        </div>

      </div>
    </section>
  )
}

export default IndividualGroup