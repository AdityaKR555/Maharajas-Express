import { Link } from 'react-router-dom';
import logo from '../asset/logome2.png';
import Flag from './Flag';
import { company, contacts, footerLinks } from '../data/site';
import { Facebook, Instagram, LinkedIn, Mail, Phone, Pin, Pinterest, WhatsApp, XIcon, YouTube } from './Icons';

const socials = [
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'LinkedIn', icon: LinkedIn, href: '#' },
  { label: 'X', icon: XIcon, href: '#' },
  { label: 'YouTube', icon: YouTube, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'Pinterest', icon: Pinterest, href: '#' },
]; // PLACEHOLDER hrefs

export default function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="container">
        <div className="footer__top">
          <img src={logo} alt="Maharajas' Express" className="footer__logo" />
          <p className="footer__tagline">
            Personal Tours / Tailormade Journeys — authorised booking agent for India’s most luxurious train.
          </p>
        </div>

        <ul className="footer__phones">
          {contacts.map((c) => (
            <li key={c.id}>
              <a href={c.href} {...(c.whatsapp ? { target: '_blank', rel: 'noreferrer' } : {})}>
                {c.whatsapp ? <WhatsApp size={20} /> : c.flags.map((f) => <Flag key={f} code={f} size={20} />)}
                <span>{c.display}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__grid">
          <div className="footer__col footer__col--wide">
            <h4>Contact Details</h4>
            <p className="footer__row">
              <Pin size={18} />
              <span>
                {company.address[0]}
                <br />
                {company.address[1]}
              </span>
            </p>
            {company.emails.map((e) => (
              <p className="footer__row" key={e}>
                <Mail size={18} />
                <a href={`mailto:${e}`}>{e}</a>
              </p>
            ))}
            <div className="footer__badges">
              <span>IRCTC Authorised Agent</span>
              {/* PLACEHOLDER: drop ATOL / TOFT / Safe Travels badge images here */}
            </div>
            <a href="#" className="footer__play" aria-label="Get it on Google Play">
              <span>GET IT ON</span>
              <strong>Google Play</strong>
            </a>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.quick.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>The Train</h4>
            <ul>
              {footerLinks.train.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Other Trains</h4>
            <ul>
              {footerLinks.other.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="footer__sub">Other Websites</h4>
            <ul>
              <li>
                <a href={company.otherSite.href} target="_blank" rel="noreferrer">
                  {company.otherSite.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Maharaja Express. All rights reserved.</p>
          <ul className="footer__social">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a href={href} aria-label={label}>
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
