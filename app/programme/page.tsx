'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';

/* ── Types ── */
type BadgeType = 'ceremony' | 'awards' | 'performance' | 'address' | 'graduation' | 'closing' | 'arrival';

interface TlItem {
  time: string;
  title: string;
  badge: BadgeType;
  details: string[];
}

interface Section {
  id: string;
  label: string;
  items: TlItem[];
}

const badgeLabel: Record<BadgeType, string> = {
  arrival:     'Arrival',
  ceremony:    'Ceremony',
  awards:      'Awards',
  performance: 'Performance',
  address:     'Address',
  graduation:  'Graduation',
  closing:     'Closing',
};

/* ── Programme data ── */
const sections: Section[] = [
  {
    id: 'arrival',
    label: 'Welcome & Arrival',
    items: [
      {
        time: '12:00 PM',
        title: 'Guest Arrival & Seating',
        badge: 'arrival',
        details: [
          'Background music slideshow featuring student memories and achievements',
          'Ushers guide families to seating',
          'Photo booth open',
        ],
      },
    ],
  },
  {
    id: 'official',
    label: 'Official Programme',
    items: [
      {
        time: '12:10 PM',
        title: 'Processional & Seating',
        badge: 'ceremony',
        details: [
          'Students and Graduating Classes seated',
          'Staff and administrators seated',
          'Opening Prayer',
        ],
      },
      {
        time: '12:15 PM',
        title: 'Opening Remarks',
        badge: 'address',
        details: [
          'Master of Ceremonies welcome',
          'Introduction of school leadership',
          'Overview of the afternoon',
        ],
      },
      {
        time: '12:20 PM',
        title: 'Invocation and Inspirational Message',
        badge: 'address',
        details: [
          'Director',
        ],
      },
      {
        time: '12:25 PM',
        title: 'National Anthem',
        badge: 'performance',
        details: [
          'Senior Choir',
        ],
      },
      {
        time: '12:30 PM',
        title: 'Lower School Performances and Awards',
        badge: 'awards',
        details: [
          'Piano Recital',
          'KG3 and KG4 Awards',
          'KG5 Graduation',
          'Junior Choir',
        ],
      },
      {
        time: '12:45 PM',
        title: 'Elementary Academic Awards',
        badge: 'awards',
        details: [
          'Grades 1, 2 and 3',
          'Piano Recital',
          'Grades 4, 5 and 6',
          'Special Awards: Honor Roll',
          'Science Fair Awards — Class Projects',
          'Ballet Performance',
        ],
      },
      {
        time: '1:10 PM',
        title: 'Senior Drama and Upper Elementary Awards',
        badge: 'performance',
        details: [
          'Senior Drama',
          'Junior Dance',
          'Upper Elementary Awards',
        ],
      },
      {
        time: '1:20 PM',
        title: 'High School Academic Awards',
        badge: 'awards',
        details: [
          'Grades 7, 8, 9 and 10',
          'Subject Awards',
          'Honor Roll',
          'Science Fair Awards: 1st, 2nd and 3rd Place',
          'Junior Dance',
        ],
      },
      {
        time: '1:32 PM',
        title: 'Extracurricular Awards',
        badge: 'awards',
        details: [
          'Team recognitions',
          'Student Athlete Award',
          'Piano Recital',
        ],
      },
      {
        time: '1:42 PM',
        title: 'Grade 12 Graduation',
        badge: 'graduation',
        details: [
          'Special Awards',
          'Robing Ceremony',
          'Valedictorian Speech',
        ],
      },
      {
        time: '1:50 PM',
        title: 'Staff Appreciation',
        badge: 'ceremony',
        details: [
          'Teacher appreciation acknowledgements',
        ],
      },
    ],
  },
  {
    id: 'closing',
    label: 'Closing Ceremony',
    items: [
      {
        time: '1:52 PM',
        title: 'Closing Remarks',
        badge: 'closing',
        details: [
          'Senior Pastor',
        ],
      },
      {
        time: '1:55 PM',
        title: 'Closing Performances',
        badge: 'performance',
        details: [
          'Junior Dance',
          'Piano Recital',
        ],
      },
      {
        time: '1:58 PM',
        title: 'Final Remarks and Benediction',
        badge: 'closing',
        details: [],
      },
      {
        time: '2:00 PM',
        title: 'Recessional and Photo Opportunities',
        badge: 'closing',
        details: [],
      },
    ],
  },
];

