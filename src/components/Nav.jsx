import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <p>home</p>
      </Link>
      <Link to="/experience">
        <p>experience</p>
      </Link>
      <Link to="/projects">
        <p>projects</p>
      </Link>
    </div>
  );
};

export default Nav;
