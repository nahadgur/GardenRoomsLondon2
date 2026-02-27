import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-width py-24 text-center">
      <h1 className="text-6xl font-display font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Sorry, that page doesn&apos;t exist.</p>
      <div className="flex gap-4 justify-center">
        <Link href="/" className="btn-primary">Go Home</Link>
        <Link href="/services/" className="btn-secondary">Browse Services</Link>
      </div>
    </div>
  );
}
