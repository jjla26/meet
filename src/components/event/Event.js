import React, { Component } from "react";

class Event extends Component {
  state = {
    show: false
  }

  handleClick = () => {
    this.setState( (prevState, props) => ({ show: !prevState.show}))
  }

  render() {
    return (
      <div className="event">
        <h2 className="event__summary">{this.props.event.summary}</h2>
        <p className="event__date">{`${new Date(this.props.event.start.dateTime)}`}</p>
        <h4 className="event__location">{this.props.event.location}</h4>
        <button className="event__button" onClick={this.handleClick}>See events details</button>
        <ul className={`event__details ${this.state.show ? '': 'display-none'}`}>
          <li className="event__description">Description: {this.props.event.description}</li>
          <li className="event__organizer">Organizer: {this.props.event.organizer.email}</li>
          <li className="event__start">Start: {`${new Date(this.props.event.start.dateTime)} - ${this.props.event.start.timeZone}`}</li>
          <li className="event__end">End: {`${new Date(this.props.event.end.dateTime)} - ${this.props.event.start.timeZone}`}</li>
        </ul>

      </div>
    );
  }
}
export default Event;