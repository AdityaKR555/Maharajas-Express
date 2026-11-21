import { Link } from 'react-router-dom';
import Img from './Img';
import Reveal from './Reveal';
import { contacts } from '../data/site';
import { Arrow, Phone } from './Icons';

export function PageHero({ eyebrow, title, text, img, seed = 'page', crumbs = [] }) {
  return (
    <section className="phero on-dark">
      <div className="phero__bg img-box">{img && <Img src={img} alt="" seed={seed} loading="eager" />}</div>
      <div className="container phero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}
            </span>
          ))}
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  );
}

export function CtaBand({ title = 'Ready to travel like royalty?', text = 'Tell us your dates and we’ll take care of the rest.' }) {
  const toll = contacts[0];
  return (
    <section className="cta section on-dark">
      <Reveal className="container cta__inner">
        <div>
          <h2 className="h2">{title}</h2>
          <p className="lead">{text}</p>
        </div>
        <div className="cta__actions">
          <Link to="/#book" className="btn btn--gold">
            Enquire Now <Arrow size={16} />
          </Link>
          <a href={toll.href} className="btn btn--ghost">
            <Phone size={16} /> {toll.display}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
