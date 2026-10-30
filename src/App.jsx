import Contacts from "./components/Contacts";

const skillGroups = [
  { icon: "💻", title: "Languages", items: ["C", "Java", "Python", "JavaScript"] },
  { icon: "🎨", title: "Frontend", items: ["HTML", "CSS", "React.js"] },
  { icon: "🛠️", title: "Tools", items: ["Azure DevOps", "Git", "GitHub"] },
  { icon: "🤖", title: "Libraries", items: ["OpenCV", "TensorFlow", "MediaPipe"] },
  { icon: "📚", title: "Core Subjects", items: ["DBMS", "Data Structures", "Operating Systems"] },
];

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">AK</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">Hi there! 👋</div>
            <h1>Anand Karna</h1>
            <div className="title">Computer Science Student &amp; Web Developer</div>
            <p className="tagline">
              Web Development Intern at Sithafal Technologies, building responsive
              web apps and AI-powered applications.
            </p>
            <a href="#projects" className="cta-button">View My Work</a>
          </div>
          <div className="hero-image">
            <div className="profile-photo">
              <div className="profile-photo-inner">👨‍💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <p className="bio">
            I'm a motivated Computer Science student with hands-on knowledge of Java, Python,
            React.js, JavaScript, HTML, CSS and Azure DevOps concepts. I'm interested in web
            application development, AI applications and software engineering, and I enjoy
            turning ideas into working, user-friendly software.
          </p>

          <div className="resume-highlights">
            {skillGroups.map((group) => (
              <div className="highlight-card glass-card" key={group.title}>
                <h3>{group.icon} {group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="about-container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Internship</div>
              <div className="timeline-content glass-card">
                <h3>Web Development Intern</h3>
                <p><strong>Sithafal Technologies, Tirupati</strong></p>
                <div className="highlight-card">
                  <ul>
                    <li>Developed responsive web pages using HTML, CSS, JavaScript and React.js</li>
                    <li>Worked on UI enhancements, bug fixing and testing activities</li>
                    <li>Used Azure DevOps for work item tracking and bug management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Leadership</div>
              <div className="timeline-content glass-card">
                <h3>Class Representative</h3>
                <p>
                  Coordinated communication between students and faculty and assisted
                  in academic activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Academic Project</h2>
        <div className="projects-grid">
          <div className="project-card glass-card">
            <h3>Desktop Assistant</h3>
            <p><em>Final Year Diploma Project</em></p>
            <p>An AI-based desktop assistant with emotion detection, virtual mouse and chatbot modules.</p>
            <div className="highlight-card">
              <ul>
                <li>Real-time facial emotion recognition</li>
                <li>Gesture-based cursor control (virtual mouse)</li>
                <li>GUI modules and mood history visualization built with Python libraries</li>
              </ul>
            </div>
            <div className="tech-stack">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">OpenCV</span>
              <span className="tech-tag">TensorFlow/Keras</span>
              <span className="tech-tag">MediaPipe</span>
              <span className="tech-tag">Tkinter</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="section-title">Education</h2>
        <div className="about-container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">B.Tech</div>
              <div className="timeline-content glass-card">
                <h3>B.Tech – Computer Science and Engineering (CSM)</h3>
                <p>G. Pulla Reddy Engineering College, Kurnool</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023 – 2026</div>
              <div className="timeline-content glass-card">
                <h3>Diploma in Computer Engineering</h3>
                <p>Sri Venkateswara Government Polytechnic, Tirupati — 75%</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022 – 2023</div>
              <div className="timeline-content glass-card">
                <h3>SSC</h3>
                <p>ZP(B) High School, Kothacheruvu — 64%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contacts />

      <footer>
        <div className="social-links">
          <a className="social-icon" href="mailto:anandkarna0905@gmail.com" title="Email" aria-label="Email">✉️</a>
          <a className="social-icon" href="tel:+916305190402" title="Phone" aria-label="Phone">📞</a>
          <a className="social-icon" href="https://linkedin.com/in/anand-karma-a06036352" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn">in</a>
          <a className="social-icon" href="https://github.com/anandkarna0905-eng" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub">🐙</a>
        </div>
        <p>anandkarna0905@gmail.com · +91 63051 90402</p>
        <p>© {new Date().getFullYear()} Anand Karna. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
