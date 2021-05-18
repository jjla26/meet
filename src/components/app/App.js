import React from 'react';
import EventList from '../event-list/EventList'
import CitySearch from '../citysearch/CitySearch'
import NumberOfEvents from '../NumberOfEvents/NumberOfEvents'

function App() {
  return (
    <div className="App">
      <EventList />
      <CitySearch />
      <NumberOfEvents />
    </div>
  );
}

export default App;
