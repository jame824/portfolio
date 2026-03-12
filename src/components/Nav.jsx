import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to={{ pathname: '/' }}>
        <p>home</p>
      </Link>
      <Link to={{ pathname: '/experience' }}>
        <p>experience</p>
      </Link>
      <Link to={{ pathname: '/projects' }}>
        <p>projects</p>
      </Link>
    </div>
  );
};

export default Nav;
