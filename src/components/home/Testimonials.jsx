import { useEffect, useState } from 'react';
import Reveal from '../Reveal';
import { testimonials } from '../../data/site';
import { ChevronLeft, ChevronRight, Quote, Star } from '../Icons';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  const go = (k) => setI((k + n) % n);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 8000);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section className="testi section on-dark" id="testimonials">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">Guest stories</span>
          <h2 className="h2">
            Words from our <em>travellers</em>
          </h2>
        </Reveal>

        <Reveal
          className="testi__stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote size={64} className="testi__mark" />
          <div className="testi__track">
            {testimonials.map((t, k) => (
              <figure key={k} className={`testi__slide ${k === i ? 'is-active' : ''}`} aria-hidden={k !== i}>
                <div className="testi__stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={18} />
                  ))}
                </div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>
                    {t.from} · {t.journey}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="testi__nav">
            <button onClick={() => go(i - 1)} aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <div className="testi__dots">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  className={k === i ? 'is-active' : ''}
                  onClick={() => go(k)}
                  aria-label={`Testimonial ${k + 1}`}
                />
              ))}
            </div>
            <button onClick={() => go(i + 1)} aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
