import { Link } from 'react-router-dom';
import Reveal from '../Reveal';
import Img from '../Img';
import { journeys } from '../../data/site';
import { Arrow } from '../Icons';

export function JourneyCard({ j, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link to={`/journeys/${j.slug}`} className="jcard">
        <div className="jcard__media img-box">
          <Img src={j.img} alt={j.title} seed={j.slug} />
        </div>
        <span className="jcard__badge">
          {j.nights} Nights / {j.days} Days
        </span>
        <div className="jcard__body">
          <h3>{j.title}</h3>
          <p className="jcard__route">{j.route.join(' · ')}</p>
          <span className="jcard__more">
            Details <Arrow size={16} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Journeys() {
  return (
    <section className="journeys section on-dark" id="journeys">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">Four iconic routes</span>
          <h2 className="h2">
            Choose your <em>journey</em>
          </h2>
          <p className="lead">
            Each route offers a unique itinerary of vibrant cities, royal landmarks and immersive experiences.
          </p>
        </Reveal>

        <div className="jcards">
          {journeys.map((j, k) => (
            <JourneyCard key={j.slug} j={j} delay={k * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
