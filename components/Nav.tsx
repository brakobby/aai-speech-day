'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const links = [
  { href: '/',                label: 'Home' },
  { href: '/programme',       label: 'Programme' },
  { href: '/winners',         label: 'Winners' },
  { href: '/gallery',         label: 'Gallery' },
  { href: '/newsletter',      label: 'Newsletter' },
  { href: '/announcements',   label: 'Announcements' },
];

export default function Nav() {
  const pathname = usePathname();
  const [solid, setSolid]         = useState(false);
  const [drawerOpen, setDrawer]   = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setDrawer(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <nav className={`nav${solid ? ' solid' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-brand">
            <Image
              src="/logo.jpeg"
              alt="Agape Academy International"
              width={42}
              height={42}
              className="nav-logo"
              priority
            />
            <div className="nav-brand-name">
              <strong>Agape Academy</strong>
              <span>International</span>
            </div>
          </Link>

          <div className="nav-links">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link${pathname === l.href ? ' active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <Link href="/programme" className="nav-cta">
            View Programme
          </Link>

          <button
            className="nav-burger"
            onClick={() => setDrawer(true)}
            aria-label="Open navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${drawerOpen ? ' open' : ''}`}>
        <button
          className="drawer-close"
          onClick={() => setDrawer(false)}
          aria-label="Close navigation"
        >
          &#x2715;
        </button>
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`drawer-link${pathname === l.href ? ' active' : ''}`}
            onClick={() => setDrawer(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
