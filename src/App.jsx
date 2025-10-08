import './App.css'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

const experiences = [
  {
    timeframe: '2023 — Present',
    role: 'Senior Frontend Engineer',
    organisation: 'Luna Labs',
    summary:
      'Leading the design and development of immersive, interactive web experiences for cultural institutions and design-forward brands.',
    contributions: [
      'Architected a modular design system adopted across five product lines and dozens of marketing campaigns.',
      'Introduced performance budgets and automated audits that reduced average load times by 42%.',
      'Mentored a cross-disciplinary team of engineers, designers, and artists through weekly critique and pairing sessions.',
    ],
  },
  {
    timeframe: '2020 — 2023',
    role: 'Creative Technologist',
    organisation: 'Studio Meridian',
    summary:
      'Developed experimental installations and prototypes blending code, light, and sound for galleries and public spaces.',
    contributions: [
      'Crafted generative visuals for travelling exhibitions seen by over 200K visitors worldwide.',
      'Built a bespoke toolchain for projection-mapping that sped up production by 60%.',
      'Collaborated closely with choreographers and composers to align technology with narrative intent.',
    ],
  },
]

const projects = [
  {
    title: 'Resonance Atlas',
    description:
      'A WebGL-powered exploration of how architecture shapes sound, featuring real-time simulations and interactive storytelling.',
    tags: ['Three.js', 'Storytelling', 'Spatial Audio'],
    link: 'https://resonance-atlas.example.com',
  },
  {
    title: 'Nocturne',
    description:
      'An AI-assisted art series that reinterprets nocturnal cityscapes, paired with an accompanying microsite and print catalogue.',
    tags: ['AI Art', 'Branding', 'Vite'],
    link: 'https://nocturne-series.example.com',
  },
  {
    title: 'The Common Thread',
    description:
      'Interactive documentary highlighting Latin American artisans through motion, typography, and multimedia interviews.',
    tags: ['Documentary', 'React', 'Design Systems'],
    link: 'https://common-thread.example.com',
  },
]

const essays = [
  {
    title: 'Lighting the Future of Experiential Design',
    teaser: 'A framework for evaluating emerging tools without losing sight of human stories.',
    link: 'https://medium.com/@pablomolano/lighting-the-future',
    year: 2024,
  },
  {
    title: 'Tactile Interfaces for Digital Spaces',
    teaser: 'Lessons learned while prototyping haptic interactions for a museum installation.',
    link: 'https://medium.com/@pablomolano/tactile-interfaces',
    year: 2023,
  },
]

const socials = [
  { label: 'Email', href: 'mailto:hello@pablomolano.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pablomolano' },
  { label: 'Instagram', href: 'https://www.instagram.com/pablomolano' },
  { label: 'GitHub', href: 'https://github.com/pablomolano' },
]

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="masthead" id="top">
        <div className="identity">
          <span className="identity__tag">Pablo Molano</span>
          <h1>Creative technologist shaping resonant digital and spatial experiences.</h1>
          <p className="identity__lede">
            I work across code, light, and sound to craft cultural websites, installations, and tools that feel intentional and
            enduring. Each project is a dialogue between architecture, narrative, and technology.
          </p>
        </div>

        <div className="masthead__aside">
          <nav className="index" aria-label="Primary">
            <span className="index__label">Index</span>
            <ul>
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <span className="index__number">0{index + 1}</span>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="masthead__cta">
            <p className="masthead__status">Currently collaborating with design-led teams and ensembles.</p>
            <a className="button" href="mailto:hello@pablomolano.com">
              Write to me
            </a>
          </div>
        </div>
      </header>

      <main className="content" id="main">
        <section className="panel" id="about">
          <header className="panel__header">
            <span className="panel__index">01</span>
            <div>
              <p className="panel__eyebrow">Who I am</p>
              <h2>About</h2>
            </div>
          </header>
          <div className="panel__body">
            <div className="text-columns">
              <p>
                Based in Bogotá, I combine a fine arts background with a fascination for emerging technology. I help forward-thinking
                teams tell their stories through digital canvases that balance restraint with emotion.
              </p>
              <p>
                Away from production sprints, I prototype tactile interfaces, collaborate with musicians, and teach creative coding
                workshops. I pursue work that invites people to listen closely, inhabit space, and feel something unexpected.
              </p>
            </div>
            <ul className="spec-sheet" aria-label="Personal details">
              <li>
                <span className="spec-label">Expertise</span>
                <span className="spec-value">Interaction design, creative coding, design systems</span>
              </li>
              <li>
                <span className="spec-label">Tools</span>
                <span className="spec-value">React, Vite, Three.js, TouchDesigner, Ableton, GLSL</span>
              </li>
              <li>
                <span className="spec-label">Currently exploring</span>
                <span className="spec-value">Tactile web, spatial audio, sustainable storytelling</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="panel" id="experience">
          <header className="panel__header">
            <span className="panel__index">02</span>
            <div>
              <p className="panel__eyebrow">Selected roles</p>
              <h2>Experience</h2>
            </div>
          </header>
          <div className="panel__body">
            <div className="experience-grid" aria-label="Professional experience timeline">
              {experiences.map((experience) => (
                <article key={experience.role} className="experience">
                  <header>
                    <p className="experience__timeframe">{experience.timeframe}</p>
                    <h3>
                      {experience.role}
                      <span> · {experience.organisation}</span>
                    </h3>
                    <p className="experience__summary">{experience.summary}</p>
                  </header>
                  <ul>
                    {experience.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="panel" id="projects">
          <header className="panel__header">
            <span className="panel__index">03</span>
            <div>
              <p className="panel__eyebrow">Case studies</p>
              <h2>Projects</h2>
            </div>
          </header>
          <div className="panel__body">
            <ul className="project-list">
              {projects.map((project) => (
                <li key={project.title} className="project">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project__meta">
                    <ul className="tag-row">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Visit site
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="panel" id="writing">
          <header className="panel__header">
            <span className="panel__index">04</span>
            <div>
              <p className="panel__eyebrow">Latest essays</p>
              <h2>Writing</h2>
            </div>
          </header>
          <div className="panel__body">
            <ul className="writing-list">
              {essays.map((essay) => (
                <li key={essay.title}>
                  <a href={essay.link} target="_blank" rel="noreferrer">
                    <span className="writing-list__year">{essay.year}</span>
                    <span className="writing-list__title">{essay.title}</span>
                    <span className="writing-list__teaser">{essay.teaser}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="panel" id="contact">
          <header className="panel__header">
            <span className="panel__index">05</span>
            <div>
              <p className="panel__eyebrow">Let&apos;s collaborate</p>
              <h2>Contact</h2>
            </div>
          </header>
          <div className="panel__body contact">
            <p>
              Ready to co-create something memorable? Share the contours of your project and I&apos;ll respond with a considered next
              step.
            </p>
            <div className="contact__actions">
              <a className="button" href="mailto:hello@pablomolano.com">
                hello@pablomolano.com
              </a>
              <div className="social-links" aria-label="Social media links">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Pablo Molano</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App
