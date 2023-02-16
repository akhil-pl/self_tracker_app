import React from 'react'

function CreateTracker() {
  return (
    <div>
        <h2>New Tracker</h2>
        <h4>*Not implemented yet</h4>
            <form>
                <label>
                    Tracker Name:
                    <input required type="text"/>
                </label>
                <label>
                    Discription:
                    <input required type="text" />
                </label>
                <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

export default CreateTracker