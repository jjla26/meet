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
        <h2 className="event__summary"></h2>
        <h4 className="event__location"></h4>
        <button className="event__button" onClick={this.handleClick}>See events details</button>
        <ul className={`event__details ${this.state.show ? 'show__details': ''}`}>
          <li className="event__description"></li>
          <li className="event__organizer"></li>
          <li className="event__start"></li>
          <li className="event__end"></li>
        </ul>

      </div>
    );
  }
}
export default Event;