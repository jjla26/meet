import React, { useState } from 'react'

function NumberOfEvents(props) {
  const  [ numberOfEvents, setNumberOfEvents ] = useState(props.numberOfEvents)

  const handleChange = (e) => {
    setNumberOfEvents(e.target.value)
    props.updateNumberOfEvents(e.target.value)
  }

  return (
    <div className="NumberOfEvents">
      <input
        type="number"
        className="numberOfEvents"
        value={numberOfEvents}
        onChange={handleChange}
      />
    </div>
  )
}

export default NumberOfEvents

