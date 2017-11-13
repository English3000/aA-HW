import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.handle = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      <div>
        <h1>Clock</h1>
        <section className="clock-div">
          <p>
            <span>Time:</span> <span>{hours}:{minutes}:{seconds} PDT</span>
          </p>
          <br />
          <p><span>Date:</span> <span>{this.state.time.toDateString()}</span></p>
        </section>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }
}
