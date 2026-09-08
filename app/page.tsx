import Image from 'next/image';
import ContactForm from './components/ContactForm';

const services = [
  ['01', 'Web applications', 'Custom platforms shaped around your operations, customers, and next stage of growth.'],
  ['02', 'Mobile products', 'Clear, dependable mobile experiences that keep your business close to its customers.'],
  ['03', 'App management', 'Ongoing improvements, monitoring, and support from a partner who knows your product.'],
];

const projects = [
  {
    name: 'TradeWork',
    label: 'Business operations · Web + mobile',
    text: 'A purpose-built operations platform that helps trade businesses organize requests, jobs, workers, and customers.',
    href: 'https://app.tradeworkapp.com',
    image: '/tradework-portfolio.png',
    className: 'wide',
  },
  {
    name: 'Elite Driving School',
    label: 'Scheduling & customer portal · Web app',
    text: 'An all-in-one student experience for registration, scheduling, payments, documents, and progress tracking.',
    href: 'https://elitedriversmn.com',
    image: '/elite-portfolio.png',
    className: 'tall',
  },
  {
    name: 'TAG Groceries',
    label: 'Shopping utility · Mobile app',
    text: 'A practical mobile product that helps shoppers organize grocery lists by store and aisle.',
    href: 'https://taggroceries.com/#/',
    image: '/tag-portfolio.png',
    className: 'phone',
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Espejo Software home"><span>E</span> ESPEJO SOFTWARE</a>
        <div className="nav-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a></div>
        <a className="outline-button" href="#contact">Start a project ↗</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent software studio · Florida</p>
          <h1>Software that means <em>business.</em></h1>
          <p className="hero-lede">We build focused web and mobile applications for businesses ready to work smarter and grow with confidence.</p>
          <div className="hero-actions"><a className="solid-button" href="#contact">Discuss your project ↗</a><a className="plain-link" href="#work">View selected work ↓</a></div>
        </div>
        <div className="hero-machine" aria-hidden="true">
          <div className="signal"><span /> LIVE SYSTEM</div>
          <div className="machine-grid"><div className="machine-main"><small>OPERATIONS</small><b>Everything<br />in its place.</b><div className="lines"><i /><i /><i /></div></div><div className="machine-stat"><small>UPTIME</small><b>99.9%</b></div><div className="machine-stat bright"><small>NEXT</small><b>↗</b></div></div>
        </div>
      </section>

      <section className="service-strip" id="services"><div className="shell service-grid">
        {services.map(([number, title, text]) => <article key={number}><small>{number} / SERVICE</small><h2>{title}</h2><p>{text}</p></article>)}
      </div></section>

      <section className="work shell" id="work">
        <div className="section-title"><div><p className="eyebrow">Selected work</p><h2>Built for the<br /><em>real world.</em></h2></div><p>Software already helping businesses serve customers, manage operations, and move forward.</p></div>
        <div className="project-list">
          {projects.map((project, index) => <article className={`project ${project.className}`} key={project.name}>
            <div className="project-meta"><small>0{index + 1} / {project.label}</small><h3>{project.name}</h3><p>{project.text}</p><a href={project.href} target="_blank" rel="noreferrer">View live project ↗</a></div>
            <a className="project-image" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}>
              <Image src={project.image} alt={`${project.name} application interface`} fill sizes="(max-width: 800px) 100vw, 62vw" />
            </a>
          </article>)}
        </div>
      </section>

      <section className="about" id="about"><div className="shell about-grid"><p className="eyebrow">Why Espejo</p><div><h2>Small studio.<br /><em>Serious partnership.</em></h2><p>Espejo Software is a family-named, Florida-based studio. You work directly with the person building your product—from the first conversation through launch and every useful improvement after it.</p><div className="principles"><span><b>DIRECT</b>Clear communication, no layers.</span><span><b>PRACTICAL</b>Technology that solves real problems.</span><span><b>LONG-TERM</b>A partner after launch, not just before it.</span></div></div></div></section>

      <section className="contact" id="contact"><div className="shell contact-grid">
        <div className="contact-intro"><p className="eyebrow">Start a project</p><h2>What could work<br /><em>better?</em></h2><p>Tell us what is slowing your business down—or what you wish your software could do. We&apos;ll start with a focused conversation.</p><a href="mailto:cespejo1@yahoo.com">cespejo1@yahoo.com ↗</a></div>
        <ContactForm />
      </div></section>

      <footer className="footer shell"><a className="brand" href="#top"><span>E</span> ESPEJO SOFTWARE</a><p>Web apps · Mobile apps · Ongoing support</p><div><span>© {new Date().getFullYear()} Espejo Software LLC</span><span>Florida, USA</span></div></footer>
    </main>
  );
}
