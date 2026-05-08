import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
      <h1 className="text-6xl font-serif mb-4">404</h1>
      <p className="text-lg text-gray-500 mb-8">Хуудас олдсонгүй</p>
      <Link href="/" className="btn-luxury">Нүүр хуудас руу буцах</Link>
    </div>
  );
}
