'use client';

import { useEffect, useState } from 'react';

const EVENT = new Date('2026-07-04T12:00:00');

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, live: false, done: false });

  useEffect(() => {
    function tick() {
      const diff = EVENT.getTime() - Date.now();
      if (diff <= 0 && diff > -10800000) {
        setT({ d: 0, h: 0, m: 0, s: 0, live: true, done: false });
        return;
      }
      if (diff <= -10800000) {
        setT({ d: 0, h: 0, m: 0, s: 0, live: false, done: true });
        return;
      }
      const total = Math.floor(diff / 1000);
      setT({
        d: Math.floor(total / 86400),
        h: Math.floor((total % 86400) / 3600),
        m: Math.floor((total % 3600) / 60),
        s: total % 60,
        live: false,
        done: false,
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (t.done) return null;

  if (t.live) {
    return (
      <div className="live-badge">
        <span className="live-dot" />
        Ceremony is Live Now
      </div>
    );
  }

  const cells = [
    { n: pad(t.d), l: 'Days' },
    { n: pad(t.h), l: 'Hours' },
    { n: pad(t.m), l: 'Minutes' },
    { n: pad(t.s), l: 'Seconds' },
  ];

  return (
    <div className="countdown">
      {cells.map(({ n, l }) => (
        <div key={l} className="cd-cell">
          <span className="cd-number">{n}</span>
          <span className="cd-label">{l}</span>
        </div>
      ))}
    </div>
  );
}
