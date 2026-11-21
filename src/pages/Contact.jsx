import { useState } from 'react';
import { PageHero } from '../components/PageParts';
import BookingForm from '../components/home/BookingForm';
import Reveal from '../components/Reveal';
import Flag from '../components/Flag';
import { company, contacts, photos } from '../data/site';
import { Check, Mail, Phone, Pin, WhatsApp } from '../components/Icons';

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Get in Touch"
        text="Call, WhatsApp or write to us. We’ll reply as soon as we can."
        img={photos.jaipur}
        seed="contact"
        crumbs={[{ label: 'Contact' }]}
      />
      <section className="section">
        <div className="container contact">
          <Reveal className="contact__list">
            {contacts.map((c) => (
              <a key={c.id} href={c.href} className="contact__row" {...(c.whatsapp ? { target: '_blank', rel: 'noreferrer' } : {})}>
                <span className="contact__icon">{c.whatsapp ? <WhatsApp size={20} /> : <Phone size={20} />}</span>
                <span>
                  <small>{c.label}</small>
                  <strong>{c.display}</strong>
                </span>
                <span className="contact__flags">{c.flags.map((f) => <Flag key={f} code={f} size={22} />)}</span>
              </a>
            ))}
            {company.emails.map((e) => (
              <a key={e} href={`mailto:${e}`} className="contact__row">
                <span className="contact__icon"><Mail size={20} /></span>
                <span><small>Email</small><strong>{e}</strong></span>
              </a>
            ))}
            <div className="contact__row">
              <span className="contact__icon"><Pin size={20} /></span>
              <span>
                <small>Office</small>
                <strong>{company.address.join(' ')}</strong>
              </span>
            </div>
          </Reveal>
        </div>
      </section>
      <BookingForm />
    </>
  );
}

export function FeedbackPage() {
  const [sent, setSent] = useState(false);
  const [rating, setRating] = useState(5);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send feedback to your backend
    console.log('Feedback', Object.fromEntries(new FormData(e.target)), { rating });
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Feedback"
        title="Share Your Feedback"
        text="Your thoughts help us make every journey better."
        img={photos.lounge}
        seed="feedback"
        crumbs={[{ label: 'Feedback' }]}
      />
      <section className="section">
        <div className="container container--narrow">
          {sent ? (
            <div className="panel panel--center" role="status">
              <span className="sent__icon"><Check size={30} /></span>
              <h3>Thank you for your feedback.</h3>
              <p>We appreciate you taking the time.</p>
            </div>
          ) : (
            <form className="panel bform bform--plain" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="fb-name">Your name</label>
                <input id="fb-name" name="name" required />
              </div>
              <div className="field">
                <label htmlFor="fb-email">Email</label>
                <input id="fb-email" name="email" type="email" required />
              </div>
              <div className="field field--wide">
                <label>Rating</label>
                <div className="rating" role="radiogroup" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      type="button"
                      key={n}
                      role="radio"
                      aria-checked={rating === n}
                      aria-label={`${n} star${n > 1 ? 's' : ''}`}
                      className={n <= rating ? 'is-on' : ''}
                      onClick={() => setRating(n)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="field field--wide">
                <label htmlFor="fb-msg">Your feedback</label>
                <textarea id="fb-msg" name="message" rows={5} required />
              </div>
              <button className="btn btn--maroon bform__submit" type="submit">Send Feedback</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
