import styles from './ExperienceItem.module.css';

const ExperienceItem = ({
  experience: { company, role, start, end, summary, tech, logo },
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        {logo && <img className={styles.logo} src={logo} alt={company} />}
        <div>
          <h3 className={styles.company}>{company.toLowerCase()}</h3>
          <p className={styles.role}>
            {role.toLowerCase()} ({start.toLowerCase()} - {end.toLowerCase()})
          </p>
          <p className={styles.summary}>{summary.toLowerCase()}</p>
          <p className={styles.tech}>{tech.join(', ').toLowerCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
