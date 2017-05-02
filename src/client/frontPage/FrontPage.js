import React from 'react';
import axios from 'axios';

const FrontPage = () => { 
  async function getPost() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response);
  }
  getPost();
  return (
        <div>
          Front Page
        </div>
  );
};

export default FrontPage;
