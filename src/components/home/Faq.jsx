import { useState } from 'react';
import Reveal from '../Reveal';
import { faqs } from '../../data/site';
import { Minus, Plus } from '../Icons';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container faq__grid">
        <Reveal className="faq__head">
          <span className="eyebrow">Good to know</span>
          <h2 className="h2">
            Frequently asked <em>questions</em>
          </h2>
          <p className="lead">Can’t find what you’re looking for? Our team is happy to help, by phone or WhatsApp.</p>
        </Reveal>

        <div className="faq__list">
          {faqs.map((f, k) => {
            const isOpen = open === k;
            return (
              <Reveal key={f.q} delay={0.04 * k} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : k)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${k}`}
                    id={`faq-btn-${k}`}
                  >
                    <span>{f.q}</span>
                    <span className="faq__icon">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
                  </button>
                </h3>
                <div id={`faq-${k}`} role="region" aria-labelledby={`faq-btn-${k}`} className="faq__panel">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
