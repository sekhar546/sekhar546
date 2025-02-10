import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
`;

const Institution = styled.h3`
  color: #444;
`;

const Degree = styled.h4`
  color: #555;
`;

const Dates = styled.p`
  color: #666;
`;

function Education() {
  return (
    <EducationContainer>
      <Title>Education</Title>
      <Institution>Jawaharlal Nehru Technological University</Institution>
      <Degree>Bachelor of Technology in Computer Science and Engineering</Degree>
      <Dates>August 2006 - May 2010</Dates>
    </EducationContainer>
  );
}

export default Education;
