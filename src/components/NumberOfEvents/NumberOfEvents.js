import React, { useState } from 'react'

import { ErrorAlert } from '../alert/Alert'

function NumberOfEvents(props) {
  const [ numberOfEvents, setNumberOfEvents ] = useState(props.numberOfEvents)
  const [ error, setError ] = useState('')

  const handleChange = (e) => {
    if(e.target.value >= 1 && e.target.value <= 32){
      setNumberOfEvents(e.target.value)
      props.updateNumberOfEvents(e.target.value)
      setError('')
    }else{
      setNumberOfEvents(e.target.value)
      props.updateNumberOfEvents('')
      setError('Select a number from 1 to 32')
    }
  }

  return (
    <div className="NumberOfEvents">
      <ErrorAlert text={error} />
      <label>Nº. of events</label>
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

