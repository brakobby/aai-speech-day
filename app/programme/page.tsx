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
    id: 'lower',
    label: 'Lower School',
    cols: [
      {
        head: 'KG3 and KG4',
        category: 'Lower School Awards',
        entries: [
          { label: 'Class Award',       text: 'Most Outstanding Student, KG3' },
          { label: 'Class Award',       text: 'Most Outstanding Student, KG4' },
          { label: 'Reading',           text: 'Best Reader, KG3/4' },
          { label: 'Numeracy',          text: 'Best in Numbers, KG3/4' },
          { label: 'Creativity',        text: 'Most Creative Student, KG3/4' },
          { label: 'Character',         text: 'Best Behaviour and Character Award' },
        ],
      },
      {
        head: 'KG5 Graduation',
        category: 'KG5 Completion Awards',
        entries: [
          { label: 'Dux',              text: 'KG5 Valedictorian' },
          { label: 'Best Academic',    text: 'Most Outstanding Graduate, KG5' },
          { label: 'Reading',          text: 'Best Reader, KG5' },
          { label: 'Mathematics',      text: 'Best in Mathematics, KG5' },
          { label: 'Leadership',       text: 'Most Responsible Student, KG5' },
          { label: 'Character',        text: 'Agape Spirit Award, KG5' },
        ],
      },
    ],
  },
  {
    id: 'elementary',
    label: 'Elementary',
    cols: [
      {
        head: 'Grades 1 to 3',
        category: 'Lower Elementary',
        entries: [
          { label: 'Grade 1 Overall',   text: 'Most Outstanding Student, Grade 1' },
          { label: 'Grade 2 Overall',   text: 'Most Outstanding Student, Grade 2' },
          { label: 'Grade 3 Overall',   text: 'Most Outstanding Student, Grade 3' },
          { label: 'Honor Roll',        text: 'Honor Roll Recognition, Grades 1 to 3' },
          { label: 'Science Fair',      text: 'Science Fair Awards, Class Projects' },
          { label: 'Performing Arts',   text: 'Ballet Performance Excellence Award' },
        ],
      },
      {
        head: 'Grades 4 to 6',
        category: 'Upper Elementary',
        entries: [
          { label: 'Grade 4 Overall',   text: 'Most Outstanding Student, Grade 4' },
          { label: 'Grade 5 Overall',   text: 'Most Outstanding Student, Grade 5' },
          { label: 'Grade 6 Overall',   text: 'Most Outstanding Student, Grade 6' },
          { label: 'Honor Roll',        text: 'Honor Roll Recognition, Grades 4 to 6' },
          { label: 'Science Fair',      text: 'Science Fair Awards, Upper Elementary' },
          { label: 'Arts',              text: 'Creative Arts and Dance Award' },
        ],
      },
    ],
  },
  {
    id: 'highschool',
    label: 'High School',
    cols: [
      {
        head: 'Grades 7 to 10',
        category: 'High School Academic Awards',
        entries: [
          { label: 'Grade 7 Overall',   text: 'Most Outstanding Student, Grade 7' },
          { label: 'Grade 8 Overall',   text: 'Most Outstanding Student, Grade 8' },
          { label: 'Grade 9 Overall',   text: 'Most Outstanding Student, Grade 9' },
          { label: 'Grade 10 Overall',  text: 'Most Outstanding Student, Grade 10' },
          { label: 'Honor Roll',        text: 'High School Honor Roll' },
          { label: 'Science Fair 1st',  text: 'Science Fair: 1st Place' },
          { label: 'Science Fair 2nd',  text: 'Science Fair: 2nd Place' },
          { label: 'Science Fair 3rd',  text: 'Science Fair: 3rd Place' },
        ],
      },
      {
        head: 'Subject Awards',
        category: 'Departmental Prizes',
        entries: [
          { label: 'Mathematics',       text: 'Best in Mathematics' },
          { label: 'English',           text: 'Best in English Language and Composition' },
          { label: 'Science',           text: 'Best in Science' },
          { label: 'Social Studies',    text: 'Best in History and Social Studies' },
          { label: 'ICT',               text: 'Best in Information Technology' },
          { label: 'Arts',              text: 'Best in Visual and Creative Arts' },
          { label: 'Athlete',           text: 'Student Athlete of the Year' },
          { label: 'Teams',             text: 'Team Sports Recognition Awards' },
        ],
      },
    ],
  },
  {
    id: 'grade12',
    label: 'Grade 12 Graduation',
    cols: [
      {
        head: 'Graduation Honours',
        category: 'Class of 2026',
        entries: [
          { label: 'Valedictorian',     text: 'Class of 2026 Valedictorian' },
          { label: 'Salutatorian',      text: 'Class of 2026 Salutatorian' },
          { label: 'Academic Dux',      text: 'Highest Academic Achiever, Grade 12' },
          { label: 'Leadership',        text: 'Outstanding Leadership Award' },
          { label: 'Service',           text: 'Community and School Service Award' },
          { label: 'Spirit',            text: 'Agape Spirit Award, Class of 2026' },
        ],
      },
      {
        head: 'Special Graduation Awards',
        category: 'Recognition',
        entries: [
          { label: 'Character',         text: 'Most Outstanding Character Award' },
          { label: 'Perseverance',      text: 'The Perseverance Award' },
          { label: 'Arts Excellence',   text: 'Excellence in Performing Arts' },
          { label: 'STEM',              text: 'STEM Achievement Award' },
          { label: 'Faith',             text: 'Faith in Action Award' },
          { label: 'Staff Choice',      text: 'Staff Appreciation Choice Award' },
        ],
      },
    ],
  },
];

export default function Programme() {
  const [tab, setTab] = useState('lower');

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
