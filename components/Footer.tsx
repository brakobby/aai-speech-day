import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand-logo">
              <Image src="/logo.jpeg" alt="Agape Academy International" width={42} height={42} className="footer-logo-img" />
              <strong>Agape Academy International</strong>
            </div>
            <p className="footer-brand-desc">
              Founded on the principles of faith, scholarship, and service. Preparing students
              for a life of purpose and impact since 1998.
            </p>
          </div>

          <div className="footer-col">
            <div className="footer-col-heading">Navigate</div>
            <Link href="/">Home</Link>
            <Link href="/programme">Programme</Link>
            <Link href="/winners">Prize Winners</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/newsletter">Newsletter</Link>
            <Link href="/announcements">Announcements</Link>
          </div>

          <div className="footer-col">
            <div className="footer-col-heading">The Event</div>
            <a>Annual Speech &amp; Prize Day</a>
            <a>Saturday, 6th June 2026</a>
            <a>Ceremony at 12:00 PM</a>
            <a>Main School Compound</a>
            <a>Accra, Ghana</a>
          </div>

          <div className="footer-col">
            <div className="footer-col-heading">Contact</div>
            <a href="mailto:info@agapeacademy.edu.gh">info@agapeacademy.edu.gh</a>
            <a href="tel:+233302221234">+233 30 222 1234</a>
            <a>P.O. Box AN 14567</a>
            <a>Accra North, Ghana</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2026 Agape Academy International. All rights reserved. Designed and Developed by Agape Dev Club.
          </p>
          <p className="footer-edition">Annual Speech &amp; Prize Day &middot; MMXXVI</p>
        </div>
      </div>
    </footer>
  );
}
