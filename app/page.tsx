import Image from 'next/image';
import ContactForm from './components/ContactForm';

const services = [
  {
    number: '01',
    title: 'Web applications',
    text: 'Custom platforms shaped around your operations, customers, and next stage of growth.',
    example: 'TradeWork',
    detail: 'Operations platforms · CRM · Customer portals',
    image: '/tradework-portfolio.png',
    href: '/work/tradework',
  },
  {
    number: '02',
    title: 'Mobile products',
    text: 'Clear, dependable mobile experiences that keep your business close to its customers.',
    example: 'TAG Groceries',
    detail: 'iOS & Android · Shared tools · Mobile-first UX',
    image: '/tag-portfolio.png',
    href: '/work/tag-groceries',
  },
  {
    number: '03',
    title: 'App management',
    text: 'Ongoing improvements, monitoring, and support from a partner who knows your product.',
    example: 'Elite Driving School',
    detail: 'Monitoring · Improvements · Long-term support',
    image: '/elite-dashboard.png',
    href: '/work/elite-driving-school',
  },
];

const projects = [
  {
    name: 'TradeWork',
    slug: 'tradework',
    label: 'Business operations · Web + mobile',
    text: 'A purpose-built operations platform that helps trade businesses organize requests, jobs, workers, and customers.',
    href: 'https://app.tradeworkapp.com',
    image: '/tradework-portfolio.png',
    className: 'wide',
  },
  {
    name: 'Elite Driving School',
    slug: 'elite-driving-school',
    label: 'Scheduling & customer portal · Web app',
    text: 'An all-in-one student experience for registration, scheduling, payments, documents, and progress tracking.',
    href: 'https://elitedriversmn.com',
    image: '/elite-portfolio.png',
    className: 'tall',
  },
  {
    name: 'TAG Groceries',
    slug: 'tag-groceries',
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
        {services.map((service) => <article className="service-card" key={service.number}>
          <div className="service-copy"><small>{service.number} / SERVICE</small><h2>{service.title}</h2><p>{service.text}</p></div>
          <a className="service-example" href={service.href} aria-label={`See ${service.example} case study`}>
            <span className="service-visual"><Image src={service.image} alt={`${service.example} application example`} fill sizes="(max-width: 650px) 100vw, 33vw" /></span>
            <span className="service-example-copy"><small>EXAMPLE / {service.example}</small><b>{service.detail}</b><i>View case study →</i></span>
          </a>
        </article>)}
      </div></section>

      <section className="work shell" id="work">
        <div className="section-title"><div><p className="eyebrow">Selected work</p><h2>Built for the<br /><em>real world.</em></h2></div><p>Software already helping businesses serve customers, manage operations, and move forward.</p></div>
        <div className="project-list">
          {projects.map((project, index) => <article className={`project ${project.className}`} key={project.name}>
            <div className="project-meta"><small>0{index + 1} / {project.label}</small><h3>{project.name}</h3><p>{project.text}</p><div className="project-links"><a href={`/work/${project.slug}`}>Read case study →</a><a href={project.href} target="_blank" rel="noreferrer">View live ↗</a></div></div>
            <a className="project-image" href={`/work/${project.slug}`} aria-label={`Read the ${project.name} case study`}>
              <Image src={project.image} alt={`${project.name} application interface`} fill sizes="(max-width: 800px) 100vw, 62vw" />
            </a>
          </article>)}
        </div>
      </section>

      <section className="about" id="about"><div className="shell">
        <div className="about-heading"><p className="eyebrow">Meet the founder</p><h2>Experience at scale.<br /><em>Built for real people.</em></h2></div>
        <div className="founder-grid">
          <div className="founder-photo"><Image src="/carlos-espejo.jpg" alt="Carlos Espejo after completing a marathon" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
          <div className="founder-story"><p className="founder-name">Carlos Espejo <span>Founder &amp; Software Developer</span></p><p>I&apos;ve spent years building software in very different environments—from large corporations such as Target and Entrust to consulting engagements and custom products for smaller businesses. That range taught me how to bring enterprise-level thinking to practical problems without making the solution more complicated than it needs to be.</p><p>As a developer and entrepreneur, I&apos;m most energized by understanding how something works, finding where it gets stuck, and creating a better path forward. Software is one of the best tools I know for doing that: connecting people, simplifying work, and turning an idea into something genuinely useful.</p><p>Outside of work, I&apos;m a family man who values time with family and friends. You&apos;ll also find me playing basketball or out for a run. The same things I appreciate there—discipline, teamwork, steady progress, and enjoying the process—shape how I approach every project.</p><div className="founder-quote">“The best software doesn&apos;t call attention to its complexity. It simply makes the work feel easier.”</div></div>
        </div>
        <div className="principles"><span><b>EXPERIENCED</b>Enterprise perspective with hands-on execution.</span><span><b>PRACTICAL</b>Technology shaped around the real problem.</span><span><b>PERSONAL</b>Direct collaboration from idea through launch.</span></div>
      </div></section>

      <section className="contact" id="contact"><div className="shell contact-grid">
        <div className="contact-intro"><p className="eyebrow">Start a project</p><h2>What could work<br /><em>better?</em></h2><p>Tell us what is slowing your business down—or what you wish your software could do. We&apos;ll start with a focused conversation.</p><a href="mailto:cespejo1@yahoo.com">cespejo1@yahoo.com ↗</a></div>
        <ContactForm />
      </div></section>

      <footer className="footer shell"><a className="brand" href="#top"><span>E</span> ESPEJO SOFTWARE</a><p>Web apps · Mobile apps · Ongoing support</p><div><span>© {new Date().getFullYear()} Espejo Software LLC</span><span>Florida, USA</span></div></footer>
    </main>
  );
}
