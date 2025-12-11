'use client';

import { tutorials } from '@/lib/tutorials/tutorials-data';
import TutorialViewer from '@/components/tutorial/TutorialViewer';
import { quizzes } from '@/lib/quizzes/quizzes-data';
import QuizPlayer from '@/components/quiz/QuizPlayer';
import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function TutorialPage() {
  const params = useParams();
  const slug = params.slug as string;
  const tutorial = tutorials.find((t) => t.slug === slug);
  const quiz = quizzes.find((q) => q.tutorialId === tutorial?.id);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!tutorial) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p className="font-bold">Tutorial no encontrado</p>
          <p className="text-sm">El tutorial que buscas no existe.</p>
        </div>
        <Link
          href="/"
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  return (
    <div className="bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
            ← Volver a tutoriales
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{tutorial.category}</span>
            <span className="text-sm text-gray-600">Progreso: {showQuiz ? (quizCompleted ? '100%' : '50%') : '50%'}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div>
        {!showQuiz ? (
          <TutorialViewer
            tutorial={tutorial}
            onCompleted={() => {
              // Tutorial completado
            }}
          />
        ) : quiz ? (
          <QuizPlayer quiz={quiz} onComplete={handleQuizComplete} />
        ) : (
          <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
              <p className="font-bold">Quiz no disponible</p>
              <p className="text-sm">Aún no hay un quiz para este tutorial.</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      {!showQuiz ? (
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
            <Link
              href="/"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              ← Volver
            </Link>
            {quiz && (
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors"
              >
                Realizar Quiz →
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
            {!quizCompleted && (
              <button
                onClick={() => setShowQuiz(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                ← Volver al tutorial
              </button>
            )}
            {quizCompleted && (
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
              >
                Siguiente Tutorial →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
