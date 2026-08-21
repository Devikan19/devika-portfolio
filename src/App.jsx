import { useEffect, useState } from 'react'
import { ArrowRight, Award, BrainCircuit, BriefcaseBusiness, Check, Code2, Download, GraduationCap,Github, Linkedin, Mail, MapPin, Menu, Server, Sparkles, X } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Backend Engineering', text: 'C# / .NET, Golang, ASP.NET Core, Web API, Entity Framework Core, LINQ' },
  { icon: Server, title: 'Cloud & Data', text: 'Azure Functions, AWS Lambda, API Gateway, SQL Server, MongoDB, Blob Storage, S3' },
  { icon: BriefcaseBusiness, title: 'Engineering Practice', text: 'REST APIs, Microservices, xUnit, SOLID, Docker, CI/CD, Agile / Scrum' },
  { icon: BrainCircuit, title: 'AI-Assisted Development', text: 'ChatGPT / Codex, Claude AI and Amazon Q for coding, debugging, unit testing and documentation' },
]

const projects = [
  {
    meta: 'ABB ROBOTICS', label: 'ENTERPRISE ROBOTICS', title: 'Robotic Power Management',
    description: 'A production backend for controller booking, lifecycle management and power-consumption monitoring across ABB Robotics teams.',
    impact: ['15+ scalable REST APIs', 'SQL schemas & optimization', 'IIS production support'],
    tech: ['C#', 'ASP.NET Core', 'ASP.NET Web APIs','EF Core', 'SQL Server', 'JWT'], color: 'violet'
  },
  {
    meta: 'ABB ROBOTICS', label: 'DOCUMENTATION PLATFORM', title: 'Robot Web Services Portal',
    description: 'A fast, searchable documentation experience with global search, interactive API references and smart version-based caching.',
    impact: ['8 search & documentation APIs', 'Reduced Blob Storage calls', 'Cross-device delivery'],
    tech: ['C#', 'ASP.NET Core','ASP.NET Web APIs','Azure Functions', 'Blob Storage', 'SignalR', 'xUnit'], color: 'cyan'
  },
  {
    meta: 'GOLANG / AWS', label: 'SECURE CLOUD PLATFORM', title: 'Authentication & User Management',
    description: 'Serverless authentication and user management supporting SSO, subscriptions, account recovery and fine-grained access control.',
    impact: ['28+ production APIs', 'SSO & RBAC', 'Secure recovery flows'],
    tech: ['Golang', 'AWS Lambda','API Gateway', 'S3', 'Cognito', 'MongoDB'], color: 'orange'
  },
  {
    meta: 'GOLANG / AWS IOT', label: 'REAL-TIME IOT', title: 'Thinx Product Suite',
    description: 'Secure web, mobile and telemetry APIs processing live device data through an event-driven, cloud-native architecture.',
    impact: ['30+ secure APIs', 'Live MQTT telemetry', 'Production issue resolution'],
    tech: ['Golang', 'AWS', 'MQTT', 'JWT', 'MongoDB'], color: 'green'
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  useEffect(() => {
    const sectionIds = ['about', 'work', 'experience', 'toolkit', 'credentials', 'contact']
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const currentSection = [...sectionIds].reverse().find(id => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= 140
      })
      if (currentSection) setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const close = section => {
    setActiveSection(section)
    setMenuOpen(false)
  }

  return <div>
    <nav className={scrolled ? 'nav scrolled' : 'nav'}>
      <a className="logo" href="#home" aria-label="Home">DN<span>.</span></a>
      <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {['about','work','experience','toolkit','credentials','contact'].map(x => <a key={x} href={`#${x}`} className={activeSection === x ? 'active' : ''} onClick={() => close(x)}>{x}</a>)}
      </div>
      <a className="nav-cta" href="mailto:devika192002@gmail.com">Let's Connect <ArrowRight size={16}/></a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
    </nav>

    <main>
      <section className="hero" id="home">
        <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
        <div className="eyebrow"><span className="pulse"/> Immediate Joiner · Open to Opportunities</div>
        <p className="hello">Hi, I’m Devika <span>✦</span></p>
        <h1>I build reliable backend systems<br/><em>that scale.</em></h1>
        <p className="hero-copy">Software Engineer with 2.5+ years of experience building production-grade APIs, cloud-native services, and backend systems using C#/.NET, Golang, Azure, and AWS.</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">Explore my work <ArrowRight size={18}/></a>
          <a className="button secondary" href="/Devika_N_Resume.pdf" download><Download size={18}/> Download resume</a>
        </div>
        <div className="hero-meta">
          <span><MapPin size={16}/> Bengaluru, India</span><i/>
          <span>2.5+ years of experience</span><i/>
          <span>C#/.NET · Golang · Cloud</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <h2>Engineering dependable<br/>systems, <span>one API at a time.</span></h2>
          <div><p>I’m a backend-focused Software Engineer with 2.5+ years of experience building and maintaining production systems using C#/.NET, Golang, SQL, Azure and AWS. I’ve worked across the development lifecycle — from requirements and API design to testing, deployment and production support.</p><p>I enjoy solving complex backend problems, improving API and database performance, and building reliable cloud-native services that support real business needs.</p></div>
        </div>
        <div className="skill-grid">{skills.map(({icon: Icon,title,text}) => <article className="skill-card" key={title}><div className="icon-box"><Icon/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="numbers"><div><strong>81<span>+</span></strong><p>Production APIs built</p></div><div><strong>2.5<span>+</span></strong><p>Years in software</p></div><div><strong>2</strong><p>Cloud ecosystems</p></div><div><strong>4</strong><p>Major product platforms</p></div></div>
      </section>

      <section className="section work" id="work">
        <div className="section-label">02 / SELECTED WORK</div>
        <div className="section-heading"><h2>Systems built for<br/><span>real-world scale.</span></h2><p>Production work across robotics, documentation, authentication and connected devices.</p></div>
        <div className="projects">{projects.map(p => <article className={`project ${p.color}`} key={p.title}>
          <div className="project-top"><span>{p.label}</span><strong>{p.meta}</strong></div><h3>{p.title}</h3><p>{p.description}</p>
          <div className="impact">{p.impact.map(x => <span key={x}><Check size={15}/>{x}</span>)}</div>
          <div className="tags">{p.tech.map(x => <span key={x}>{x}</span>)}</div>
        </article>)}</div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-label">03 / EXPERIENCE</div>
        <div className="experience-grid">
          <div><h2>Where I’ve<br/><span>made an impact.</span></h2><div className="recognition"><Sparkles/><p>Recognized by client leadership for proactive risk identification that was “crucial to project success.”</p></div></div>
          <article className="role"><div className="role-head"><div><span>JAN 2024 — JUL 2026</span><h3>Software Developer</h3><p>GND Solutions India Pvt Ltd · Bengaluru</p></div><span className="duration">2.5 yrs</span></div><ul><li>Delivered reliable backend and API solutions for enterprise robotics and IoT platforms through close collaboration with product, engineering and QA teams.</li><li>Strengthened delivery quality through API validation, structured responses, unit testing, debugging and hands-on QA coordination.</li><li>Used AI coding assistants to accelerate development, debugging, unit testing and technical documentation.</li></ul></article>
        </div>
      </section>

      <section className="section toolkit" id="toolkit">
        <div className="section-label">04 / TOOLKIT</div><h2>Tools I work with.</h2>
        <div className="tool-rows">
          <div><strong>Languages</strong><p>C#/.NET · Golang · SQL · JavaScript</p></div>
          <div><strong>Cloud & DevOps</strong><p>Azure · AWS · Docker · CI/CD · IIS · Git · Bitbucket</p></div>
          <div><strong>Data & APIs</strong><p>SQL Server · MySQL · MongoDB · REST · Swagger · Postman</p></div>
          <div><strong>Security</strong><p>JWT · OAuth2 · AWS Cognito · RBAC · API Authorization</p></div>
        </div>
      </section>

      <section className="section credentials" id="credentials">
        <div className="section-label">05 / CREDENTIALS</div>
        <div className="credentials-grid">
          <article className="credential-card education-card"><div className="icon-box"><GraduationCap/></div><span>EDUCATION</span><h3>B.E. in Computer Science Engineering</h3><p>AMC Engineering College, Bengaluru</p><div className="credential-meta"><strong>2019 — 2023</strong><strong>CGPA 8.35 / 10</strong></div></article>
          <article className="credential-card"><div className="icon-box"><Award/></div><span>CERTIFICATIONS</span><ul><li><strong>AWS Academy Cloud Foundations</strong><small>Amazon Web Services · Feb 2023</small></li><li><strong>Java Full Stack Certification</strong><small>Tap Academy, Bengaluru</small></li><li><strong>Git and GitHub: Working with Git Repository</strong><small>Infosys Springboard · Nov 2023</small></li></ul></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p>HAVE A ROLE OR PROJECT IN MIND?</p><h2>Let’s build something<br/><span>solid together.</span></h2>
        <a href="mailto:devika192002@gmail.com">devika192002@gmail.com <ArrowRight/></a>
        <div className="contact-details"><span><MapPin/> Bengaluru, India</span><span>Available immediately</span></div>
      </section>
    </main>
    <footer><a className="logo" href="#home">DN<span>.</span></a><p>Designed & built with care · © 2026 Devika N</p><div><a href="https://linkedin.com/in/devika-n-36511a238" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a> 
    <a
      href="https://github.com/Devikan19"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
    >
    <Github />
    </a><a href="mailto:devika192002@gmail.com" aria-label="Email"><Mail/></a></div></footer>
  </div>
}

export default App
