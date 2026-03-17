import React from 'react';
import projects from '../data/projects.json';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
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
        projects
      </h2>

      <p style={{ padding: '5px 0' }}>
        some of the projects i'm most proud of. i love creating for a purpose
        while learning new means to do so along the way.
      </p>

      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} isProject />
      ))}
    </div>
  );
};

export default Projects;
