const projects = [
  { name: 'Elite Driving School', type: 'Operations platform', description: 'A polished customer experience backed by the tools a growing driving school needs to run day to day.', href: 'https://elitedriversmn.com', accent: 'elite', mark: 'ED' },
  { name: 'TradeWork', type: 'Business web app', description: 'Purpose-built software that helps trade businesses organize work, stay on top of details, and move faster.', href: 'https://app.tradeworkapp.com', accent: 'trade', mark: 'TW' },
  { name: 'TAG Groceries', type: 'Mobile experience', description: 'A convenient mobile product designed to make everyday grocery shopping simpler and more accessible.', href: 'https://taggroceries.com/#/', accent: 'tag', mark: 'TG' },
];

const services = [
  { number: '01', title: 'Web apps that fit the work', text: 'Custom software built around your business—not a generic template you have to work around.' },
  { number: '02', title: 'Mobile apps people enjoy using', text: 'Thoughtful, dependable mobile experiences that keep your business close to your customers.' },
  { number: '03', title: 'Ongoing app management', text: 'Updates, improvements, monitoring, and support so your software stays useful long after launch.' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Espejo Software home"><span className="brand-mark">E</span><span>Espejo Software</span></a>
        <div className="nav-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a></div>
        <a className="button button-small" href="mailto:hello@espejosoftware.com">Start a project <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Florida-based software studio</p>
          <h1>Software built around <em>your business.</em></h1>
          <p className="hero-lede">We design, build, and manage web and mobile apps that make work easier—and help good businesses grow.</p>
          <div className="hero-actions">
            <a className="button" href="mailto:hello@espejosoftware.com?subject=Let%27s%20build%20something">Tell us what you&apos;re building <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#work">See our work <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="A collection of software project interfaces">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="visual-card card-main">
            <div className="window-bar"><span /><span /><span /></div>
            <div className="mock-layout"><div className="mock-sidebar"><b>ES</b><i /><i /><i /></div><div className="mock-content"><small>YOUR BUSINESS, CLEARLY</small><strong>Everything in one place.</strong><div className="mock-stats"><span /><span /><span /></div><div className="mock-chart"><i /><i /><i /><i /><i /><i /></div></div></div>
          </div>
          <div className="visual-card card-float top-card"><span className="status-dot" /><div><small>System status</small><strong>Running smoothly</strong></div></div>
          <div className="visual-card card-float bottom-card"><span className="mini-mark">E</span><div><small>Built for you</small><strong>Ready to grow</strong></div></div>
        </div>
      </section>

      <section className="trust-strip"><div className="shell trust-inner"><p>Built with the tools modern businesses trust</p><div><span>React</span><span>Next.js</span><span>Node.js</span><span>Supabase</span><span>Vercel</span></div></div></section>

      <section className="section shell" id="services">
        <div className="section-heading"><p className="eyebrow"><span /> What we do</p><h2>The software partner<br />your business can rely on.</h2><p>From the first idea through every future update, we turn real business needs into software that feels simple.</p></div>
        <div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="mailto:hello@espejosoftware.com">Learn more <span aria-hidden="true">↗</span></a></article>)}</div>
      </section>

      <section className="work-section" id="work"><div className="shell">
        <div className="section-heading work-heading"><div><p className="eyebrow light"><span /> Selected work</p><h2>Made for the real world.</h2></div><p>Software already helping businesses serve customers, manage operations, and move forward.</p></div>
        <div className="projects-grid">{projects.map((project) => <a className={`project-card ${project.accent}`} href={project.href} target="_blank" rel="noreferrer" key={project.name}><div className="project-top"><span className="project-mark">{project.mark}</span><span className="project-arrow">↗</span></div><div className="project-screen"><div className="screen-nav"><i /><i /><i /></div><div className="screen-body"><b>{project.name}</b><span /><span /><span /></div></div><p>{project.type}</p><h3>{project.name}</h3><span className="project-description">{project.description}</span></a>)}</div>
      </div></section>

      <section className="about shell" id="about"><div className="about-note">EST. IN FLORIDA<br />BUILT TO WORK ANYWHERE</div><div className="about-copy"><p className="eyebrow"><span /> Why Espejo</p><h2>Small studio.<br /><em>Serious partnership.</em></h2><p>Espejo Software is a family-named, Florida-based software studio. You work directly with the person building your product—from the first conversation to launch and beyond.</p><div className="principles"><span><b>Direct</b> Clear communication, no layers.</span><span><b>Practical</b> Technology that solves real problems.</span><span><b>Long-term</b> A partner after launch, not just before it.</span></div></div></section>

      <section className="cta-section"><div className="shell cta-inner"><p className="eyebrow light"><span /> Have an idea?</p><h2>Let&apos;s build something<br /><em>useful.</em></h2><p>Tell us what&apos;s slowing your business down—or what you wish your software could do.</p><a className="button button-light" href="mailto:hello@espejosoftware.com?subject=Project%20inquiry">Start the conversation <span aria-hidden="true">↗</span></a></div></section>
      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">E</span><span>Espejo Software</span></a><p>Web apps. Mobile apps. Ongoing support.</p><div><span>© {new Date().getFullYear()} Espejo Software LLC</span><span>Florida, USA</span></div></footer>
    </main>
  );
}
