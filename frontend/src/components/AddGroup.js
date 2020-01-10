import React from 'react'

const AddGroup = () => {

  // hooks here

  return (
    <>
    {/* INSERT IMAGE UPLOAD BIT HERE */}
      <div className="field">
        <label className="label">Description</label>
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

export default AddGroup