import React from 'react';

const ExperienceItem = ({ project: { name, summary, tech, link } }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name.toLowerCase()}
      </a>
      <p>{summary.toLowerCase()}</p>
      <p>technologies used: {tech.join(', ').toLowerCase()}</p>
    </div>
  );
};

export default ExperienceItem;
