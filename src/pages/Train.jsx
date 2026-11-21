import { Link, useParams } from 'react-router-dom';
import { CtaBand, PageHero } from '../components/PageParts';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import { amenities, cabins, dining, photos, trainPages } from '../data/site';
import { Arrow, Check } from '../components/Icons';
import NotFound from './NotFound';

export function TrainPage() {
  const rooms = Object.entries(trainPages);
  return (
    <>
      <PageHero
        eyebrow="Aboard"
        title="The Train"
        text="Twenty-three elegant coaches, fourteen of them guest carriages, hosting up to 84 guests."
        img={photos.train}
        seed="train-page"
        crumbs={[{ label: 'The Train' }]}
      />
      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {rooms.map(([slug, r], k) => (
              <Reveal key={slug} delay={k * 0.06}>
                <Link to={`/train/${slug}`} className="tile">
                  <div className="tile__media img-box">
                    <Img src={r.img} alt={r.title} seed={slug} />
                  </div>
                  <div className="tile__body">
                    <span className="eyebrow">{r.eyebrow}</span>
                    <h3>{r.title}</h3>
                    <span className="tile__more">
                      Discover <Arrow size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="panel amenities-panel">
            <h3>Onboard amenities</h3>
            <ul className="ticks ticks--two">
              {amenities.map((a) => (
                <li key={a}>
                  <Check size={18} /> {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function TrainDetail() {
  const { slug } = useParams();
  const r = trainPages[slug];
  if (!r) return <NotFound />;
  const others = Object.entries(trainPages).filter(([s]) => s !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={r.eyebrow}
        title={r.title}
        text={r.text}
        img={r.img}
        seed={slug}
        crumbs={[{ label: 'The Train', to: '/train' }, { label: r.title }]}
      />
      <section className="section">
        <div className="container detail">
          <Reveal className="detail__route">
            <span className="eyebrow">What to expect</span>
            <h2 className="h2">
              Comfort, <em>considered</em>
            </h2>
            <p className="lead">{r.text}</p>
            <ul className="ticks ticks--two">
              {r.bullets.map((b) => (
                <li key={b}>
                  <Check size={18} /> {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="detail__side" delay={0.1}>
            <div className="panel panel--dark">
              <h3>Enquire about {r.title}</h3>
              <p className="muted-light">Fares depend on journey and departure. Our agents will prepare a personal quote.</p>
              <Link to="/#book" className="btn btn--gold">
                Request a quote <Arrow size={16} />
              </Link>
            </div>
            {slug === 'restaurant' || slug === 'lounge-bar-cars' ? (
              <div className="panel">
                <h3>Dining &amp; lounges</h3>
                <ul className="ticks">
                  {dining.map((d) => (
                    <li key={d.name}>
                      <Check size={18} /> {d.name} <em>({d.kind})</em>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="panel">
                <h3>Cabin categories</h3>
                <ul className="ticks">
                  {cabins.map((c) => (
                    <li key={c.slug}>
                      <Check size={18} /> {c.count} × {c.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal className="section-head">
            <h2 className="h2">
              Continue <em>exploring</em>
            </h2>
          </Reveal>
          <div className="cards-grid cards-grid--three">
            {others.map(([s, o]) => (
              <Link key={s} to={`/train/${s}`} className="tile">
                <div className="tile__media img-box">
                  <Img src={o.img} alt={o.title} seed={s} />
                </div>
                <div className="tile__body">
                  <span className="eyebrow">{o.eyebrow}</span>
                  <h3>{o.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
