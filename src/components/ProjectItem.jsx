import styles from './ProjectItem.module.css';

const ProjectItem = ({ project: { name, summary, tech, link, picture } }) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={picture} alt={name} />
      <div>
        <a
          className={styles.name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name.toLowerCase()}
        </a>
        <p className={styles.summary}>{summary.toLowerCase()}</p>
        <p className={styles.tech}>{tech.join(', ').toLowerCase()}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
