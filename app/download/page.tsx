import Image from 'next/image';
import PageHero from '@/components/PageHero';

export default function Download() {
  return (
    <>
      <PageHero
        title="Brochure"
        subtitle="Download the Official Programme Booklet"
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Official Publications</p>
            <h2>Programme <em>Booklet</em></h2>
            <div className="section-rule" />
          </div>

          <div className="download-grid">
            <div className="booklet-preview">
              <div className="booklet-preview-img">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
                  alt="Booklet preview"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="booklet-preview-overlay">
                <Image src="/logo.jpeg" alt="Agape Academy" width={76} height={76} className="blogo" style={{ borderRadius: '50%' }} />
                <h3>
                  Speech &amp; Prize Day<br />2026
                </h3>
                <span>Official Programme Booklet</span>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,.2)', marginTop: 6, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                  28th Annual Ceremony &middot; 6th June 2026
                </span>
              </div>
            </div>

            <div className="download-info">
              <h2>
                Official <em>Programme</em><br />Booklet, 2026
              </h2>
              <p>
                The 2026 Speech and Prize Day programme booklet contains the full order of
                events, the complete prize category listing, a welcome message from the
                Principal and the Chairman of the Board of Governors, historical notes on
                the school, and the full list of prize recipients.
              </p>

              <div className="spec-grid">
                {[
                  { l: 'Format',   v: 'PDF, Print-ready' },
                  { l: 'Pages',    v: '52 pages' },
                  { l: 'Edition',  v: '28th Annual' },
                  { l: 'Date',     v: '6th June 2026' },
                  { l: 'Language', v: 'English' },
                  { l: 'Size',     v: 'A4' },
                ].map(({ l, v }) => (
                  <div key={l} className="spec-item">
                    <div className="spec-label">{l}</div>
                    <div className="spec-value">{v}</div>
                  </div>
                ))}
              </div>

              <div className="download-actions">
                <button
                  className="download-btn download-btn-primary"
                  disabled
                  style={{ opacity: .55, cursor: 'not-allowed' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <div className="download-btn-info">
                    Download Full Booklet
                    <span className="download-btn-sub">Available from 30th May 2026</span>
                  </div>
                </button>

                <button
                  className="download-btn download-btn-secondary"
                  disabled
                  style={{ opacity: .55, cursor: 'not-allowed' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                  <div className="download-btn-info">
                    Programme Order Only (2 pages)
                    <span className="download-btn-sub">Available from 30th May 2026</span>
                  </div>
                </button>

                <button
                  className="download-btn download-btn-secondary"
                  disabled
                  style={{ opacity: .55, cursor: 'not-allowed' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  <div className="download-btn-info">
                    Full Prize Winners List
                    <span className="download-btn-sub">Published on 6th June 2026</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="section-header" style={{ marginTop: 32 }}>
            <p className="eyebrow">Archive</p>
            <h2>Past <em>Editions</em></h2>
            <div className="section-rule" />
          </div>

          <div className="edition-grid">
            {[
              { year: '2025', edition: '27th Annual', pages: '48 pages' },
              { year: '2024', edition: '26th Annual', pages: '46 pages' },
              { year: '2023', edition: '25th Annual', pages: '44 pages' },
              { year: '2022', edition: '24th Annual', pages: '40 pages' },
            ].map(({ year, edition, pages }) => (
              <div key={year} className="edition-card">
                <div className="edition-year-badge">
                  <span>{year}</span>
                </div>
                <div>
                  <div className="edition-info-title">Speech &amp; Prize Day {year}</div>
                  <div className="edition-info-sub">{edition} &middot; {pages}</div>
                </div>
                <span className="edition-pdf-tag">PDF</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
