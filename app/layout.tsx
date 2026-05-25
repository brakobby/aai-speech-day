import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import InfoStrip from '@/components/InfoStrip';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Agape Academy International — Speech & Prize Day 2026',
    template: '%s | Agape Academy International',
  },
  description:
    'The 2026 Annual Speech and Prize Giving Day of Agape Academy International. Celebrating academic excellence, character, and service.',
  openGraph: {
    siteName: 'Agape Academy International',
    title: 'Speech & Prize Day 2026',
    description:
      'The 2026 Annual Speech and Prize Giving Day of Agape Academy International.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <InfoStrip />
        <Footer />
      </body>
    </html>
  );
}
