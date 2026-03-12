import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to={{ pathname: '/' }}>
        <p>Home</p>
      </Link>
      <Link to={{ pathname: '/experience' }}>
        <p>Experience</p>
      </Link>
      <Link to={{ pathname: '/projects' }}>
        <p>Projects</p>
      </Link>
    </div>
  );
};

export default Nav;
