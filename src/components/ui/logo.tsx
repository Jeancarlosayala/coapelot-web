import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold font-sora text-primary hover:text-primary/90 transition-colors">
      Aijolot
    </Link>
  );
}
