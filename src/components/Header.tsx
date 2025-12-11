'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl">📚</div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">IT Academy</h1>
              <p className="text-xs text-gray-600">Soporte TI & Sys Admin</p>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={`font-semibold transition-colors ${
                pathname === '/'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Tutoriales
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-semibold text-gray-800"
            >
              <span>⭐</span> GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
