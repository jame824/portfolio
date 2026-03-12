import React from 'react';
import { Link } from 'react-router-dom';
import experiences from '../data/experience.json';

const Home = () => {
  return (
    <div>
      <div>
        <h2>james fu</h2>

        <p>uc davis, b.s. computer science, graduating 2026</p>

        <p>
          consistent learner. here are some things i'm currently learning:
          node.js, hip hop dance foundations, and how to cook a mean steak.
          you'll probably catch me dancing, reading, cooking, or baking for
          friends!
        </p>
      </div>

      <div>
        <h3>experience</h3>
        <Link to="/experience">
          <p>all experience</p>
        </Link>
      </div>

      <div>
        <h3>projects</h3>
        {experiences.slice(0, 3).map((experience) => (
          <div key={experience.company}>
            <h3>{experience.company.toLowerCase()}</h3>
            <p>
              {experience.role.toLowerCase()} ({experience.start.toLowerCase()}{' '}
              - {experience.end.toLowerCase()})
            </p>
            <p>{experience.summary.toLowerCase()}</p>
            <p>technologies used: {experience.tech.join(', ').toLowerCase()}</p>
          </div>
        ))}
        <Link to="/projects">
          <p>all projects</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
