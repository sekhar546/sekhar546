import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  color: #666;
  padding: 8px 0;
`;

function Projects() {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <ProjectList>
        <ProjectItem>AWS Data Pipeline Optimization</ProjectItem>
        <ProjectItem>Cloud Cost Optimization</ProjectItem>
        <ProjectItem>Modern ETL Architecture</ProjectItem>
      </ProjectList>
    </ProjectsContainer>
  );
}

export default Projects;
