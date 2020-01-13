import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'

import GroupCard from './GroupCard'

const Groups = () => {

  const [groups, setGroups] = useState([])
  const [errors, setErrors] = useState('')

  function fetchGroupData() {
    axios.get('/api/groups', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => {
        setGroups(resp.data)
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
      {console.log(groups)}
      <div className="container">

        <div className="level is-mobile">
          <div className="level-left">
            <div className="title level-item">Groups</div>
          </div>
          <div className="level-right">
            <button className="button is-link is-medium">
              <span className="icon is-small is-left">
                <i className="fas fa-plus-circle"></i>
              </span>
              <span className="text">
                Add Group
              </span>
            </button>
          </div>
        </div>

        <div className="subtitle">
          Groups you belong to
        </div>
        

        <div className="columns is-mobile is-multiline">
          {groups
            .filter((group) => {
              return group.members
                .reduce((list, member) => {
                  list.push(member.id)
                  return list
                }, [])
                .includes(Auth.getUserId())
            })
            .map((group, i) => {

              return <GroupCard 
                key={i}
                group={group}
              />

            })}

        </div>


        <div className="subtitle">
          All other groups
        </div>


        

       

      </div>
    </section>
  )
}

export default Groups