'use client';

import { Tutorial } from '@/lib/tutorials/tutorials-data';
import Link from 'next/link';

interface TutorialCardProps {
  tutorial: Tutorial;
}

export default function TutorialCard({ tutorial }: TutorialCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  return (
    <Link href={`/tutorials/${tutorial.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-4xl">
          {tutorial.category === 'Fundamentos de IT'
            ? '💻'
            : tutorial.category === 'Hardware & Periféricos'
              ? '🖥️'
              : tutorial.category === 'Redes & Conectividad'
                ? '🌐'
                : tutorial.category === 'Sistemas Operativos'
                  ? '⚙️'
                  : tutorial.category === 'Seguridad & Protección'
                    ? '🔒'
                    : tutorial.category === 'Administración de Usuarios'
                      ? '👥'
                      : tutorial.category === 'Backup & Recuperación'
                        ? '💾'
                        : '🔧'}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500 uppercase">
              {tutorial.category}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                difficultyColors[tutorial.difficulty]
              }`}
            >
              {tutorial.difficulty === 'beginner'
                ? 'Principiante'
                : tutorial.difficulty === 'intermediate'
                  ? 'Intermedio'
                  : 'Avanzado'}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {tutorial.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {tutorial.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center text-gray-500 text-sm">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              Ver tutorial
            </div>
            <span className="text-gray-400 text-xs">
              {tutorial.duration} min
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
