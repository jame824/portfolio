import styles from './ProjectItem.module.css';

const ProjectItem = ({
  project: { name, summary, tech, link, picture, bullets },
  isProject = false,
}) => {
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
        {isProject ? (
          <div className={styles.summary}>
            <ul className={styles.bullets}>
              {bullets.map((b) => (
                <li key={b}>{b.toLowerCase()}</li>
              ))}
            </ul>
            {link && (
              <p className={styles.link}>
                relevant links:{' '}
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </p>
            )}
          </div>
        ) : (
          <p className={styles.summary}>{summary.toLowerCase()}</p>
        )}
        <p className={styles.tech}>{tech.join(', ').toLowerCase()}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