/* ── Prize segments ── */
const segments = [
  {
    id: 'kg',
    label: 'Kindergarten',
    cols: [
      {
        head: 'KG3 & KG4',
        category: 'Kindergarten Awards',
        entries: [
          { label: 'Overall Best',    text: 'Overall Best Student, KG3 & KG4' },
          { label: 'Best Behaved',    text: 'Best Behaved Student, KG3 & KG4' },
          { label: 'Most Helpful',    text: 'Most Helpful Student, KG3 & KG4' },
          { label: 'Neat',            text: 'Neatest Student, KG3 & KG4' },
          { label: 'Most Improved',   text: 'Most Improved Student, KG3 & KG4' },
        ],
      },
      {
        head: 'KG5',
        category: 'KG5 Awards',
        entries: [
          { label: 'Overall Best',        text: 'Overall Best Student, KG5' },
          { label: 'Best Behaved',        text: 'Best Behaved Student, KG5' },
          { label: 'Neat',               text: 'Neat / Takes Care of Books, KG5' },
          { label: 'Wonderful Writer',    text: 'Wonderful Writer, KG5' },
          { label: 'Most Helpful',        text: 'Most Helpful Student, KG5' },
          { label: 'Most Improved',       text: 'Most Improved Student, KG5' },
        ],
      },
    ],
  },
  {
    id: 'grades1to3',
    label: 'Grades 1 to 3',
    cols: [
      {
        head: 'Grades 1 & 2',
        category: 'Lower Elementary',
        entries: [
          { label: 'Overall Best',                  text: 'Overall Best Student, Grade 1 & 2' },
          { label: 'Best Behaved',                  text: 'Best Behaved Student, Grade 1 & 2' },
          { label: 'Best in Language & Phonics',    text: 'Best in Language and Phonics, Grade 1 & 2' },
          { label: 'Best in Arithmetic',            text: 'Best in Arithmetic, Grade 1 & 2' },
          { label: 'Best Reader',                   text: 'Best Reader, Grade 1 & 2' },
          { label: 'Neat',                          text: 'Neats / Takes Care of Books, Grade 1 & 2' },
          { label: 'Overcoming Challenges',         text: 'Best at Overcoming Challenges, Grade 1 & 2' },
        ],
      },
      {
        head: 'Grade 3',
        category: 'Grade 3 Awards',
        entries: [
          { label: 'Overall Best',                  text: 'Overall Best Student, Grade 3' },
          { label: 'Best Behaved',                  text: 'Best Behaved Student, Grade 3' },
          { label: 'Best in Language & Phonics',    text: 'Best in Language and Phonics, Grade 3' },
          { label: 'Best in Arithmetic',            text: 'Best in Arithmetic, Grade 3' },
          { label: 'Best Reader',                   text: 'Best Reader, Grade 3' },
          { label: 'Neat',                          text: 'Neats / Takes Care of Books, Grade 3' },
          { label: 'Most Improved',                 text: 'Most Improved Student, Grade 3' },
          { label: 'Best in ICT',                   text: 'Best in ICT, Grade 3' },
        ],
      },
    ],
  },
  {
    id: 'grades4to6',
    label: 'Grades 4 to 6',
    cols: [
      {
        head: 'Grades 4 & 5',
        category: 'Upper Elementary',
        entries: [
          { label: 'Overall Best',                  text: 'Overall Best Student, Grade 4 & 5' },
          { label: 'Best Behaved',                  text: 'Best Behaved Student, Grade 4 & 5' },
          { label: 'Best in Language & Phonics',    text: 'Best in Language and Phonics, Grade 4 & 5' },
          { label: 'Best in Arithmetic',            text: 'Best in Arithmetic, Grade 4 & 5' },
          { label: 'Best Reader',                   text: 'Best Reader, Grade 4 & 5' },
          { label: 'Neat',                          text: 'Neats / Takes Care of Books, Grade 4 & 5' },
          { label: 'Most Improved',                 text: 'Most Improved Student, Grade 4 & 5' },
          { label: 'Best in ICT',                   text: 'Best in ICT, Grade 4 & 5' },
        ],
      },
      {
        head: 'Grade 6',
        category: 'Grade 6 Awards',
        entries: [
          { label: 'Overall Best',                  text: 'Overall Best Student, Grade 6' },
          { label: 'Best Behaved',                  text: 'Best Behaved Student, Grade 6' },
          { label: 'Best in Language & Phonics',    text: 'Best in Language and Phonics, Grade 6' },
          { label: 'Best in Arithmetic',            text: 'Best in Arithmetic, Grade 6' },
          { label: 'Best Reader',                   text: 'Best Reader, Grade 6' },
          { label: 'Neat',                          text: 'Neats / Takes Care of Books, Grade 6' },
          { label: 'Most Improved',                 text: 'Most Improved Student, Grade 6' },
          { label: 'Best in ICT',                   text: 'Best in ICT, Grade 6' },
        ],
      },
    ],
  },
  {
    id: 'highschool',
    label: 'High School',
    cols: [
      {
        head: 'Grades 7, 8 & 9',
        category: 'High School Awards',
        entries: [
          { label: 'Overall Best',        text: 'Overall Best Student, Grades 7, 8 & 9' },
          { label: 'Best in Humanities',  text: 'Best in Humanities, Grades 7, 8 & 9' },
          { label: 'Best in IT',          text: 'Best in IT, Grades 7, 8 & 9' },
          { label: 'Best in Science',     text: 'Best in Science, Grades 7, 8 & 9' },
          { label: 'Best in Math',        text: 'Intermediate Math (Gr.7) / Pre-Algebra (Gr.8) / Algebra I (Gr.9)' },
          { label: 'Most Creative Writer', text: 'Most Creative Writer, Grades 7, 8 & 9' },
          { label: 'Honor Roll',          text: 'Honor Roll, Grades 7, 8 & 9' },
        ],
      },
      {
        head: 'Grade 10',
        category: 'Grade 10 Awards',
        entries: [
          { label: 'Overall Best',        text: 'Overall Best Student, Grade 10' },
          { label: 'Best in Humanities',  text: 'Best in Humanities, Grade 10' },
          { label: 'Best in IT',          text: 'Best in IT, Grade 10' },
          { label: 'Best in Science',     text: 'Best in Science, Grade 10' },
          { label: 'Best in Math',        text: 'Algebra II / Consumer Math, Grade 10' },
          { label: 'Most Creative Writer', text: 'Most Creative Writer, Grade 10' },
          { label: 'Honor Roll',          text: 'Honor Roll, Grade 10' },
        ],
      },
    ],
  },
  {
    id: 'grade12',
    label: 'Grade 12 & Special',
    cols: [
      {
        head: 'Grade 12 Recognition',
        category: 'Class of 2026',
        entries: [
          { label: 'Socially Responsible',      text: 'Ayeyi Adu-Akorsah' },
          { label: 'Giving Back to School',     text: 'Barry Ato Bert-Mensah' },
          { label: 'Class of 2026',             text: 'Ayeyi Adu-Akorsah' },
          { label: 'Class of 2026',             text: 'Ferial Iche Onuh' },
          { label: 'Class of 2026',             text: 'Aseda Adu-Akorsah' },
        ],
      },
      {
        head: 'Special Awards',
        category: 'All School',
        entries: [
          { label: 'Ghanaian History',    text: 'Best in Ghanaian History' },
          { label: 'Bible',               text: 'Bible Award (Middle / High School)' },
          { label: 'Spanish',             text: 'Best in Spanish' },
          { label: 'Music',               text: 'Best in Music' },
          { label: 'Star Pupil',          text: 'Kukua Nhyira Otubea Asamoah' },
          { label: 'Most Improved',       text: 'Ketura Baaba Tandoh' },
          { label: 'Exemplary Leader',    text: 'Ryan Kofi Anibrika' },
          { label: 'Perfect Attendance',  text: 'Petra Abena Sarpong' },
        ],
      },
    ],
  },
];

