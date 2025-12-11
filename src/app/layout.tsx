import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'IT Academy - Tutorial de Soporte TI y Administración de Sistemas',
  description:
    'Aprende los fundamentos de IT Support y System Administration con tutoriales interactivos, videos referenciales y quizzes dinámicos.',
  keywords: [
    'IT Support',
    'System Administration',
    'Tutorial',
    'Educación',
    'Tecnología',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2025 IT Academy. Tutorial interactivo de IT Support y System Administration.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Sincronizado con{' '}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                GitHub
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
