'use client';

import { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';

const REVEAL = new Date('2026-06-06T15:00:00');

type Filter = 'all' | 'academic' | 'leadership' | 'special' | 'arts';

interface Entry {
  name?: string;
  sub?: string;
  medal: 'winner' | 'tbd';
}

interface Card {
  title: string;
  cat: string;
  filter: Exclude<Filter, 'all'>;
  entries: Entry[];
}

const cards: Card[] = [
  /* ── Grade 12 Recognition ── */
  {
    title: 'Socially Responsible Award',
    cat: 'Grade 12',
    filter: 'special',
    entries: [{ name: 'Ayeyi Adu-Akorsah', sub: 'Grade 12', medal: 'winner' }],
  },
  {
    title: 'Giving Back to School Community',
    cat: 'Grade 12',
    filter: 'special',
    entries: [{ name: 'Barry Ato Bert-Mensah', sub: 'Grade 12', medal: 'winner' }],
  },
  {
    title: 'Class of 2026 Recognition',
    cat: 'Grade 12',
    filter: 'special',
    entries: [
      { name: 'Ayeyi Adu-Akorsah',  sub: 'Grade 12', medal: 'winner' },
      { name: 'Ferial Iche Onuh',   sub: 'Grade 12', medal: 'winner' },
      { name: 'Aseda Adu-Akorsah',  sub: 'Grade 12', medal: 'winner' },
    ],
  },

  /* ── Special Awards ── */
  {
    title: 'Star Pupil',
    cat: 'Special Award',
    filter: 'special',
    entries: [{ name: 'Kukua Nhyira Otubea Asamoah', medal: 'winner' }],
  },
  {
    title: 'Most Improved',
    cat: 'Special Award',
    filter: 'special',
    entries: [{ name: 'Ketura Baaba Tandoh', medal: 'winner' }],
  },
  {
    title: 'Exemplary Leader',
    cat: 'Special Award — Leadership',
    filter: 'leadership',
    entries: [{ name: 'Ryan Kofi Anibrika', medal: 'winner' }],
  },
  {
    title: 'Perfect Attendance',
    cat: 'Special Award',
    filter: 'special',
    entries: [{ name: 'Petra Abena Sarpong', medal: 'winner' }],
  },

  /* ── Subject / Special — TBD ── */
  {
    title: 'Best in Ghanaian History',
    cat: 'Subject Award',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Bible Award',
    cat: 'Subject Award — Middle / High School',
    filter: 'special',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Best in Spanish',
    cat: 'Subject Award',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Best in Music',
    cat: 'Subject Award',
    filter: 'arts',
    entries: [{ medal: 'tbd' }],
  },

  /* ── Per-grade — TBD ── */
  {
    title: 'KG3 Awards',
    cat: 'Overall Best, Best Behaved, Most Helpful, Neat, Most Improved',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'KG4 Awards',
    cat: 'Overall Best, Best Behaved, Most Helpful, Neat, Most Improved',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'KG5 Awards',
    cat: 'Overall Best, Best Behaved, Neat, Wonderful Writer, Most Helpful, Most Improved',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Grade 1 Awards',
    cat: 'Overall Best, Best Behaved, Language & Phonics, Arithmetic, Best Reader, Neat, Overcoming Challenges',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Grade 2 Awards',
    cat: 'Overall Best, Best Behaved, Language & Phonics, Arithmetic, Best Reader, Neat, Overcoming Challenges',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Grade 3 Awards',
    cat: 'Overall Best, Best Behaved, Language & Phonics, Arithmetic, Best Reader, Neat, Most Improved, ICT',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Grade 4 Awards',
    cat: 'Overall Best, Best Behaved, Language & Phonics, Arithmetic, Best Reader, Neat, Most Improved, ICT',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Grade 5 Awards',
    cat: 'Overall Best, Best Behaved, Language & Phonics, Arithmetic, Best Reader, Neat, Most Improved, ICT',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Grade 6 Awards',
    cat: 'Overall Best, Best Behaved, Language & Phonics, Arithmetic, Best Reader, Neat, Most Improved, ICT',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Grade 7 Awards',
    cat: 'Overall Best, Humanities, IT, Intermediate Math, Science, Creative Writer, Honor Roll',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Grade 8 Awards',
    cat: 'Overall Best, Humanities, IT, Pre-Algebra, Science, Creative Writer, Honor Roll',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Grade 9 Awards',
    cat: 'Overall Best, Humanities, IT, Algebra I, Science, Creative Writer, Honor Roll',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    title: 'Grade 10 Awards',
    cat: 'Overall Best, Humanities, IT, Algebra II / Consumer Math, Science, Creative Writer, Honor Roll',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
];

const filters: { id: Filter; label: string }[] = [
  { id: 'all',        label: 'All Awards' },
  { id: 'special',    label: 'Special' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'academic',   label: 'Academic' },
  { id: 'arts',       label: 'Arts' },
];

export default function Winners() {
  const [active, setActive] = useState<Filter>('all');
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const check = () => setRevealed(Date.now() >= REVEAL.getTime());
    check();
    const id = setInterval(check, 30000);
    return () => clearInterval(id);
  }, []);

  const shown = active === 'all' ? cards : cards.filter(c => c.filter === active);

  if (!revealed) {
    return (
      <>
        <PageHero
          title="Prize Winners"
          subtitle="Award Recipients, Speech and Prize Day 2026"
        />
        <section className="section">
          <div className="container">
            <div style={{
              textAlign: 'center',
              padding: '80px 24px',
              maxWidth: 560,
              margin: '0 auto',
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 28px',
                fontSize: 28,
              }}>
                🔒
              </div>
              <h2 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(22px, 3.5vw, 32px)',
                fontWeight: 700,
                letterSpacing: '-.02em',
                color: 'var(--ink)',
                marginBottom: 16,
              }}>
                Results Not Yet Released
              </h2>
              <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.8, marginBottom: 8 }}>
                Prize winners will be revealed here from <strong>3:00 PM on Saturday, 6th June 2026</strong> — one hour after the ceremony closes.
              </p>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>
                Join us at the Agape New Testament Church, East Legon to witness the announcements live.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Prize Winners"
        subtitle="Award Recipients, Speech and Prize Day 2026"
      />

      <section className="section">
        <div className="container">
          <div className="winners-intro-strip">
            <div className="winners-intro-text">
              <h2>
                The Class of{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>2025/26</span>
              </h2>
              <p>
                Recipients marked as <strong style={{ color: 'rgba(0,0,0,.5)' }}>To Be Announced</strong> will
                be revealed during the ceremony on 6th June. All per-grade award winners are
                announced live at the ceremony.
              </p>
            </div>
          </div>

          <div className="filter-row">
            {filters.map(f => (
              <button
                key={f.id}
                className={`filter-btn${active === f.id ? ' active' : ''}`}
                onClick={() => setActive(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="award-grid">
            {shown.map(card => (
              <div key={card.title} className="award-card">
                <div className="award-card-head">
                  <div>
                    <div className="award-card-title">{card.title}</div>
                    <div className="award-card-cat">{card.cat}</div>
                  </div>
                </div>
                <div className="award-card-body">
                  {card.entries[0]?.medal === 'tbd' && card.entries.length === 1 ? (
                    <p className="tbd-note">To be announced at the ceremony</p>
                  ) : (
                    card.entries.map((e, i) => (
                      <div key={i} className="award-entry">
                        <div className="award-medal medal-winner" />
                        <div>
                          <div className="award-entry-name">{e.name}</div>
                          {e.sub && <div className="award-entry-sub">{e.sub}</div>}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
