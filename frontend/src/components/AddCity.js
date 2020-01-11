import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

// animation for react-select dropdown menu
const animatedComponents = makeAnimated()


// replace with entire dataset
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

// add option to browse by country

const AddCity = () => {

  // hooks here

  return (
    <>
      <h1 className="title">Add a city to your collection</h1>
      <h2 className="subtitle">Select country and then add cities!!</h2>
      <div className="field">
        <p className="control has-icons-left">
          <span className="select">
            <select>
              {/* LINK TO DATABASE HERE? */}
              <option selected>Country</option>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
          <span className="icon is-small is-left">
            <i className="fas fa-globe"></i>
          </span>
        </p>
      </div>
      {/* figure out how to add icon here - look at react-select docs */}
      <Select
        isMulti
        components={animatedComponents}
        // is this not working?
        closeMenuOnSelect={false}
        options={options}
      />
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </>
  )
}

export default AddCity



