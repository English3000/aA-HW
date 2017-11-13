import React from 'react';
import ReactDOM from 'react-dom';
import WidgetsApp from './widgets_app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<WidgetsApp />, document.getElementById('app-display'));
});
