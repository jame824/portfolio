import { Link } from 'react-router-dom';
import experiences from '../data/experience.json';
import projects from '../data/projects.json';
import ExperienceItem from '../components/ExperienceItem';
import ProjectItem from '../components/ProjectItem';

const Home = () => {
  return (
    <div>
      <div>
        <h2
          style={{
            textDecoration: 'underline',
            textDecorationColor: 'var(--underline)',
            textUnderlineOffset: '4px',
            textDecorationThickness: '3px',
          }}
        >
          james fu
        </h2>

        <p style={{ padding: '5px 0' }}>
          uc davis, b.s. computer science, graduating june 2026
        </p>

        <p style={{ color: 'var(--text-muted)' }}>
          <em>consistent learner.</em> here are some things i'm currently
          learning: node.js, hip hop dance foundations, and how to cook a mean
          steak. you'll probably catch me dancing, reading, cooking, or baking
          for friends!
        </p>
      </div>

      <div className="section">
        <h3 className="section-header">experience</h3>
        {experiences.slice(0, 3).map((experience) => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
        <Link className="section-link" to="/experience">
          all experience →
        </Link>
      </div>

      <div className="section">
        <h3 className="section-header">projects</h3>
        {projects.slice(0, 2).map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
        <Link className="section-link" to="/projects">
          all projects →
        </Link>
      </div>
    </div>
  );
};

export default Home;
