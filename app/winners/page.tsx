'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';

type Filter = 'all' | 'academic' | 'leadership' | 'sports' | 'arts' | 'special';

interface Entry {
  name?: string;
  sub?: string;
  medal: 'gold' | 'silver' | 'bronze' | 'tbd';
}

interface Card {
  icon: string;
  title: string;
  cat: string;
  filter: Exclude<Filter, 'all'>;
  entries: Entry[];
}

const cards: Card[] = [
  {
    icon: '🏆',
    title: 'The Star of Agape Award',
    cat: 'Most Outstanding Student of the Year',
    filter: 'special',
    entries: [{ medal: 'tbd' }],
  },
  {
    icon: '📖',
    title: 'School Dux, 2025/26',
    cat: 'Highest Academic Achiever',
    filter: 'academic',
    entries: [{ medal: 'tbd' }],
  },
  {
    icon: '📐',
    title: 'The Founders\' Prize for Mathematics',
    cat: 'Academic',
    filter: 'academic',
    entries: [
      { name: 'Kwame Asante-Yeboah',   sub: 'Year 9A, Elective Mathematics',    medal: 'gold' },
      { name: 'Abena Kyei-Mensah',     sub: 'Year 11, Core Mathematics',        medal: 'silver' },
      { name: 'Emmanuel Darko-Boadu',  sub: 'Year 7B',                          medal: 'bronze' },
    ],
  },
  {
    icon: '🔬',
    title: 'Excellence in Science',
    cat: 'Academic, Science Programme',
    filter: 'academic',
    entries: [
      { name: 'Ama Owusu-Frimpong',    sub: 'Year 12, Elective Biology',        medal: 'gold' },
      { name: 'Daniel Boateng-Kesse',  sub: 'Year 10, Integrated Science',      medal: 'silver' },
    ],
  },
  {
    icon: '✍️',
    title: 'Best in English Language',
    cat: 'Academic, Language Arts',
    filter: 'academic',
    entries: [
      { name: 'Efua Nyarko-Amponsah',  sub: 'Year 8A, English Language',        medal: 'gold' },
      { name: 'Kofi Adjei-Tawiah',     sub: 'Year 13, Literature in English',   medal: 'gold' },
    ],
  },
  {
    icon: '🌐',
    title: 'Best in Humanities',
    cat: 'Academic, Social Sciences',
    filter: 'academic',
    entries: [
      { name: 'Akosua Amponsah-Ntim',  sub: 'Year 9B, History and Government',  medal: 'gold' },
      { name: 'Richard Opoku-Agyei',   sub: 'Year 8, Social Studies',           medal: 'silver' },
    ],
  },
  {
    icon: '🎖',
    title: 'The Joseph Award for Leadership',
    cat: 'Leadership',
    filter: 'leadership',
    entries: [{ medal: 'tbd' }],
  },
  {
    icon: '✝',
    title: 'The Cross and Mortarboard Award',
    cat: 'Faith in Action',
    filter: 'leadership',
    entries: [
      { name: 'Nana Adjoa Frimpong',   sub: 'Year 12, School Council President',  medal: 'gold' },
    ],
  },
  {
    icon: '🤲',
    title: 'The Agape Service Medal',
    cat: 'Community Service',
    filter: 'leadership',
    entries: [
      { name: 'Yaw Mensah-Barimah',    sub: 'Environmental Stewardship Club',   medal: 'gold' },
      { name: 'Akosua Tawiah-Asante',  sub: 'Community Literacy Programme',     medal: 'silver' },
    ],
  },
  {
    icon: '💪',
    title: 'The Daniel Award',
    cat: 'Resilience and Perseverance',
    filter: 'special',
    entries: [{ medal: 'tbd' }],
  },
  {
    icon: '⚽',
    title: 'Most Outstanding Athlete',
    cat: 'Sports',
    filter: 'sports',
    entries: [
      { name: 'Bright Asare-Mensah',   sub: 'Male, 100m and 200m Sprint',       medal: 'gold' },
      { name: 'Abena Sarpong-Kwaku',   sub: 'Female, Long Jump and Relay',      medal: 'gold' },
    ],
  },
  {
    icon: '🏅',
    title: 'Team Sports Champions',
    cat: 'Sports, Collective Achievement',
    filter: 'sports',
    entries: [
      { name: 'Football Team, Under-17', sub: 'Greater Accra Regional Champions, 2025', medal: 'gold' },
      { name: 'Athletics Squad',         sub: '2nd Place, National Schools Zonal Meet',  medal: 'silver' },
    ],
  },
  {
    icon: '🎨',
    title: 'Best in Visual Arts',
    cat: 'Arts and Culture',
    filter: 'arts',
    entries: [
      { name: 'Abena Kusi-Appiah',     sub: 'Year 11, Painting and Mixed Media', medal: 'gold' },
      { name: 'Kwabena Adu-Boafo',     sub: 'Year 10, Graphic Design',          medal: 'silver' },
    ],
  },
  {
    icon: '🎵',
    title: 'Music and Performing Arts',
    cat: 'Arts and Culture',
    filter: 'arts',
    entries: [
      { name: 'Agape Academy Choir',   sub: 'National Schools Choral Festival, 1st Place', medal: 'gold' },
      { name: 'Drama Society',         sub: 'Best School Production, West Africa Schools Theatre Awards', medal: 'silver' },
    ],
  },
  {
    icon: '🔭',
    title: 'Best STEM Innovation Project',
    cat: 'Science, Technology and Engineering',
    filter: 'special',
    entries: [
      { name: 'Solar Water Monitoring System', sub: 'Year 10 STEM Team, led by P. Opoku-Bonsu', medal: 'gold' },
      { name: 'Portable Malaria Test Kit',      sub: 'Year 12 Biology Research Group',          medal: 'silver' },
    ],
  },
  {
    icon: '🌟',
    title: 'Most Promising New Student',
    cat: 'Special Recognition',
    filter: 'special',
    entries: [{ medal: 'tbd' }],
  },
];

const filters: { id: Filter; label: string }[] = [
  { id: 'all',        label: 'All Awards' },
  { id: 'academic',   label: 'Academic' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'sports',     label: 'Sports' },
  { id: 'arts',       label: 'Arts' },
  { id: 'special',    label: 'Special' },
];

const medalMap: Record<Entry['medal'], string> = {
  gold: '1st', silver: '2nd', bronze: '3rd', tbd: '?',
};

export default function Winners() {
  const [active, setActive] = useState<Filter>('all');
  const shown = active === 'all' ? cards : cards.filter(c => c.filter === active);

  return (
    <>
      <PageHero
        title="Prize Winners"
        subtitle="Award Recipients, Speech and Prize Day 2026"
      />

      <section className="section">
        <div className="container">
          <div className="winners-intro-strip">
            <span className="winners-intro-icon">🏆</span>
            <div className="winners-intro-text">
              <h2>
                The Class of{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>2025/26</span>
              </h2>
              <p>
                Recipients marked as <strong style={{ color: 'rgba(255,255,255,.6)' }}>To Be Announced</strong> will
                be revealed during the ceremony on 4th July. Subject prize winners were selected
                through end-of-year examination results and continuous assessment records.
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
                  <div className="award-card-icon">{card.icon}</div>
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
                        <div className={`award-medal medal-${e.medal}`}>
                          {medalMap[e.medal]}
                        </div>
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
