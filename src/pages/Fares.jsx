import { Link } from 'react-router-dom';
import { CtaBand, PageHero } from '../components/PageParts';
import Reveal from '../components/Reveal';
import { cabins, journeys, photos } from '../data/site';
import { Arrow } from '../components/Icons';

export function FaresPage() {
  return (
    <>
      <PageHero
        eyebrow="Fares / Prices"
        title="Fares & Prices"
        text="Fares depend on your journey, departure date and cabin. We’ll prepare a personal quote."
        img={photos.suite}
        seed="fares"
        crumbs={[{ label: 'Fares' }]}
      />
      <section className="section">
        <div className="container">
          <Reveal className="table-wrap">
            <table className="fares">
              <thead>
                <tr>
                  <th>Cabin</th>
                  {journeys.map((j) => (
                    <th key={j.slug}>
                      {j.title.replace('The ', '')}
                      <small>
                        {j.nights}N / {j.days}D
                      </small>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cabins.map((c) => (
                  <tr key={c.slug}>
                    <th scope="row">
                      {c.name}
                      <small>{c.count} on board</small>
                    </th>
                    {journeys.map((j) => (
                      <td key={j.slug} data-label={j.title.replace('The ', '')}>
                        <Link to="/#book" className="fares__ask">
                          On request <Arrow size={14} />
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          {/* PLACEHOLDER: replace "On request" with real per-person fares when available */}
          <p className="fine">Prices are shown on request and will be confirmed by your agent at the time of booking.</p>
        </div>
      </section>
      <CtaBand title="Request your personal quote" />
    </>
  );
}

export function OffersPage() {
  // PLACEHOLDER offers: replace with real, current promotions
  const offers = [
    { tag: 'Sample offer', title: 'Early-booking benefit', text: 'Secure your preferred cabin and departure well ahead of the season.' },
    { tag: 'Sample offer', title: 'Honeymoon & anniversary', text: 'Celebrating something special? Ask us about thoughtful touches on board.' },
    { tag: 'Sample offer', title: 'Group & family travel', text: 'Travelling with family or friends? We’ll help you arrange neighbouring cabins.' },
  ];
  return (
    <>
      <PageHero
        eyebrow="Special offers"
        title="Special Offers"
        text="Ask our team about current promotions on the Maharajas’ Express."
        img={photos.dining}
        seed="offers"
        crumbs={[{ label: 'Offers' }]}
      />
      <section className="section">
        <div className="container cards-grid cards-grid--three">
          {offers.map((o, k) => (
            <Reveal key={o.title} delay={k * 0.08}>
              <article className="panel panel--tile">
                <span className="eyebrow">{o.tag}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                <Link to="/#book" className="link-btn">
                  Enquire
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
