import React, { useState } from 'react'

function NumberOfEvents() {
  const  [ numberOfEvents, setNumberOfEvents ] = useState(32)

  const handleChange = (e) => {
    setNumberOfEvents(e.target.value)
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

