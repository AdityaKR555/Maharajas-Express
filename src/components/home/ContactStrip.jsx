import Flag from '../Flag';
import Reveal from '../Reveal';
import { contacts } from '../../data/site';
import { Phone, WhatsApp } from '../Icons';

export default function ContactStrip() {
  return (
    <section className="cstrip" aria-label="Contact numbers">
      <Reveal className="container">
        <ul className="cstrip__inner">
          {contacts.map((c) => (
            <li key={c.id} className="cstrip__item">
              <a
                href={c.href}
                {...(c.whatsapp ? { target: '_blank', rel: 'noreferrer' } : {})}
                aria-label={`${c.label}: ${c.display}`}
              >
                <span className="cstrip__top">
                  <span className={`cstrip__icon ${c.whatsapp ? 'is-wa' : ''}`}>
                    {c.whatsapp ? <WhatsApp size={18} /> : <Phone size={17} />}
                  </span>
                  <span className="cstrip__flags">
                    {c.flags.map((f) => (
                      <Flag key={f} code={f} size={22} />
                    ))}
                  </span>
                </span>
                <span className="cstrip__label">{c.label}</span>
                <span className="cstrip__num">{c.display}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
