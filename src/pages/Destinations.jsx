import { CtaBand, PageHero } from '../components/PageParts';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import { destinations, journeys, photos } from '../data/site';

export function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where the train goes"
        title="Destinations"
        text="From the Taj Mahal to tiger country, the lakes of Udaipur and the ghats of Varanasi."
        img={photos.jaipur}
        seed="destinations"
        crumbs={[{ label: 'Destinations' }]}
      />
      <section className="section">
        <div className="container">
          <div className="cards-grid cards-grid--three">
            {destinations.map((d, k) => {
              const on = journeys.filter((j) => j.route.includes(d.name));
              return (
                <Reveal key={d.name} delay={(k % 3) * 0.07}>
                  <article className="tile tile--static">
                    <div className="tile__media img-box">
                      <Img src={d.img} alt={d.name} seed={d.name} />
                    </div>
                    <div className="tile__body">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                      <small className="tile__meta">On {on.length} of 4 journeys</small>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function OtherTrainsPage() {
  const trains = [
    { name: 'Palace on Wheels', region: 'Rajasthan', text: 'A heritage luxury train circuit through royal Rajasthan.' },
    { name: 'Deccan Odyssey', region: 'Maharashtra & beyond', text: 'A luxury train journey across western India’s varied landscapes.' },
    { name: 'Golden Chariot', region: 'South India', text: 'A luxury train through the culture and heritage of the south.' },
  ];
  return (
    <>
      <PageHero
        eyebrow="More royal rails"
        title="Other Luxury Trains"
        text="India’s other great luxury train journeys. Ask us and we’ll help you plan them too."
        img={photos.train}
        seed="other-trains"
        crumbs={[{ label: 'Other Trains' }]}
      />
      <section className="section">
        <div className="container cards-grid cards-grid--three">
          {trains.map((t, k) => (
            <Reveal key={t.name} delay={k * 0.08}>
              <article className="panel panel--tile">
                <span className="eyebrow">{t.region}</span>
                <h3>{t.name}</h3>
                <p>{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title="Interested in another train?" text="Our team can advise on routes, seasons and availability." />
    </>
  );
}
