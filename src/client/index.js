import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import FrontPage from './frontPage/FrontPage';
import store from './store';

const App = () => {
  return (
    <div>
      <FrontPage />
    </div>
  );
};

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById('root'));
