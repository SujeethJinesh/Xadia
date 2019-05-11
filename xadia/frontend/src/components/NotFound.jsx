import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
  <div>
    <h2>Not Found</h2>
    <p>The page you're looking for does not exists.</p>
    <Link to="/">Return home</Link>
  </div>
  )
}

export default NotFound;