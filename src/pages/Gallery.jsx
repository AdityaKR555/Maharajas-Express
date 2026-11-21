import { useEffect, useState } from 'react';
import { CtaBand, PageHero } from '../components/PageParts';
import Img from '../components/Img';
import Reveal from '../components/Reveal';
import { destinations, photos } from '../data/site';
import { ChevronLeft, ChevronRight, Close, Play } from '../components/Icons';

const gallery = [
  ...destinations.map((d) => ({ src: d.img, label: d.name })),
  { src: photos.suite, label: 'Suite' },
  { src: photos.dining, label: 'Dining car' },
  { src: photos.lounge, label: 'Lounge' },
  { src: photos.train, label: 'The train' },
];

export function GalleryPage() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open == null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((o) => (o + 1) % gallery.length);
      if (e.key === 'ArrowLeft') setOpen((o) => (o - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Photo Gallery"
        text="A glimpse of the palaces, wildlife and suites that await."
        img={photos.udaipur}
        seed="gallery"
        crumbs={[{ label: 'Gallery' }]}
      />
      <section className="section">
        <div className="container masonry">
          {gallery.map((g, k) => (
            <Reveal key={g.label + k} delay={(k % 4) * 0.05}>
              <button className="masonry__item" onClick={() => setOpen(k)} aria-label={`Open ${g.label}`}>
                <Img src={g.src} alt={g.label} seed={g.label} />
                <span>{g.label}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {open != null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setOpen(null)}>
          <button className="lightbox__close" onClick={() => setOpen(null)} aria-label="Close">
            <Close size={22} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + gallery.length) % gallery.length);
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={26} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Img src={gallery[open].src} alt={gallery[open].label} seed={gallery[open].label} loading="eager" />
            <figcaption>{gallery[open].label}</figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % gallery.length);
            }}
            aria-label="Next"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
      <CtaBand />
    </>
  );
}

export function VideoGalleryPage() {
  // PLACEHOLDER: add real video URLs / YouTube embeds
  const videos = [
    { title: 'Welcome aboard', src: photos.train },
    { title: 'Life in the suites', src: photos.suite },
    { title: 'Tiger safari at Ranthambore', src: photos.tiger },
    { title: 'Ganga aarti, Varanasi', src: photos.varanasi },
  ];
  return (
    <>
      <PageHero
        eyebrow="Video gallery"
        title="Video Gallery"
        text="See the journey in motion."
        img={photos.train}
        seed="video"
        crumbs={[{ label: 'Video Gallery' }]}
      />
      <section className="section">
        <div className="container cards-grid">
          {videos.map((v, k) => (
            <Reveal key={v.title} delay={k * 0.06}>
              <div className="tile tile--static video">
                <div className="tile__media img-box">
                  <Img src={v.src} alt={v.title} seed={v.title} />
                  <span className="video__play">
                    <Play size={26} />
                  </span>
                </div>
                <div className="tile__body">
                  <h3>{v.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
