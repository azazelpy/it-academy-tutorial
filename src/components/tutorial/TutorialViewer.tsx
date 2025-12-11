'use client';

import { Tutorial } from '@/lib/tutorials/tutorials-data';
import { useState } from 'react';

interface TutorialViewerProps {
  tutorial: Tutorial;
  onCompleted: () => void;
}

export default function TutorialViewer({
  tutorial,
  onCompleted,
}: TutorialViewerProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleMarkComplete = () => {
    setIsCompleted(true);
    onCompleted();
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
            {tutorial.category}
          </span>
          <span className="text-gray-500 text-sm">
            {tutorial.duration} minutos
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {tutorial.title}
        </h1>
        <p className="text-lg text-gray-600">{tutorial.description}</p>
      </div>

      {/* Video Section */}
      <div className="mb-8 bg-black rounded-lg overflow-hidden">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={tutorial.videoUrl}
            title={tutorial.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="prose prose-lg max-w-none">
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: tutorial.content.replace(/\n/g, '<br />'),
            }}
          />
        </div>
      </div>

      {/* Keywords */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Palabras clave
        </h3>
        <div className="flex flex-wrap gap-2">
          {tutorial.keywords.map((keyword) => (
            <span
              key={keyword}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Completion Button */}
      {!isCompleted && (
        <button
          onClick={handleMarkComplete}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors"
        >
          ✓ Marcar como completado
        </button>
      )}

      {isCompleted && (
        <div className="w-full bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
          <p className="font-semibold">✓ Tutorial completado</p>
          <p className="text-sm">
            ¡Excelente! Ahora puedes proceder al quiz para verificar tu
            comprensión.
          </p>
        </div>
      )}
    </div>
  );
}
