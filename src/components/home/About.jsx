import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../Reveal';
import { amenities, cabins, dining, experiences, stats } from '../../data/site';
import { Arrow, Award, Check, ChevronDown, Compass, Shield, Spark, Star, Train } from '../Icons';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'suites', label: 'Suites' },
  { id: 'dining', label: 'Dining' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'experiences', label: 'Experiences' },
];

const expIcon = {
  compass: Compass,
  paw: Star,
  spark: Spark,
  star: Star,
  flame: Spark,
};

function Overview() {
  return (
    <div className="about__overview">
      <div className="prose">
        <h3>Aboard the Maharajas’ Express: the jewel of Indian rail travel</h3>
        <p>
          Operated by the Indian Railway Catering and Tourism Corporation (IRCTC), the Maharajas’ Express offers a
          sophisticated blend of tradition and luxury. Often hailed as the “Orient Express of the East”, it carries an
          award-winning legacy, including the title of “World’s Leading Luxury Train” for seven years straight and
          accolades from Condé Nast Traveler.
        </p>
        <p>
          The train operates seasonally from October to April, with curated itineraries that showcase India’s best
          cultural and historical treasures. Whether you plan a short escape or a week-long odyssey, booking is your
          gateway to an elite adventure.
        </p>
        <h3>Why choose the Maharajas’ Express?</h3>
        <p>
          From historical excursions and natural wonders to world-class service and lavish facilities, this train
          redefines luxury. Whether you are planning a honeymoon, a cultural deep-dive or a bucket-list trip, it
          delivers a safe, relaxing and regal experience.
        </p>
      </div>
      <aside className="about__awards">
        <div>
          <Award size={22} />
          <p>
            <strong>World’s Leading Luxury Train</strong>
            Seven years straight
          </p>
        </div>
        <div>
          <Star size={20} />
          <p>
            <strong>Condé Nast Traveler</strong>
            Accolades from the title
          </p>
        </div>
        <div>
          <Train size={22} />
          <p>
            <strong>Operated by IRCTC</strong>
            Indian Railway Catering and Tourism Corporation
          </p>
        </div>
      </aside>
    </div>
  );
}

function Suites() {
  return (
    <div>
      <p className="about__intro">
        With 23 elegant coaches, including 14 guest carriages, the train hosts up to 84 guests across four cabin
        categories.
      </p>
      <div className="suite-grid">
        {cabins.map((c) => (
          <Link to={`/train/${c.slug}`} key={c.slug} className="suite-tile">
            <span className="suite-tile__n">{String(c.count).padStart(2, '0')}</span>
            <span className="suite-tile__name">{c.name}</span>
            {c.note && <span className="suite-tile__note">{c.note}</span>}
            <Arrow size={16} />
          </Link>
        ))}
      </div>
      <ul className="inline-checks">
        {['Private bathrooms', 'Wi-Fi', 'Air-conditioning', 'Personalised service'].map((f) => (
          <li key={f}>
            <Check size={16} /> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Dining() {
  return (
    <div>
      <p className="about__intro">
        Enjoy gourmet meals in the Rang Mahal and Mayur Mahal dining cars, and sip fine spirits at the Rajah Club bar or
        Safari Lounge. A multilingual library adds to the cultural charm.
      </p>
      <div className="dining-grid">
        {dining.map((d) => (
          <div key={d.name} className="dining-card">
            <span>{d.kind}</span>
            <h4>{d.name}</h4>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Amenities() {
  return (
    <ul className="amenity-list">
      {amenities.map((a, k) => (
        <li key={a}>
          <span>{k % 2 ? <Shield size={20} /> : <Check size={20} />}</span>
          {a}
        </li>
      ))}
    </ul>
  );
}

function Experiences() {
  return (
    <div>
      <p className="about__intro">
        More than just travel, it’s a full cultural immersion. Guests enjoy:
      </p>
      <div className="exp-grid">
        {experiences.map((e) => {
          const Icon = expIcon[e.icon] || Star;
          return (
            <div key={e.text} className="exp-tile">
              <Icon size={24} />
              <p>{e.text}</p>
            </div>
          );
        })}
      </div>
      <p className="about__closing">
        This is your chance to relive the grandeur of India’s royal past while enjoying modern-day luxury.
      </p>
    </div>
  );
}

const panels = { overview: Overview, suites: Suites, dining: Dining, amenities: Amenities, experiences: Experiences };

export default function About() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('overview');
  const panelId = useId();
  const Panel = panels[tab];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__top">
          <Reveal className="about__heading">
            <span className="eyebrow">The Experience</span>
            <h2 className="h2">
              Maharaja Express: experience India’s finest <em>luxury train</em> journey
            </h2>
            <div className="orn">
              <i />
            </div>
          </Reveal>

          <Reveal className="about__body" delay={0.12}>
            <div className="psa">
              <span className="psa__icon">
                <Shield size={22} />
              </span>
              <p>
                <strong>Authorised booking agent</strong>
                Personal Tours / Tailormade Journeys is the Passenger Sales Agent (PSA) – IRCTC affiliate for selling
                the packages of the Maharajas’ Express, and an authorised booking agent for the train.
              </p>
            </div>

            <p className="about__text">
              The Maharajas’ Express stands as the epitome of royal travel in India, offering an unmatched luxury journey
              across the country’s most iconic destinations. Designed for those seeking elegance and grandeur, this most
              luxurious train in India brings together heritage, adventure and comfort. With world-class amenities,
              guided tours and five-star hospitality, travellers are treated to a luxury journey that mirrors the
              splendour of India’s regal past.
            </p>
            <p className="about__text about__text--soft">
              From the bustling streets of Delhi to the regal forts of Jaipur and the timeless beauty of the Taj Mahal in
              Agra, the journey unfolds a cultural tapestry like no other.
            </p>

            <button
              className="link-btn"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={panelId}
            >
              {open ? 'Read less' : 'Read more'} <ChevronDown size={16} />
            </button>
          </Reveal>
        </div>

        <Reveal className="stats" delay={0.1}>
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>

        <div id={panelId} className={`about__more ${open ? 'is-open' : ''}`} aria-hidden={!open}>
          <div>
            <div className="about__panel">
              <div className="tabs" role="tablist" aria-label="More about the train">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={tab === t.id}
                    tabIndex={open ? 0 : -1}
                    className={tab === t.id ? 'is-active' : ''}
                    onClick={() => setTab(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="tabpanel" role="tabpanel" key={tab}>
                <Panel />
              </div>
              <div className="about__cta">
                <p>Start your booking today and step into a journey that lets you explore India like royalty.</p>
                <Link to="/#book" className="btn btn--maroon">
                  Book Your Journey <Arrow size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
