import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import axios from 'axios'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

const CitySelection = () => {

  const [towns, setTowns] = useState([])
  const [errors, setErrors] = useState('')
  const [searchBar, setSearchBar] = useState('')
  const [townsVisited, setTownsVisited] = useState([])

  useEffect(() => {
    axios.get('/api/towns/')
      .then(resp => {
        console.log('Response!')
        setTowns(resp.data)
      })
      .catch(err => setErrors(err.response.message))
    // AT SOME POINT WILL NEED TO QUERY API HERE TO GET USER'S ALREADY VISITED CITIES
  }, [])

  function handleSearchChange(e) {
    setSearchBar(e.target.value)
  }

  function filterBySearch(towns) {
    return towns.filter(town => {
      if (searchBar !== '') return town.name.toLowerCase().includes(searchBar.toLowerCase()) || town.country.toLowerCase().includes(searchBar.toLowerCase())
      return town
    })
  }

  function handleCheck(e) {
    console.log(e.target.checked)
    console.log(e.target.id)

    if (e.target.checked) {
      const newTowns = [...townsVisited]
      newTowns.push(e.target.id)
      setTownsVisited(newTowns)

    } else {
      const newTowns = [...townsVisited]
        .filter(id => id !== e.target.id)
      setTownsVisited(newTowns)
    }
  }

  function handleSubmit(e) {
    e.preventDefault
    // some day need to send city IDs to API
    return
  }

  return (
    <section className="section" id="city-selection">
      <div className="container">
        {console.log(townsVisited)}
        <h1 className="title">Select cities</h1>
        <h2 className="subtitle">Where have you travelled to?</h2>
    
        <form className="form" onSubmit={handleSubmit}>
          <div className="columns is-mobile">
            <div className="column is-10-desktop is-8-tablet is-8-mobile">
              <div className="field">
                <div className="control has-icons-left">
                  <input className="input has-text-info" type="search" placeholder="Search for countries or cities" onChange={handleSearchChange}></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-compass"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="column column is-2-desktop is-4-tablet is-4-mobile has-text-right">
              <button className="button is-link" id="send-request">
                Done
              </button>
            </div>

          </div>
        </form>
        
        
        {towns.length === 0 ? <div className="loading">Loading cities...</div> : <></> }
        <Accordion
          allowMultipleExpanded={true}
          allowZeroExpanded={true}
        >
          {
            [...new Set(filterBySearch(towns).map(town => town.country))]
              .sort()
              .map((country, i) => {

                return <AccordionItem key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <p className="is-size-6">
                        {country}
                      </p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {filterBySearch(towns)
                      .filter(town => town.country === country)
                      .sort(function(a, b){
                        if (a.name < b.name) { return -1 }
                        if (a.name > b.name) { return 1 }
                        return 0
                      })
                      .map((town, i) => {
                        return <div key={i} className="field">
                          <input 
                            className="is-checkradio is-info" 
                            id={town.id} 
                            type="checkbox" 
                            name={town.id} 
                            onChange={handleCheck} 
                            checked={townsVisited.includes(town.id.toString()) ? true : false}
                          />
                          <label className="city-checkbox-label" htmlFor={town.id}>{town.name} ({town.admin_name})</label>
                        </div>
                     
                      })
                    }
                  </AccordionItemPanel>
                </AccordionItem>

              })
          }


        </Accordion>
      </div>
    </section>
  )
}

export default CitySelection