export default function Programme() {
  const [tab, setTab] = useState('kg');

  return (
    <>
      <PageHero
        title="Programme"
        subtitle="End of Year Awards Ceremony, 4th July 2026"
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Order of Events</p>
            <h2>Ceremony <em>Schedule</em></h2>
            <div className="section-rule" />
          </div>

          <div className="prog-layout">
            <div className="prog-intro-text">
              <p>
                The ceremony begins with guest seating at 12:00 PM. Official proceedings
                open at 12:10 PM. All prize recipients are asked to register at the
                Deputy Principal&apos;s office by 11:45 AM and must be in full school uniform
                or, for Grade 12 students, their graduation attire.
              </p>
              <p>
                Light refreshments will be served on the school grounds following the
                recessional. Families are encouraged to make use of the photo booth from
                arrival and again after proceedings close.
              </p>
            </div>

            <div className="prog-info-card">
              {[
                { icon: '📅', label: 'Date',        value: 'Friday, 6th June 2026' },
                { icon: '🕛', label: 'Doors Open',  value: '12:00 PM (Noon)' },
                { icon: '🕛', label: 'Start',       value: '12:10 PM (Please be seated by 12:05 PM)' },
                { icon: '🕑', label: 'Close',       value: 'Approximately 2:00 PM' },
                { icon: '📍', label: 'Venue',       value: 'Agape New Testament Church' },
                { icon: '🎟', label: 'Admission',   value: 'Open. No tickets required.' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="pinfo-row">
                  <div className="pinfo-icon">{icon}</div>
                  <div>
                    <div className="pinfo-label">{label}</div>
                    <div className="pinfo-value">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="timeline">
            {sections.map(sec => (
              <div key={sec.id}>
                <div className="tl-section-head">
                  <span className="tl-section-label">{sec.label}</span>
                  <span className="tl-section-rule" />
                </div>

                {sec.items.map((item, idx) => (
                  <div
                    key={item.time + idx}
                    className="tl-item"
                  >
                    <div className="tl-time">
                      <span className="tl-time-value">{item.time}</span>
                    </div>
                    <div className="tl-body">
                      <span className={`tl-type-badge badge-${item.badge}`}>
                        {badgeLabel[item.badge]}
                      </span>
                      <div className="tl-title">{item.title}</div>
                      {item.details.length > 0 && (
                        <div className="tl-details">
                          {item.details.map((d, i) => (
                            <span key={i} className="tl-detail">{d}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Award segments */}
          <div className="section-header">
            <p className="eyebrow">Award Categories</p>
            <h2>Prize <em>Segments</em></h2>
            <div className="section-rule" />
          </div>

          <div className="prize-tabs">
            {segments.map(s => (
              <button
                key={s.id}
                className={`prize-tab${tab === s.id ? ' active' : ''}`}
                onClick={() => setTab(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="prize-panel-wrap">
            {segments.map(s => (
              <div key={s.id} className={`prize-panel${tab === s.id ? ' active' : ''}`}>
                {s.cols.map(col => (
                  <div key={col.head} className="prize-col">
                    <div className="prize-col-head">
                      <div className="prize-col-category">{col.category}</div>
                      <div className="prize-col-title">{col.head}</div>
                    </div>
                    {col.entries.map((e, i) => (
                      <div key={i} className="prize-entry">
                        <div className="prize-entry-label">{e.label}</div>
                        <div className="prize-entry-text">{e.text}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
