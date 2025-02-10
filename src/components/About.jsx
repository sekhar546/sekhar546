import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
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
  text-align: justify;
`;

function About() {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Description>
        Lead Data Engineer with 13+ years of expertise in architecting and delivering high-impact data solutions for complex business challenges. Proven ability to lead cross-functional teams in designing and implementing scalable data pipelines, optimizing cloud infrastructure, and driving data-driven decision-making. Adept at leveraging cutting-edge technologies such as AWS, Hadoop, PySpark, SnowFlake, Databricks, and Git to deliver robust, cost-effective, and high-performance data ecosystems. Recognized for reducing operational costs by $50K/month, improving system reliability, and enabling business growth through innovative data strategies. Currently expanding expertise in AI/ML concepts to drive predictive analytics and intelligent automation. A strategic thinker with strong leadership, Agile, and DevOps practices, committed to transforming raw data into actionable insights.
      </Description>
    </AboutContainer>
  );
}

export default About;
