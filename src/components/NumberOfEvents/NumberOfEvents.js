import React from 'react'

function NumberOfEvents(props) {
  const { value, setValue } = props

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="NumberOfEvents">
      <input
        type="number"
        className="numberOfEvents"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default NumberOfEvents

