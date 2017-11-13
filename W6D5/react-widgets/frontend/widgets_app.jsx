import React from 'react';
import Clock from './clock';

export default class WidgetsApp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app-div">
        <Clock />

      </div>
    );
  }
}
