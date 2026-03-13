import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="mailto:jajfu@ucdavis.edu">email</a>
      <a
        href="https://github.com/jame824"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
      <a
        href="https://www.linkedin.com/in/james-fu-74a16524b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin
      </a>
    </footer>
  );
};

export default Footer;
