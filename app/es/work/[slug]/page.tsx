import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectEs, projectsEs } from '../projects-es';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projectsEs.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectEs((await params).slug);
  if (!project) return {};
  const description = project.summary.slice(0, 158);
  const image = project.images[0].src;
  return { title: `${project.name} | Proyecto de Espejo Software`, description, alternates: { canonical: `/es/work/${project.slug}`, languages: { 'en-US': `/work/${project.slug}`, 'es-US': `/es/work/${project.slug}` } }, openGraph: { title: `${project.name} — Creado por Espejo Software`, description, type: 'article', url: `/es/work/${project.slug}`, locale: 'es_US', images: [{ url: image, alt: project.images[0].alt }] } };
}

export default async function SpanishProjectPage({ params }: Props) {
  const project = getProjectEs((await params).slug);
  if (!project) notFound();
  const current = projectsEs.findIndex(({ slug }) => slug === project.slug);
  const next = projectsEs[(current + 1) % projectsEs.length];

  return <main className={`case-study case-${project.slug}`}>
    <nav className="nav shell case-nav" aria-label="Navegación del proyecto"><Link className="brand" href="/es"><span>E</span> ESPEJO SOFTWARE</Link><Link className="case-back" href="/es/#work">← Todos los proyectos</Link><Link className="lang-switch" href={`/work/${project.slug}`} lang="en">EN</Link><Link className="outline-button" href="/es/#contact">Inicia un proyecto ↗</Link></nav>
    <header className="case-hero shell"><div className="case-kicker"><span>{project.index}</span><p>{project.category}</p></div><h1>{project.name}</h1><div className="case-intro"><h2>{project.headline}</h2><p>{project.summary}</p></div></header>
    <section className="case-image case-image-primary"><Image src={project.images[0].src} alt={project.images[0].alt} fill priority sizes="100vw" /></section>
    <section className="case-overview shell"><aside><p className="eyebrow">El proyecto</p><a href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveLabel} ↗</a></aside><div><article><small>EL RETO</small><p>{project.challenge}</p></article><article><small>LA SOLUCIÓN</small><p>{project.solution}</p></article></div></section>
    <section className="feature-section"><div className="shell"><div className="feature-heading"><p className="eyebrow">Capacidades</p><h2>Diseñado alrededor de<br /><em>las personas que lo usan.</em></h2></div><div className="feature-grid">{project.features.map((feature, index) => <article key={feature.title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></div></section>
    <section className={`case-gallery shell gallery-${project.images.length}`}>{project.images.slice(1).map((image) => <div className={`gallery-image ${image.className ?? ''}`} key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 70vw" /></div>)}</section>
    <section className="outcome-section shell"><div><p className="eyebrow">Creado para</p><ul>{project.audience.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Lo que cambia</p><ol>{project.outcomes.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div></section>
    <section className="next-project"><div className="shell"><p>Próximo proyecto</p><Link href={`/es/work/${next.slug}`}><span>{next.index}</span>{next.name} →</Link></div></section>
    <footer className="footer shell"><Link className="brand" href="/es"><span>E</span> ESPEJO SOFTWARE</Link><p>Aplicaciones web · Aplicaciones móviles · Soporte continuo</p><div><span>© {new Date().getFullYear()} Espejo Software LLC</span><span>Florida, EE. UU.</span></div></footer>
  </main>;
}
