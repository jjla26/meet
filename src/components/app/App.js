import React, { useState } from 'react';
import EventList from '../event-list/EventList'
import CitySearch from '../citysearch/CitySearch'
import NumberOfEvents from '../NumberOfEvents/NumberOfEvents'

function App() {
  const [ numberOfEvents, setNumberOfEvents ] = useState(32)
  return (
    <div className="App">
      <EventList />
      <CitySearch />
      <NumberOfEvents value={numberOfEvents} setValue={setNumberOfEvents}/>
    </div>
  );
}

export default App;
