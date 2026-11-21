import Reveal from '../Reveal';
import Img from '../Img';
import Flag from '../Flag';
import { contacts, photos, steps } from '../../data/site';
import { Phone, WhatsApp } from '../Icons';

export default function BookingGuide() {
  const wa = contacts.find((c) => c.whatsapp);
  const toll = contacts[0];

  return (
    <section className="guide section on-dark" id="how-to-book">
      <div className="container guide__grid">
        <Reveal className="guide__media">
          <div className="guide__arch img-box">
            <Img src={photos.train} alt="The Maharajas’ Express at a platform" seed="train" />
          </div>
          <div className="guide__seal">
            <strong>Oct – Apr</strong>
            <span>Seasonal departures</span>
          </div>
        </Reveal>

        <div className="guide__content">
          <Reveal>
            <span className="eyebrow">Booking guide</span>
            <h2 className="h2">
              How to book the Maharajas’ Express <em>online</em>
            </h2>
            <p className="lead">
              The Maharajas’ Express runs from October to April every year, with three seven-day journeys and one
              four-day journey. Booking is simple and quick.
            </p>
          </Reveal>

          <ol className="steps">
            {steps.map((s, k) => (
              <Reveal as="li" key={s.title} delay={0.08 * k}>
                <span className="steps__n">{String(k + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="callcard" delay={0.1}>
            <span className="callcard__icon">
              <Phone size={22} />
            </span>
            <div>
              <span>Speak to a travel specialist</span>
              <a href={toll.href} className="callcard__num">
                <span className="callcard__flags">
                  {toll.flags.map((f) => (
                    <Flag key={f} code={f} size={20} />
                  ))}
                </span>
                {toll.display}
              </a>
            </div>
            <a href={wa.href} target="_blank" rel="noreferrer" className="btn btn--gold btn--sm">
              <WhatsApp size={16} /> WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
