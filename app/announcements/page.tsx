import PageHero from '@/components/PageHero';

export default function Announcements() {
  return (
    <>
      <PageHero
        title="Announcements"
        subtitle="News & Updates from Agape Academy International"
      />

      <section className="section">
        <div className="container">

          {/* ── Admissions Open ── */}
          <div style={{
            background: 'linear-gradient(135deg, var(--brand-deep) 0%, var(--brand) 100%)',
            borderRadius: 14,
            padding: '48px 52px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 40,
            marginBottom: 64,
            flexWrap: 'wrap',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -40, right: -40,
              width: 220, height: 220, borderRadius: '50%',
              background: 'rgba(255,255,255,.04)',
            }} />
            <div style={{
              position: 'absolute', bottom: -60, left: '40%',
              width: 300, height: 300, borderRadius: '50%',
              background: 'rgba(255,255,255,.03)',
            }} />
            <div style={{ position: 'relative', zIndex: 1, flex: 1, minWidth: 260 }}>
              <span style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: '#fff',
                fontSize: 10, fontWeight: 700,
                letterSpacing: '.18em', textTransform: 'uppercase',
                padding: '4px 14px', borderRadius: 20,
                marginBottom: 20,
              }}>
                Now Open
              </span>
              <h2 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-.03em',
                marginBottom: 16,
              }}>
                Admissions are Open<br />
                <em style={{ fontWeight: 400, opacity: .85 }}>2026 / 2027 Academic Year</em>
              </h2>
              <p style={{
                fontSize: 15, color: 'rgba(255,255,255,.75)',
                lineHeight: 1.8, maxWidth: 480, marginBottom: 28,
              }}>
                Applications are now being accepted for all year groups from KG3 through
                Grade 12. Join a community built on faith, academic excellence, and
                service. Limited places are available — apply early to secure your spot.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a
                  href="tel:+233554517117"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#fff', color: 'var(--brand-deep)',
                    fontWeight: 700, fontSize: 14,
                    padding: '12px 24px', borderRadius: 8,
                    textDecoration: 'none', letterSpacing: '.01em',
                  }}
                >
                  Call to Enquire
                </a>
                <a
                  href="mailto:admissions@agapeacademy.edu.gh"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(255,255,255,.12)',
                    border: '1px solid rgba(255,255,255,.2)',
                    color: '#fff',
                    fontWeight: 600, fontSize: 14,
                    padding: '12px 24px', borderRadius: 8,
                    textDecoration: 'none',
                  }}
                >
                  Email Admissions
                </a>
              </div>
            </div>
            <div style={{
              position: 'relative', zIndex: 1,
              background: 'rgba(255,255,255,.08)',
              border: '1px solid rgba(255,255,255,.12)',
              borderRadius: 12, padding: '28px 32px',
              minWidth: 220,
            }}>
              {[
                ['KG3 – Grade 6', 'Primary School'],
                ['Grade 7 – Grade 10', 'High School'],
                ['Grade 11 – Grade 12', 'Senior School'],
              ].map(([grades, level]) => (
                <div key={level} style={{
                  marginBottom: 18, paddingBottom: 18,
                  borderBottom: '1px solid rgba(255,255,255,.08)',
                }}>
                  <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 4 }}>{level}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{grades}</div>
                </div>
              ))}
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>
                Contact us at<br />
                <strong style={{ color: 'rgba(255,255,255,.85)' }}>055 451 7117</strong>
              </div>
            </div>
          </div>

          {/* ── Coding & Robotics Course ── */}
          <div className="section-header">
            <p className="eyebrow">Summer Program 2026</p>
            <h2>Coding <em>&amp; Robotics</em> Course</h2>
            <div className="section-rule" />
          </div>

          <div style={{
            border: '1px solid var(--border)',
            borderRadius: 14,
            overflow: 'hidden',
            marginBottom: 64,
          }}>
            {/* Header band */}
            <div style={{
              background: 'var(--surface-dark)',
              padding: '40px 52px',
              borderBottom: '2px solid var(--brand)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: 32, flexWrap: 'wrap',
            }}>
              <div>
                <p style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '.22em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                  marginBottom: 12,
                }}>
                  For High School Students
                </p>
                <h3 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(28px, 4vw, 46px)',
                  fontWeight: 800, color: '#fff',
                  lineHeight: 1.05, letterSpacing: '-.03em',
                  marginBottom: 14,
                }}>
                  Coding &amp; Robotics<br />
                  <em style={{ fontWeight: 400, color: 'var(--brand-mid)' }}>Summer Course</em>
                </h3>
                <p style={{
                  fontSize: 15, fontWeight: 600,
                  letterSpacing: '.06em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.5)',
                }}>
                  Build &nbsp;&middot;&nbsp; Code &nbsp;&middot;&nbsp; Innovate &nbsp;&middot;&nbsp; Lead
                </p>
              </div>
              <div style={{
                background: 'var(--brand)',
                borderRadius: 12, padding: '24px 32px',
                textAlign: 'center', minWidth: 180,
              }}>
                <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: 6 }}>Program Fee</div>
                <div style={{ fontSize: 40, fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-.03em' }}>GHS 800</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.6)', marginTop: 6 }}>per student</div>
                <div style={{
                  marginTop: 14, background: 'var(--accent)',
                  borderRadius: 6, padding: '6px 14px',
                  fontSize: 11, fontWeight: 700, color: '#fff',
                  letterSpacing: '.06em', textTransform: 'uppercase',
                }}>
                  Early Bird Before<br />June 15, 2026
                </div>
              </div>
            </div>

            {/* Content grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 0,
            }}>
              {/* What you'll learn */}
              <div style={{
                padding: '36px 40px',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
              }}>
                <p className="eyebrow" style={{ marginBottom: 20 }}>What You Will Learn</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Programming Fundamentals (Python)',
                    'Web Development Basics',
                    'Robotics & Electronics',
                    'Arduino & Sensors',
                    'Problem Solving & Logical Thinking',
                    'Capstone Project Showcase',
                  ].map(item => (
                    <li key={item} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      fontSize: 14, color: 'var(--body)',
                      lineHeight: 1.6, marginBottom: 12,
                    }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: 'var(--brand)', color: '#fff',
                        fontSize: 9, fontWeight: 700,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, marginTop: 2,
                      }}>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div style={{
                padding: '36px 40px',
                borderBottom: '1px solid var(--border)',
              }}>
                <p className="eyebrow" style={{ marginBottom: 20 }}>Programme Outcomes</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { head: 'Learn', body: 'Real-world Coding Skills' },
                    { head: 'Build', body: 'Amazing Robots & Projects' },
                    { head: 'Solve', body: 'Problems Creatively' },
                    { head: 'Prepare', body: 'For the Future of Technology' },
                  ].map(({ head, body }) => (
                    <div key={head} style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      borderRadius: 10, padding: '18px 16px',
                    }}>
                      <div style={{
                        fontFamily: 'var(--serif)',
                        fontSize: 16, fontWeight: 700,
                        color: 'var(--brand)', marginBottom: 6,
                      }}>
                        {head}
                      </div>
                      <div style={{ fontSize: 12.5, color: 'var(--body)', lineHeight: 1.5 }}>{body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Details footer */}
            <div style={{
              background: 'var(--surface-2)',
              padding: '28px 40px',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24, flexWrap: 'wrap',
              borderTop: '1px solid var(--border)',
            }}>
              <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
                {[
                  { label: 'Dates',    value: 'July 6 – August 14, 2026' },
                  { label: 'Hours',    value: '9:00 AM – 1:00 PM, Mon – Fri' },
                  { label: 'Venue',    value: 'Agape Academy International Campus' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>{value}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{
                  background: 'var(--accent)', color: '#fff',
                  fontSize: 10, fontWeight: 700, letterSpacing: '.12em',
                  textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20,
                }}>
                  Limited Slots
                </span>
                <a
                  href="tel:+233554517117"
                  className="btn btn-primary"
                  style={{ fontSize: 13, padding: '10px 22px' }}
                >
                  Enroll Now — 055 451 7117
                </a>
              </div>
            </div>
          </div>

          {/* ── Summer School 2026 ── */}
          <div className="section-header">
            <p className="eyebrow">Summer Program 2026</p>
            <h2>Summer <em>School</em></h2>
            <div className="section-rule" />
          </div>

          <div style={{
            border: '1px solid var(--border)',
            borderRadius: 14,
            overflow: 'hidden',
            marginBottom: 64,
          }}>
            {/* Header band */}
            <div style={{
              background: 'var(--surface-dark)',
              padding: '40px 52px',
              borderBottom: '2px solid var(--gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: 32, flexWrap: 'wrap',
            }}>
              <div>
                <p style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '.22em',
                  textTransform: 'uppercase', color: 'var(--accent)',
                  marginBottom: 12,
                }}>
                  A Brighter Vacation. A Better Future.
                </p>
                <h3 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(28px, 4vw, 46px)',
                  fontWeight: 800, color: '#fff',
                  lineHeight: 1.05, letterSpacing: '-.03em',
                  marginBottom: 14,
                }}>
                  Summer School<br />
                  <em style={{ fontWeight: 400, color: 'var(--gold)' }}>2026</em>
                </h3>
                <p style={{
                  fontSize: 15, color: 'rgba(255,255,255,.6)',
                  lineHeight: 1.7, maxWidth: 460, marginBottom: 0,
                }}>
                  A summer of discovery. Skills for today. Success for tomorrow.
                </p>
              </div>
              <div style={{
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 12, padding: '24px 32px',
                textAlign: 'center', minWidth: 180,
              }}>
                <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 6 }}>Cost</div>
                <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--gold)', lineHeight: 1, letterSpacing: '-.03em' }}>GHS 800</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', marginTop: 6 }}>per week</div>
                <div style={{
                  marginTop: 14,
                  background: 'rgba(255,255,255,.08)',
                  borderRadius: 6, padding: '6px 14px',
                  fontSize: 11, color: 'rgba(255,255,255,.55)',
                  letterSpacing: '.04em',
                }}>
                  Limited Spaces
                </div>
              </div>
            </div>

            {/* What we offer */}
            <div style={{ padding: '36px 52px', borderBottom: '1px solid var(--border)' }}>
              <p className="eyebrow" style={{ marginBottom: 24 }}>What We Offer</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
                {[
                  { head: 'Life Skills',      lines: ['Communicate.', 'Lead.', 'Thrive.'] },
                  { head: 'Mathematics',      lines: ['Think.', 'Solve.', 'Excel.'] },
                  { head: 'Language Skills',  lines: ['Read.', 'Write.', 'Communicate.'] },
                  { head: 'Trips',            lines: ['Discover.', 'Explore.', 'Experience.'] },
                ].map(({ head, lines }) => (
                  <div key={head} style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    padding: '22px 20px',
                    borderTop: '2px solid var(--gold)',
                  }}>
                    <div style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 14, fontWeight: 700,
                      color: 'var(--ink)', marginBottom: 10,
                      letterSpacing: '.01em',
                    }}>
                      {head}
                    </div>
                    {lines.map(l => (
                      <div key={l} style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{l}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Details footer */}
            <div style={{
              background: 'var(--surface-2)',
              padding: '28px 52px',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24, flexWrap: 'wrap',
              borderTop: '1px solid var(--border)',
            }}>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {[
                  { label: 'Dates',     value: 'June 15 – July 10, 2026' },
                  { label: 'Drop Off',  value: '7:00 AM' },
                  { label: 'Pick Up',   value: '3:00 PM' },
                  { label: 'Venue',     value: 'Agape Academy International' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>{value}</div>
                  </div>
                ))}
              </div>
              <a
                href="tel:+233554517116"
                className="btn btn-primary"
                style={{ fontSize: 13, padding: '10px 22px' }}
              >
                Enroll Now — 055 451 7116
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
