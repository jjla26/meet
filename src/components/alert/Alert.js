import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#bbe1fa';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'yellow';
    this.getStyle = () => {
      return {
        position: 'fixed',
        top: '20px',
        left: '20px',
        color: this.color
      }
    }
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color= 'red'
    this.getStyle = () => {
      return {
        position: 'absolute',
        top: '150px',
        right: '0px',
        width: '200px',
        color: this.color
      }
    }
  }
}

export { InfoAlert, ErrorAlert, WarningAlert }