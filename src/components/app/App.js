import React from 'react';
import EventList from '../event-list/EventList'
import CitySearch from '../citysearch/CitySearch'
import NumberOfEvents from '../NumberOfEvents/NumberOfEvents'
import Footer from '../footer/footer'
import { extractLocations, getEvents, filterList } from '../../api/api';
import "../../nprogress.css"

class App extends React.Component {
  state={
    events: [],
    locations: [],
    numberOfEvents: 32,
    filteredList: []
  }

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        filteredList: filterList(locationEvents, eventCount)
      });
    });
  }

  updateNumberOfEvents = (number) => {
    this.setState({
      numberOfEvents: number,
      filteredList: filterList(this.state.events, number)
    })
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events, locations: extractLocations(events), filteredList: filterList( events, this.state.numberOfEvents) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render(){
    return (
      <>
        <div className="App">
          <h1>Meet App</h1>
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
          <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents}/>  
          <EventList events={this.state.filteredList} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
