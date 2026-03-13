import { Link } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">home</Link>
      <Link to="/experience">experience</Link>
      <Link to="/projects">projects</Link>
    </nav>
  );
};

export default Nav;
