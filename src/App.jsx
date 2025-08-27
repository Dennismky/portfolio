import { useState } from 'react'
import './App.css'

import githubLogo from "./assets/github.png"
import linkedinLogo from "./assets/linkedin.png"
import twitterLogo from "./assets/twitter.png"
import gmailLogo from "./assets/gmail.png"
import phoneLogo from "./assets/phone.png"
import profileImage from "./assets/image.jpeg"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="portfolio">

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span>Dennis Kyalo</span>
          </div>
          <div className="links desktop-links">
            {['Home', 'About', 'Skills', 'Services', 'Projects'].map((item) => (
              <div key={item} className="link">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </div>
            ))}
            <div className="link contact-btn">
              <a href="#contact">Contact</a>
            </div>
          </div>
          <i 
            className="fa-solid fa-bars hamburg" 
            onClick={toggleMenu}
          ></i>
        </div>
        <div className={`dropdown ${isMenuOpen ? 'open' : ''}`}>
          <div className="links">
            {['Home', 'About', 'Skills', 'Services', 'Projects', 'Blogs', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <i 
              className="fa-solid fa-xmark cancel" 
              onClick={() => setIsMenuOpen(false)}
            ></i>
          </div>
        </div>
      </nav>

      <section id="home" className="main-section">
        <div className="main-container">
          <div className="image">
            <img src={profileImage} alt="Dennis Kyalo" />
          </div>
          <div className="content">
            <h1>Hey I'm <span>Dennis</span></h1>
            <p>
              A passionate frontend developer with strong backend knowledge. 
              I focus on creating clean user interfaces, smooth user experiences, 
              and functional applications. I have a good eye for colors, debugging, 
              and I work well with others.
            </p>
            <div className="social-links">
              <a href="https://github.com/Dennismky" target="_blank" rel="noreferrer">
                <img src={githubLogo} alt="GitHub" style={{ width: "30px" }} />
              </a>
              <a href="https://www.linkedin.com/in/dennis-kyalo-69216b241/" target="_blank" rel="noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" style={{ width: "30px" }} />
              </a>
              <a href="mailto:kyalodennis1738@gmail.com">
                <img src={gmailLogo} alt="Email" style={{ width: "30px" }} />
              </a>
              <a href="https://x.com/kdennis1738" target="_blank" rel="noreferrer">
                <img src={twitterLogo} alt="Twitter / X" style={{ width: "30px" }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-container">
          <h2>About Me</h2>
          <p>
            I am <span className="highlight">Dennis Kyalo</span>, a frontend developer with backend knowledge.  
            I specialize in clean, responsive, and user-friendly interfaces.  
            Skilled at interactive maps, color schemes, debugging, and collaboration.  
            I possess strong <span className="highlight">emotional intelligence</span>, allowing me to communicate effectively, work well in teams, and resolve conflicts constructively.  
            Adaptable and proactive, I continuously learn new technologies and best practices to deliver innovative solutions.  
            I thrive on solving complex problems, improving user experiences, and creating interfaces that are both visually appealing and highly functional.
          </p>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <p>
          HTML, CSS, Tailwind, React, JavaScript, SQL, Python, Node.js, Flask, REST APIs, Git/GitHub, CI/CD workflows, JWT authentication, custom error handling, environment configuration, user role management, route protection, data pagination, UI/UX design, responsive layouts, accessibility, debugging, problem-solving, teamwork, and effective communication.
        </p>
      </section>

      <section id="services" className="services-section">
        <h2>Services</h2>
        <p>
          I build <span className="highlight">responsive websites and web applications</span> with modern frontend frameworks.  
          I create <span className="highlight">interactive and user-friendly interfaces</span>, implement maps, charts, and data visualizations, and optimize user experience through thoughtful UI/UX design.  
          On the backend, I provide <span className="highlight">secure route handling, JWT authentication, custom error management, API integration, and efficient database solutions</span>.  
          I also offer <span className="highlight">project planning, version control management, team collaboration, and CI/CD workflow support</span> to ensure smooth and scalable development.
        </p>
      </section>

      <section id="projects" className="projects-section">
  <h2>Projects</h2>
  <div className="project-list">

    <div className="project-item">
      <h3>Jiseti</h3>
      <p>A full-stack corruption-reporting platform with user/admin roles, JWT authentication, and media upload functionality.</p>
      <p>Tech Stack: React, Tailwind CSS, Flask, PostgreSQL, JWT, Render, Netlify</p>
      <p>
        <a href="https://github.com/Dennismky/jiseti" target="_blank" rel="noreferrer">View the GitHub Repository</a> |  
        <a href="https://jiseti.netlify.app/" target="_blank" rel="noreferrer">Visit the Frontend App</a> |  
        <a href="https://jiseti-backend-4jth.onrender.com" target="_blank" rel="noreferrer">Check the Backend API</a>
      </p>
    </div>

    <div className="project-item">
      <h3>Fit App</h3>
      <p>A gym member management application with CRUD operations, search, and filters.</p>
      <p>Tech Stack: React, Tailwind CSS, Flask, SQLAlchemy</p>
      <p>
        <a href="https://github.com/Dennismky/fit-up.git" target="_blank" rel="noreferrer">View the GitHub Repository</a>
        <a href="https://euphonious-cascaron-9220f3.netlify.app/" target="_blank" rel="noreferrer">Visit the Frontend App</a> |
      </p>
    </div>

    

  </div>
</section>



      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="social-links">
          <a href="mailto:kyalodennis1738@gmail.com">
            <img src={gmailLogo} alt="Email" style={{ width: "30px" }} />
          </a>
          <a href="https://x.com/kdennis1738" target="_blank" rel="noreferrer">
            <img src={twitterLogo} alt="Twitter / X" style={{ width: "30px" }} />
          </a>
          <a href="https://github.com/Dennismky" target="_blank" rel="noreferrer">
            <img src={githubLogo} alt="GitHub" style={{ width: "30px" }} />
          </a>
          <a href="https://www.linkedin.com/in/dennis-kyalo-69216b241/" target="_blank" rel="noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" style={{ width: "30px" }} />
          </a>
          <div className="phone-contact">
            <img src={phoneLogo} alt="Phone" style={{ width: "30px", marginRight: "8px" }} />
            <span>+254746906609</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
