import React from 'react';
import EventList from '../event-list/EventList'
import CitySearch from '../citysearch/CitySearch'
import NumberOfEvents from '../NumberOfEvents/NumberOfEvents'
import { mockData } from '../../mock-data/mock-data'

function App() {
  return (
    <div className="App">
      <EventList events={mockData} />
      <CitySearch />
      <NumberOfEvents />
    </div>
  );
}

export default App;
