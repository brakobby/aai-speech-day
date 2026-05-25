'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';

type GFilter = 'all' | '2025' | '2024' | '2023' | 'ceremony';

interface Photo {
  src: string;
  label: string;
  category: string;
  filter: Exclude<GFilter, 'all'>;
  h: number;
}

const photos: Photo[] = [
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=85', label: 'Prize Giving, Main Compound',          category: '2025', filter: '2025',    h: 400 },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=85', label: 'Academic Award Presentation',          category: '2025', filter: '2025',    h: 300 },
  { src: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=700&q=85', label: 'Cultural Dance Ensemble',               category: 'Ceremony', filter: 'ceremony', h: 360 },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=85', label: 'Concert Band Performance',             category: 'Ceremony', filter: 'ceremony', h: 290 },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=700&q=85', label: 'Principal\'s Address, 2025',           category: '2025', filter: '2025',    h: 340 },
  { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=85', label: 'Prize Recipients on Stage',            category: '2025', filter: '2025',    h: 380 },
  { src: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=700&q=85', label: 'Science Innovation Exhibition',        category: '2024', filter: '2024',    h: 320 },
  { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700&q=85', label: 'Sports Gala, Regional Champions',      category: '2024', filter: '2024',    h: 360 },
  { src: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=700&q=85', label: 'Visual Arts Showcase',                 category: '2024', filter: '2024',    h: 295 },
  { src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&q=85', label: 'School Dux Presentation, 2023',        category: '2023', filter: '2023',    h: 400 },
  { src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=700&q=85', label: 'Prefect Installation Ceremony',        category: 'Ceremony', filter: 'ceremony', h: 330 },
  { src: 'https://images.unsplash.com/photo-1562516155-e0c1ee44059b?w=700&q=85', label: 'Guard of Honour, 2024',               category: 'Ceremony', filter: 'ceremony', h: 375 },
  { src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=700&q=85', label: 'Class Celebration, 2023',             category: '2023', filter: '2023',    h: 315 },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=85', label: 'Outstanding Achievement Recognition',  category: '2023', filter: '2023',    h: 340 },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=85', label: 'Academic Excellence, Year 10',        category: '2025', filter: '2025',    h: 305 },
];

const filterOpts: { id: GFilter; label: string }[] = [
  { id: 'all',      label: 'All Photos' },
  { id: '2025',     label: '2025' },
  { id: '2024',     label: '2024' },
  { id: '2023',     label: '2023' },
  { id: 'ceremony', label: 'Ceremony' },
];

export default function Gallery() {
  const [filter, setFilter] = useState<GFilter>('all');
  const [lb, setLb]         = useState<{ open: boolean; index: number }>({ open: false, index: 0 });

  const shown = filter === 'all' ? photos : photos.filter(p => p.filter === filter);
  const open  = (i: number) => setLb({ open: true, index: i });
  const close = () => setLb(s => ({ ...s, open: false }));
  const prev  = useCallback(() => setLb(s => ({ open: true, index: (s.index - 1 + shown.length) % shown.length })), [shown.length]);
  const next  = useCallback(() => setLb(s => ({ open: true, index: (s.index + 1) % shown.length })), [shown.length]);

  useEffect(() => {
    if (!lb.open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      close();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [lb.open, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lb.open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lb.open]);

  const current = shown[lb.index];

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Photography from Past Ceremonies"
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Photo Archive</p>
            <h2>Moments of <em>Celebration</em></h2>
            <div className="section-rule" />
          </div>

          <div className="gallery-filter">
            {filterOpts.map(f => (
              <button
                key={f.id}
                className={`gallery-btn${filter === f.id ? ' active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="masonry">
            {shown.map((p, i) => (
              <div key={p.src + i} className="masonry-item" onClick={() => open(i)}>
                <Image
                  src={p.src}
                  alt={p.label}
                  width={700}
                  height={p.h}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
                <div className="masonry-overlay">
                  <div>
                    <div className="masonry-label">{p.label}</div>
                    <div className="masonry-cat">{p.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="photo-submit">
            <div className="photo-submit-icon">📷</div>
            <h3>Have Photos to Contribute?</h3>
            <p>
              If you attended a previous ceremony and have photographs to share, please send
              them to our communications team. Selected images will be added to this archive.
            </p>
            <a
              href="mailto:gallery@agapeacademy.edu.gh"
              className="btn btn-primary"
            >
              Submit Photos
            </a>
          </div>
        </div>
      </section>

      <div className={`lightbox${lb.open ? ' open' : ''}`} onClick={close}>
        <button className="lb-close" onClick={close} aria-label="Close">&#x2715;</button>
        <button className="lb-arrow lb-prev" onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous">&#8249;</button>
        <button className="lb-arrow lb-next" onClick={e => { e.stopPropagation(); next(); }} aria-label="Next">&#8250;</button>
        {current && (
          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.label}
              width={1100}
              height={700}
              style={{ maxHeight: '84vh', objectFit: 'contain' }}
            />
            <div className="lb-caption">{current.label} &middot; {current.category}</div>
          </div>
        )}
      </div>
    </>
  );
}
