import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../../asset/hero-1.webp';
import hero2 from '../../asset/hero-2.webp';
import hero3 from '../../asset/hero-3.webp';
import hero4 from '../../asset/hero-4.webp';
import { Award, Arrow, ChevronLeft, ChevronRight } from '../Icons';

const slides = [hero1, hero2, hero3, hero4];
const pad = (n) => String(n).padStart(2, '0');

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  const go = useCallback((n) => setI((n + slides.length) % slides.length), []);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduce) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') go(i - 1);
    if (e.key === 'ArrowRight') go(i + 1);
  };

  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1);
    touchX.current = null;
  };

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Featured journeys">
      <div
        className="hero__frame"
        tabIndex={0}
        onKeyDown={onKey}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((src, k) => (
          <div
            key={k}
            className={`hero__slide ${k === i ? 'is-active' : ''}`}
            aria-hidden={k !== i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${k + 1} of ${slides.length}`}
          >
            <img src={src} alt="" fetchpriority={k === 0 ? 'high' : 'auto'} />
          </div>
        ))}
        <div className="hero__shade" />

        <div className="hero__content">
          <span className="hero__badge">
            <Award size={16} /> World’s Leading Luxury Train
          </span>
          <h1>
            Travel India like <em>royalty</em>.
          </h1>
          <p>
            Seasonal luxury rail journeys through palaces, forts and wild tiger country, aboard the Maharajas’ Express,
            October to April.
          </p>
          <div className="hero__actions">
            <Link to="/journeys" className="btn btn--gold">
              Explore Journeys <Arrow size={16} />
            </Link>
            <Link to="/#book" className="btn btn--ghost">
              Enquire Now
            </Link>
          </div>
        </div>

        <button className="hero__arrow hero__arrow--prev" onClick={() => go(i - 1)} aria-label="Previous image">
          <ChevronLeft size={24} />
        </button>
        <button className="hero__arrow hero__arrow--next" onClick={() => go(i + 1)} aria-label="Next image">
          <ChevronRight size={24} />
        </button>

        <div className="hero__meta" aria-live="off">
          <span className="hero__count">
            <b>{pad(i + 1)}</b> / {pad(slides.length)}
          </span>
          <div className="hero__dots">
            {slides.map((_, k) => (
              <button
                key={k}
                className={k === i ? 'is-active' : ''}
                onClick={() => go(k)}
                aria-label={`Go to image ${k + 1}`}
                aria-current={k === i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
