import React from 'react';
import EventList from '../event-list/EventList'
import CitySearch from '../citysearch/CitySearch'
import NumberOfEvents from '../NumberOfEvents/NumberOfEvents'
import Footer from '../footer/footer'
import { extractLocations, getEvents, filterList } from '../../api/api';
import "../../nprogress.css"
import { WarningAlert } from '../alert/Alert';

class App extends React.Component {
  state={
    events: [],
    locations: [],
    numberOfEvents: 32,
    filteredList: [],
    offline: false,
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return {city, number};
    })
    return data;
  };

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        filteredList: filterList(locationEvents, eventCount),
        offline: navigator.onLine ? false : true
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
        this.setState({ 
          events: events, 
          locations: extractLocations(events), 
          filteredList: filterList( events, this.state.numberOfEvents) ,
          offline: navigator.onLine ? false : true
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
    window.removeEventListener('offline')
  }

  render(){
    return (
      <>
        <div className="App">
          {this.state.offline && <WarningAlert text="You are offline! The shown events have been loaded from the cache" />}
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
