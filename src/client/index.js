import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import FrontPage from './frontPage/FrontPage';

const App = () => {
  return (
    <div>
      <FrontPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
