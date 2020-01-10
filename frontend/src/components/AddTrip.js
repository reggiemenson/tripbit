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

const AddTrip = () => {

  // add hooks here

  return (
    <>
      <div className="field">
        <label className="label">Start date</label>
        <div className="control">
          <input className="input" type="date" />
        </div>
      </div>
      
      <div className="field">
        <label className="label">End date</label>
        <div className="control">
          <input className="input" type="date" />
        </div>
      </div>

      <Select
        isMulti
        components={animatedComponents}
        // is this not working?
        closeMenuOnSelect={false}
        options={options}
      />

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </>
  )
}

export default AddTrip