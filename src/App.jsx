import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

const AppContainer = styled.div`
  font-family: 'Arial, sans-serif';
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Header = styled.header`
  background: #333;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
`;

const Nav = styled.nav`
  background: #444;
  color: #fff;
  padding: 0.5rem 0;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;

  &:hover {
    background: #555;
  }
`;

const Main = styled.main`
  padding: 20px;
`;

const Footer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 20px;
  a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <h1>Raja Sekhar Reddy Gajjala</h1>
          <p>Technology Leader - Data Engineering</p>
        </Header>
        <Nav>
          <NavList>
            <NavItem><StyledLink to="/">About</StyledLink></NavItem>
            <NavItem><StyledLink to="/skills">Skills</StyledLink></NavItem>
            <NavItem><StyledLink to="/experience">Experience</StyledLink></NavItem>
            <NavItem><StyledLink to="/education">Education</StyledLink></NavItem>
            <NavItem><StyledLink to="/projects">Projects</StyledLink></NavItem>
          </NavList>
        </Nav>
        <Main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
             <Route path="/projects" element={<Projects />} />
          </Routes>
        </Main>
        <Footer>
          <ContactInfo>
            <a href="tel:+14373229719"><FontAwesomeIcon icon={faPhone} /> +1 (437) 322 - 9719</a>
            <a href="mailto:shekhar.rj@outlook.com"><FontAwesomeIcon icon={faEnvelope} /> shekhar.rj@outlook.com</a>
            <a href="https://www.linkedin.com/in/sekhar546/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a href="https://github.com/sekhar546" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
            <a href="https://calendly.com/sekhar546/30min" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCalendarAlt} /> Schedule a Chat</a>
          </ContactInfo>
        </Footer>
      </AppContainer>
    </Router>
  );
}

export default App;
