import React from 'react';

const ExperienceItem = ({
  experience: { company, role, start, end, summary, tech },
}) => {
  return (
    <div>
      <h3>{company.toLowerCase()}</h3>
      <p>
        {role.toLowerCase()} ({start.toLowerCase()} - {end.toLowerCase()})
      </p>
      <p>{summary.toLowerCase()}</p>
      <p>technologies used: {tech.join(', ').toLowerCase()}</p>
    </div>
  );
};

export default ExperienceItem;
