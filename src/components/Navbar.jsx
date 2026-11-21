import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../asset/logome2.png';
import { nav } from '../data/site';
import { ChevronDown, Close, Menu } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [trainOpen, setTrainOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setTrainOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <Link to="/" className="nav__brand" aria-label="Maharajas' Express — home">
        <img src={logo} alt="Maharajas' Express" className="nav__logo" />
      </Link>

      <nav className="nav__links" aria-label="Primary">
        {nav.map((item) =>
          item.children ? (
            <div className="nav__item has-menu" key={item.label}>
              <NavLink to={item.to} className="nav__link">
                {item.label}
                <ChevronDown size={14} />
              </NavLink>
              <div className="nav__menu">
                {item.children.map((c) => (
                  <Link key={c.to} to={c.to}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <NavLink key={item.label} to={item.to} className="nav__link">
              {item.label}
            </NavLink>
          )
        )}
      </nav>

      <Link to="/#book" className="nav__cta">
        Book Now
      </Link>

      <button
        className="nav__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <Close size={22} /> : <Menu size={22} />}
      </button>

      <div id="mobile-menu" className={`nav__drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        {nav.map((item) =>
          item.children ? (
            <div key={item.label} className="drawer__group">
              <button
                className="drawer__link"
                onClick={() => setTrainOpen((t) => !t)}
                aria-expanded={trainOpen}
              >
                {item.label}
                <ChevronDown size={16} style={{ transform: trainOpen ? 'rotate(180deg)' : 'none', transition: 'transform .3s' }} />
              </button>
              <div className={`drawer__sub ${trainOpen ? 'is-open' : ''}`}>
                <div>
                  <Link to={item.to}>All of the train</Link>
                  {item.children.map((c) => (
                    <Link key={c.to} to={c.to}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <NavLink key={item.label} to={item.to} className="drawer__link">
              {item.label}
            </NavLink>
          )
        )}
        <Link to="/#book" className="btn btn--gold drawer__cta">
          Book Now
        </Link>
      </div>
    </header>
  );
}
