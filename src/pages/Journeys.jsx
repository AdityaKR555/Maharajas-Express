import { Link, useParams } from 'react-router-dom';
import { CtaBand, PageHero } from '../components/PageParts';
import { JourneyCard } from '../components/home/Journeys';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import { journeys } from '../data/site';
import { Arrow, Check } from '../components/Icons';
import NotFound from './NotFound';

export function JourneysPage() {
  return (
    <>
      <PageHero
        eyebrow="Four iconic routes"
        title="The Journeys"
        text="Three seven-day circuits and one four-day escape, each a different side of India."
        img={journeys[0].img}
        seed="journeys"
        crumbs={[{ label: 'Journeys' }]}
      />
      <section className="section">
        <div className="container jcards jcards--light">
          {journeys.map((j, k) => (
            <JourneyCard key={j.slug} j={j} delay={k * 0.08} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function JourneyDetail() {
  const { slug } = useParams();
  const j = journeys.find((x) => x.slug === slug);
  if (!j) return <NotFound />;
  const others = journeys.filter((x) => x.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={`${j.nights} Nights / ${j.days} Days`}
        title={j.title}
        text={j.blurb}
        img={j.img}
        seed={j.slug}
        crumbs={[{ label: 'Journeys', to: '/journeys' }, { label: j.title }]}
      />

      <section className="section">
        <div className="container detail">
          <Reveal className="detail__route">
            <span className="eyebrow">The route</span>
            <h2 className="h2">
              Your <em>itinerary</em> at a glance
            </h2>
            <ol className="route">
              {j.route.map((stop, k) => (
                <li key={`${stop}-${k}`}>
                  <span className="route__dot" />
                  <strong>{stop}</strong>
                  <small>{k === 0 ? 'Departure' : k === j.route.length - 1 ? 'Arrival' : 'Stop'}</small>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="detail__side" delay={0.1}>
            <div className="panel">
              <h3>Highlights</h3>
              <ul className="ticks">
                {j.highlights.map((h) => (
                  <li key={h}>
                    <Check size={18} /> {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel panel--dark">
              <h3>Upcoming departures</h3>
              <p className="muted-light">Sample dates. Your agent will confirm availability.</p>
              <ul className="dates">
                {j.departures.map((d) => (
                  <li key={d}>
                    {new Date(`${d}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </li>
                ))}
              </ul>
              <Link to="/#book" className="btn btn--gold">
                Enquire <Arrow size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">More routes</span>
            <h2 className="h2">
              Other <em>journeys</em>
            </h2>
          </Reveal>
          <div className="jcards jcards--three">
            {others.map((o, k) => (
              <JourneyCard key={o.slug} j={o} delay={k * 0.08} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
