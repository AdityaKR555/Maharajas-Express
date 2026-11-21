import { Link } from 'react-router-dom';
import { CtaBand, PageHero } from '../components/PageParts';
import Reveal from '../components/Reveal';
import About from '../components/home/About';
import { company, photos } from '../data/site';
import { Shield } from '../components/Icons';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Maharajas’ Express"
        text="India’s finest luxury train, and the agents who will help you board it."
        img={photos.taj}
        seed="about"
        crumbs={[{ label: 'About' }]}
      />
      <section className="section">
        <div className="container detail">
          <Reveal className="detail__route">
            <span className="eyebrow">Your booking agent</span>
            <h2 className="h2">
              Personal Tours / <em>Tailormade Journeys</em>
            </h2>
            <p className="lead">
              Personal Tours / Tailormade Journeys is the Passenger Sales Agent (PSA) – IRCTC affiliate for selling the
              packages of the Maharajas’ Express, and an authorised booking agent for the train.
            </p>
            <p className="lead">
              We’re based in the United Kingdom with dedicated lines for travellers in the USA, Canada, the UK and
              Australia, so you always speak to someone in your time zone.
            </p>
          </Reveal>
          <Reveal className="detail__side" delay={0.1}>
            <div className="panel panel--dark">
              <Shield size={28} />
              <h3>Contact</h3>
              <p className="muted-light">
                {company.address[0]} {company.address[1]}
              </p>
              <Link to="/contact" className="btn btn--gold">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <About />
      <CtaBand />
    </>
  );
}
