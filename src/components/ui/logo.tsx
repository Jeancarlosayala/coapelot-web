import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center text-2xl font-sora text-foreground hover:text-foreground/80 transition-colors">
      <Image
        src="/logo_copaelot.png" // Make sure logo_copaelot.png is in your /public folder
        alt="Copaelot Ideogram"
        width={24} // Adjust width as needed for your vertical logo
        height={60} // Adjust height for a 2.5:1 vertical aspect ratio
        className="mr-2 h-auto"
        data-ai-hint="company logo vertical"
      />
      <span className="font-semibold uppercase">
        <span className="text-sky-400">COP</span>
        <span className="text-primary">AE</span>
        <span className="text-sky-400">LOT</span>
      </span>
    </Link>
  );
}
