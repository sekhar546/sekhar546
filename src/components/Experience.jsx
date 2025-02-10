import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
`;

const JobTitle = styled.h3`
  color: #444;
`;

const Company = styled.h4`
  color: #555;
`;

const Dates = styled.p`
  color: #666;
`;

const Description = styled.ul`
  color: #666;
  line-height: 1.6;
`;

const ExperienceItem = styled.li`
  padding: 8px 0;
`;

function Experience() {
  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      <JobTitle>Technology Leader</JobTitle>
      <Company>ValueMomentum</Company>
      <Dates>November 2020 - June 2024</Dates>
      <Description>
        <ExperienceItem>Architected and implemented a fully automated data pipeline integrating upstream and downstream systems (SnowFlake) using AWS Lambda, PySpark, and EMR, eliminating manual interventions and improving operational efficiency by 40%.</ExperienceItem>
        <ExperienceItem>Pioneered cost optimization strategies by leveraging spot instances, graviton processors, and managed scaling, resulting in monthly savings of $50K while maintaining high system performance.</ExperienceItem>
        <ExperienceItem>Revolutionized Spark processing efficiency by optimizing driver memory configurations in EMR clusters, reducing job failure rates to an industry-leading 0.05% and ensuring seamless data processing.</ExperienceItem>
        <ExperienceItem>Re-engineered the ETL architecture within the Hadoop ecosystem, achieving significant improvements in performance through advanced time and space complexity optimizations.</ExperienceItem>
        <ExperienceItem>Transformed commission payout dashboards for insurance agents, enabling real-time review of omissions and target planning, which directly contributed to a 15% increase in customer business revenue.</ExperienceItem>
        <ExperienceItem>Spearheaded the onboarding and upskilling of new team members, providing hands-on training in AWS, PySpark, SnowFlake, and Hadoop, enabling them to contribute to high-impact projects within weeks.</ExperienceItem>
        <ExperienceItem>Mentored junior engineers in best practices for ETL pipeline development, cloud cost optimization, and Agile methodologies, fostering a culture of continuous learning and innovation.</ExperienceItem>
        <ExperienceItem>Developed and delivered customized training programs on Spark memory optimization, AWS Glue, and Talend ETL, equipping the team with advanced skills to tackle complex data engineering challenges.</ExperienceItem>
        <ExperienceItem>Championed knowledge-sharing initiatives by conducting workshops on data architecture design and performance tuning, resulting in a 30% improvement in team productivity.</ExperienceItem>
        <ExperienceItem>Built a collaborative learning environment by guiding team members through real-world use cases, enabling them to master Lambda functions, EMR clusters, and SnowFlake integrations.</ExperienceItem>
        <ExperienceItem>Led code version control initiatives by managing the team’s codebase in GitLab, implementing a streamlined branching strategy to reduce merge conflicts and save significant time for the DevOps team.</ExperienceItem>
        <ExperienceItem>Introduced and mentored the team on using graphical tools for version control (e.g., VSCode with Git extensions), establishing it as a standard practice and improving team efficiency.</ExperienceItem>
        <ExperienceItem>Reviewed and approved merge requests for code developed by the team, ensuring high-quality deliverables and adherence to best practices in version control.</ExperienceItem>
      </Description>

      <JobTitle>Senior Software Engineer</JobTitle>
      <Company>Diligent Global Tech</Company>
      <Dates>February 2020 - November 2020</Dates>
      <Description>
        <ExperienceItem>Spearheaded the migration of legacy SSIS ETL pipelines to Talend Enterprise, modernizing data workflows and improving processing efficiency by 25%.</ExperienceItem>
        <ExperienceItem>Designed and developed end-to-end ETL pipelines in Talend, integrating flat file data sources (e.g., manufacturing beverage containers, retail sales) with Snowflake Data Warehouse, ensuring seamless data flow and accuracy.</ExperienceItem>
        <ExperienceItem>Independently managed the entire ETL lifecycle, from pipeline creation to deployment on Talend Administration Center (TAC), orchestration, and post-deployment support, ensuring 100% uptime during the warranty period.</ExperienceItem>
        <ExperienceItem>Optimized data ingestion and transformation processes, reducing pipeline execution time by 30% and enabling faster insights for business stakeholders.</ExperienceItem>
        <ExperienceItem>Provided end-to-end support for ETL pipelines, including troubleshooting, performance tuning, and resolving production issues, ensuring uninterrupted data delivery for critical business operations.</ExperienceItem>
        <ExperienceItem>Collaborated with cross-functional teams to understand data requirements, translating complex business needs into scalable and efficient ETL solutions.</ExperienceItem>
        <ExperienceItem>Established best practices for Talend ETL development, including reusable components, error handling, and logging, which improved maintainability and reduced future development efforts by 20%.</ExperienceItem>
        <ExperienceItem>Delivered two high-impact projects within tight deadlines, showcasing the ability to work independently and deliver results in a fast-paced startup environment.</ExperienceItem>
      </Description>

      <JobTitle>Senior Software Engineer</JobTitle>
      <Company>Optum Global Solutions</Company>
      <Dates>March 2011 - January 2020</Dates>
      <Description>
        <ExperienceItem>Pioneered the development of business-critical reports using SAP Crystal Reports, delivering actionable insights for Medicaid and Medicare data across 25 U.S. states, enabling data-driven decision-making for healthcare plans.</ExperienceItem>
        <ExperienceItem>Introduced and implemented Worksheet XML reports to address complex multi-spreadsheet reporting requirements, streamlining reporting processes and reducing manual effort by 40%.</ExperienceItem>
        <ExperienceItem>Spearheaded the adoption of Power BI for data analytics, conducting a successful proof-of-concept (POC) that identified trends in healthcare plans and enhanced strategic planning capabilities.</ExperienceItem>
        <ExperienceItem>Delivered high-stakes reports under tight deadlines, ensuring zero penalties (saving $100K per report) and maintaining 100% on-time delivery for mission-critical projects.</ExperienceItem>
        <ExperienceItem>Revolutionized data integration processes by introducing Talend ETL to the team, enabling seamless data aggregation from multiple sources and automating the generation of pre-filled template-based spreadsheets.</ExperienceItem>
        <ExperienceItem>Designed and implemented complex data pipelines to consolidate data from healthcare data marts (e.g., claims, members, providers), facilitating the creation of new healthcare products and improving business agility.</ExperienceItem>
        <ExperienceItem>Deployed onshore in the U.S. for two years, collaborating directly with clients to deliver clinical data reporting projects, ensuring alignment with business needs and fostering strong client relationships.</ExperienceItem>
        <ExperienceItem>Mentored and trained newcomers on SAP Crystal Reports, Power BI, and Talend ETL, fostering a culture of knowledge-sharing and skill development within the team.</ExperienceItem>
        <ExperienceItem>Optimized reporting workflows by automating data extraction, transformation, and loading (ETL) processes, reducing report generation time by 30% and improving data accuracy.</ExperienceItem>
        <ExperienceItem>Played a key role in strategic initiatives by providing data-driven insights that supported the launch of new healthcare products, contributing to the company’s growth and competitive edge.</ExperienceItem>
      </Description>
    </ExperienceContainer>
  );
}

export default Experience;
