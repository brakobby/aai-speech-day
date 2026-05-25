import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="page-hero-bg" />
      <div className="page-hero-topline" />
      <div className="page-hero-inner">
        <Image
          src="/logo.jpeg"
          alt="Agape Academy International"
          width={60}
          height={60}
          className="page-hero-logo"
          priority
        />
        <h1>{title}</h1>
        <div className="page-hero-rule" />
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
