import React from 'react';

const ExperienceItem = ({ project: { name, summary, tech } }) => {
  return (
    <div>
      <h3>{name.toLowerCase()}</h3>
      <p>{summary.toLowerCase()}</p>
      <p>technologies used: {tech.join(', ').toLowerCase()}</p>
    </div>
  );
};

export default ExperienceItem;
