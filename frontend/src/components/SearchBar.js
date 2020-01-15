import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from '../lib/auth'
import UserCard from './UserCard'

const SearchBar = (props) => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchBarModal, setSearchBarModal] = useState(false)
  const [searchBar, setSearchBar] = useState('')


  useEffect(() => {
    axios.get('/api/users', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(response => {
        setData(response.data)
        // console.log(data)
        // console.log(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  function filterBySearch(Users) {
    return Users.filter(user => {
      if (searchBar !== '') return user.first_name.toLowerCase().includes(searchBar.toLowerCase()) || user.last_name.toLowerCase().includes(searchBar.toLowerCase())
      return user
    })
  }

  function handleSearchChange(e) {
    setSearchBar(e.target.value)
    // console.log(searchBar)
    console.log(data.map((user) => {
      return user.first_name
    }))
  }


  function goToUserProfile(e) {
    props.history.push(`/profile/${e.target.id}`)
  }

  console.log(searchBar)
  function handleSubmit(e) {
    setSearchBar(e.target.value)
    if (searchBar !== '') setFilteredData([])
    console.log('test ', filteredData)
    const returnedResults = data.filter(data => data.first_name.toLowerCase().includes(searchBar.toLowerCase()) || data.last_name.toLowerCase().includes(searchBar.toLowerCase()) || data.username.toLowerCase().includes(searchBar.toLowerCase()))
    setFilteredData(returnedResults)
    // console.log(returnedResults)
    
  }


  return <>
    <div>
      <form className="form" id="user-search" onSubmit={handleSubmit}>
        <div className="columns is-mobile">
          <div className="column is-12-desktop is-8-tablet is-8-mobile">
            <div className="field">
              <div className="control has-icons-left">
                <input className="input has-text-info is-large" type="search" placeholder="Search for your friends" onChange={handleSearchChange}></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-compass"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className="columns is-multiline">
      {filteredData.map((user, i) => {
        return <UserCard key={i} user={user} goToUserProfile={(e) => goToUserProfile(e)} />
      })}
    </div>
  </>
}
export default SearchBar