import experiences from '../data/experience.json';
import ExperienceItem from '../components/ExperienceItem';

const Experience = () => {
  return (
    <div>
      <h2
        style={{
          textDecoration: 'underline',
          textDecorationColor: 'var(--underline)',
          textUnderlineOffset: '4px',
          textDecorationThickness: '3px',
        }}
      >
        experience
      </h2>

      <p style={{ padding: '5px 0' }}>
        all of the professional software engineering work i've done so far!
      </p>

      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.company}
          experience={experience}
          isExperience
        />
      ))}
    </div>
  );
};

export default Experience;
