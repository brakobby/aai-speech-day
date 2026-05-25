import Image from 'next/image';
import Link from 'next/link';
import Countdown from '@/components/Countdown';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-gradient" />
        <div className="hero-topline" />

        <div className="hero-content">
          <div className="hero-logo-ring">
            <Image
              src="/logo.jpeg"
              alt="Agape Academy International"
              width={80}
              height={80}
              className="hero-logo-img"
              priority
            />
          </div>

          <p className="hero-school">Agape Academy International</p>

          <h1 className="hero-title">
            Speech &amp;<br />Prize Day<br />
            <em>2026</em>
          </h1>

          <div className="hero-rule" />

          <div className="hero-meta-row">
            <span className="hero-meta-item">6th June 2026</span>
            <span className="hero-meta-sep" />
            <span className="hero-meta-item">12:00 PM</span>
            <span className="hero-meta-sep" />
            <span className="hero-meta-item">Agape New Testament Church - east legon</span>
            <span className="hero-meta-sep" />
            <span className="hero-meta-item">Accra, Ghana</span>
          </div>

          <Countdown />

          <div className="hero-actions">
            <Link href="/programme" className="btn btn-primary">View Full Programme</Link>
            <Link href="/newsletter" className="btn btn-outline">Download Newsletter</Link>
          </div>

          <div className="hero-notice">
            <span className="notice-label">Official Notice</span>
            <p>
              The <strong>Annual Speech and Prize Giving Day</strong> of Agape Academy
              International will be held on <strong>Saturday, 6th June 2026</strong>, commencing
              at 12:00 PM. Students, parents, guardians, old students, and invited guests are
              warmly welcome to attend.
            </p>
            <p>
              <strong>Guest of Honour:</strong> To be announced. Dress code is Smart Casual.
              Parking is available within the school grounds.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-bar-inner">
          {[
            { n: '8th',   l: 'Annual Edition' },
            { n: '170+', l: 'Students Enrolled' },
            { n: '10+',    l: 'Award Categories' },
            { n: '2007',   l: 'Year Founded' },
          ].map(({ n, l }) => (
            <div key={l} className="stat-item">
              <span className="stat-number">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="about-image-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=85"
                  alt="Students receiving awards"
                  width={900}
                  height={480}
                  style={{ width: '100%', height: 480, objectFit: 'cover' }}
                />
              </div>
              <div className="about-image-corner" />
              <div className="about-image-corner-br" />
            </div>

            <div className="about-text">
              <p className="eyebrow">About the Celebration</p>
              <h2>
                A Gathering of<br /><em>Honour and Faith</em>
              </h2>
              <div className="about-rule" />
              <p>
                Each June, Agape Academy International pauses to recognise the achievements
                of its students across every discipline. The Annual Speech and Prize Giving
                Day is the school&apos;s highest public ceremony, bringing together the academic
                community, families, and dignitaries.
              </p>
              <p>
                This year&apos;s ceremony will honour students in both the Junior and Senior
                School for outstanding performance in academics, leadership, athletics,
                and service to the community. A keynote address will be delivered by a
                distinguished guest to be announced in due course.
              </p>

              <div className="about-facts">
                {[
                  { l: 'Subject Prizes',   v: '50+' },
                  { l: 'Special Awards',   v: '20+' },
                  { l: 'Departments',      v: '14' },
                  { l: 'Year Groups',      v: '9' },
                ].map(({ l, v }) => (
                  <div key={l} className="fact-card">
                    <div className="fact-label">{l}</div>
                    <div className="fact-value">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="section-sm" style={{ background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Our Foundation</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--ink)' }}>
              Faith. Knowledge. <em style={{ fontStyle: 'italic', fontWeight: 800, color: 'var(--brand)' }}>Service.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                icon: '',
                title: 'Christian Foundation',
                text: 'Our school is built on the love described in 1 Corinthians 13 — patient, kind, and enduring. Every student is seen, valued, and invested in.',
              },
              {
                icon: '',
                title: 'Academic Rigour',
                text: 'We hold our students to high academic standards while providing the pastoral support they need to achieve them. Results matter because futures depend on them.',
              },
              {
                icon: '',
                title: 'Global Citizenship',
                text: 'Our students graduate equipped for universities across four continents. We prepare them not just for exams, but for a world that demands character.',
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  padding: '28px 28px 32px',
                  borderTop: '2px solid var(--brand)',
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--ink)', marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 14.5, fontWeight: 400, lineHeight: 1.8, color: 'var(--body)' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
