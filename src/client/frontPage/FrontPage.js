import React from 'react';
import axios from 'axios';

const FrontPage = () => {   
  async function asyncGetHospitals() {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
    console.log('Async Response: ', response);
  }
  function getHospitals() {
    const response = axios.get('http://jsonplaceholder.typicode.com/posts');
    console.log('Regular Function Response: ', response);
  }
  function promiseGetHospitals() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then((response) => 
      console.log('Promise Response: ', response)
    );
  }
  function callAllFunctions() {
    getHospitals();
    promiseGetHospitals();
    asyncGetHospitals();
  }
  return (
      <div>
          <a onClick={callAllFunctions}>Click me!</a>
      </div>
  );
};

export default FrontPage;
