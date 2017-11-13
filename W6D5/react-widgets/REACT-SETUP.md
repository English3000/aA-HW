**SETUP**
(0) Create Project folder.

(1a) Run `npm init --yes`
(1b) Run `npm install --save webpack react react-dom babel-core babel-loader babel-preset-es2015 babel-preset-react`

(2a) Create `webpack.config.js` file: https://github.com/appacademy/curriculum/blob/master/react/readings/webpack_configuration.md#sample-webpackconfigjs
(2b) Create `/frontend` folder,
            `render.jsx` file (or `entry.jsx`),
            `index.html` file.
# ./frontend/render.jsx
`document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<MyApp />, document.getElementById('app-display'));
});`
(2c) Put <script> tag in `index.html` head.

(3a) Add `"webpack": "webpack --watch"` to `package.json`
(3b) Create `.gitignore` file:
    https://github.com/appacademy/curriculum/blob/master/react/readings/webpack_configuration.md#gitignore

(4a) Run `npm run webpack`
(4b) Open `index.html` to confirm setup success!

(5a) Create `/css` folder,
            `reset.css` file--
    https://github.com/appacademy/curriculum/blob/master/html-css/micro-projects/css-friends/css-friends-00/solution/css/00-reset.css
      --and `index.css` file.
(5b) Put <link> tags in `index.html`

(6a) Create parent (`app.jsx`) &
          children `{component}.jsx` files in `/frontend` folder.
(6b) Skeleton each component.
# ./frontend/my_app.jsx
`import React from 'react';
import Child1 from './child1';`

`export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Child1 props />
      </div>
    );
  }
  changeState() {
    this.setState({attr: new Value()});
  }
}`
*OR as Functional Component*
`export default const MyApp = () => (
  <div>
    <Child1 props />
  </div>
);`
(6c) Style each component's <div> (`.{component}-div`) & elements in `index.css`
(6d) Code away!
