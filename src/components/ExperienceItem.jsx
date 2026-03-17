import styles from './ExperienceItem.module.css';

const ExperienceItem = ({
  experience: { company, role, start, end, summary, tech, logo, bullets, link },
  isExperience = false,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        {logo && <img className={styles.logo} src={logo} alt={company} />}
        <div>
          <div className={styles.titleRow}>
            <p className={styles.companyRole}>
              <span className={styles.company}>{company.toLowerCase()}</span>,{' '}
              {role.toLowerCase()}
            </p>
            <p className={styles.date}>
              {start.toLowerCase()} - {end.toLowerCase()}
            </p>
          </div>
          {isExperience ? (
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
    </div>
  );
};

export default ExperienceItem;
