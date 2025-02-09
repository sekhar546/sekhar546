import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Raja Sekhar Reddy Gajjala</h1>
      <h2>Lead Data Engineer</h2>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sekhar546/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/sekhar546" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
      <p className="contact-info">
        <strong>Phone:</strong> +1 (437) 322 - 9719 |
        <strong>Email:</strong> <a href="mailto:shekhar.rj@outlook.com">shekhar.rj@outlook.com</a>, <a href="mailto:shekhar.rj@gmail.com">shekhar.rj@gmail.com</a>
      </p>
      <h2>About Me</h2>
      <p>
        Lead Data Engineer with 13+ years of expertise in architecting and delivering high-impact data solutions for complex business challenges. Proven ability to lead cross-functional teams in designing and implementing scalable data pipelines, optimizing cloud infrastructure, and driving data-driven decision-making. Adept at leveraging cutting-edge technologies such as AWS, Hadoop, PySpark, SnowFlake, and Databricks to deliver robust, cost-effective, and high-performance data ecosystems. Recognized for reducing operational costs by $50K/month, improving system reliability, and enabling business growth through innovative data strategies. Currently expanding expertise in AI/ML concepts to drive predictive analytics and intelligent automation. A strategic thinker with strong leadership, Agile, and DevOps practices, committed to transforming raw data into actionable insights.
      </p>
    </div>
  );
}

export default Home;
