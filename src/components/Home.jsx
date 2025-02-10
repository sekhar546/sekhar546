import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome!</Title>
      <Description>
        I am Raja Sekhar Reddy Gajjala, a Lead Data Engineer with 13+ years of experience. This portfolio showcases my skills, experience, and projects in the field of data engineering.
      </Description>
    </HomeContainer>
  );
}

export default Home;
