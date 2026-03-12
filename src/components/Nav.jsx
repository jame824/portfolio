import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <p>home</p>
      </Link>
      <Link to="/experience">
        <p>experience</p>
      </Link>
      <Link to="/projects">
        <p>projects</p>
      </Link>
    </nav>
  );
};

export default Nav;
