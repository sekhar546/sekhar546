import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  color: #666;
  padding: 8px 0;
`;

function Skills() {
  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <SkillsList>
        <SkillItem>SQL</SkillItem>
        <SkillItem>Python - PySpark</SkillItem>
        <SkillItem>AWS (EMR, EC2, Glue, Lambda, Stepfunctions, SNS, S3, Redshift, Athena)</SkillItem>
        <SkillItem>Hadoop (HDFS, Hive)</SkillItem>
        <SkillItem>Talend ETL Tool</SkillItem>
        <SkillItem>Tableau</SkillItem>
        <SkillItem>Power BI</SkillItem>
        <SkillItem>SAP Crystal Reports</SkillItem>
        <SkillItem>Git</SkillItem>
        <SkillItem>Agile Methodologies</SkillItem>
      </SkillsList>
    </SkillsContainer>
  );
}

export default Skills;
