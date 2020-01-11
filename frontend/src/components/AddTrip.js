import React, { Component, useState } from 'react'

// airbnb data range picker
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'

// react select drop down menu
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

// const AddTrip = () => {

//   // add hooks here
//   const [dates, setDates] = useState({
//     startDate: null,
//     endDate: null,
//     focusedInput: null
//   })

//   return (
//     <>
//       <div className="App">
//         <DateRangePicker
//           startDateId="startDate"
//           endDateId="endDate"
//           startDate={dates.startDate}
//           endDate={dates.endDate}
//           onDatesChange={({ startDate, endDate }) => {
//             setDates({ startDate, endDate })
//           }}
//           focusedInput={dates.focusedInput}
//           onFocusChange={(focusedInput) => {
//             setDates({ focusedInput })
//           }}
//         />
//       </div>
//       <div className="field">
//         <label className="label">Start date</label>
//         <div className="control">
//           <input className="input" type="date" />
//         </div>
//       </div>

//       <div className="field">
//         <label className="label">End date</label>
//         <div className="control">
//           <input className="input" type="date" />
//         </div>
//       </div>

//       <Select
//         isMulti
//         components={animatedComponents}
//         // is this not working? check!
//         closeMenuOnSelect={false}
//         options={options}
//       />

//       <div className="field">
//         <label className="label">Message</label>
//         <div className="control">
//           <textarea className="textarea" placeholder="Textarea"></textarea>
//         </div>
//       </div>

//       <div className="field is-grouped">
//         <div className="control">
//           <button className="button is-link">Submit</button>
//         </div>
//         <div className="control">
//           <button className="button is-link is-light">Cancel</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default AddTrip

// once below is changed to hooks delete above except for text input and submit button!

class AddTrip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    }
  }

  render() {
    return (
      <div className="App">
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        />
      </div>
    )
  }
}

export default AddTrip