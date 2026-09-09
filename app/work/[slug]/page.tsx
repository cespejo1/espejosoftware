import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../projects';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const description = project.summary.slice(0, 158);
  const image = project.images[0].src;
  return {
    title: `${project.name} Case Study | Espejo Software`, description,
    openGraph: { title: `${project.name} — Built by Espejo Software`, description, type: 'article', url: `/work/${project.slug}`, images: [{ url: image, alt: project.images[0].alt }] },
    twitter: { card: 'summary_large_image', title: `${project.name} — Built by Espejo Software`, description, images: [image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const current = projects.findIndex(({ slug }) => slug === project.slug);
  const next = projects[(current + 1) % projects.length];

  return <main className={`case-study case-${project.slug}`}>
    <nav className="nav shell case-nav" aria-label="Project navigation"><Link className="brand" href="/"><span>E</span> ESPEJO SOFTWARE</Link><Link className="case-back" href="/#work">← All work</Link><Link className="outline-button" href="/#contact">Start a project ↗</Link></nav>
    <header className="case-hero shell"><div className="case-kicker"><span>{project.index}</span><p>{project.category}</p></div><h1>{project.name}</h1><div className="case-intro"><h2>{project.headline}</h2><p>{project.summary}</p></div></header>
    <section className="case-image case-image-primary"><Image src={project.images[0].src} alt={project.images[0].alt} fill priority sizes="100vw" /></section>
    <section className="case-overview shell"><aside><p className="eyebrow">The project</p><a href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveLabel} ↗</a></aside><div><article><small>THE CHALLENGE</small><p>{project.challenge}</p></article><article><small>THE SOLUTION</small><p>{project.solution}</p></article></div></section>
    <section className="feature-section"><div className="shell"><div className="feature-heading"><p className="eyebrow">Capabilities</p><h2>Designed around<br /><em>the people using it.</em></h2></div><div className="feature-grid">{project.features.map((feature, index) => <article key={feature.title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></div></section>
    <section className={`case-gallery shell gallery-${project.images.length}`}>{project.images.slice(1).map((image) => <div className={`gallery-image ${image.className ?? ''}`} key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 70vw" /></div>)}</section>
    <section className="outcome-section shell"><div><p className="eyebrow">Built for</p><ul>{project.audience.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">What it changes</p><ol>{project.outcomes.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div></section>
    <section className="next-project"><div className="shell"><p>Next case study</p><Link href={`/work/${next.slug}`}><span>{next.index}</span>{next.name} →</Link></div></section>
    <footer className="footer shell"><Link className="brand" href="/"><span>E</span> ESPEJO SOFTWARE</Link><p>Web apps · Mobile apps · Ongoing support</p><div><span>© {new Date().getFullYear()} Espejo Software LLC</span><span>Florida, USA</span></div></footer>
  </main>;
}
