'use client';

import TutorialCard from '@/components/tutorial/TutorialCard';
import { tutorials, categories } from '@/lib/tutorials/tutorials-data';
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTutorials = selectedCategory
    ? tutorials.filter((t) => t.category === selectedCategory)
    : tutorials;

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tutorial Interactivo de Soporte TI y Administración de Sistemas
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Aprende desde cero los conceptos fundamentales de IT Support y System Administration
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg">
              <span>📚</span>
              <span>{tutorials.length} Tutoriales</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg">
              <span>🎯</span>
              <span>Quizzes Interactivos</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg">
              <span>🎥</span>
              <span>Videos Referenciales</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Categories Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`p-4 rounded-lg font-semibold transition-all text-center ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
              }`}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-lg font-semibold transition-all text-center ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
                }`}
              >
                <div className="text-2xl mb-1">{category.icon}</div>
                <div className="text-sm">{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Tutorials Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory ? selectedCategory : 'Todos los Tutoriales'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} />
            ))}
          </div>

          {filteredTutorials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No hay tutoriales en esta categoría
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            ¿Por qué este tutorial?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Aprendizaje Estructurado
              </h3>
              <p className="text-gray-600">
                Contenido organizado desde lo básico hasta lo intermedio,
                diseñado para principiantes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Videos Referenciales
              </h3>
              <p className="text-gray-600">
                Cada tema incluye videos de referencia para reforzar el
                aprendizaje visual.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Evaluación Interactiva
              </h3>
              <p className="text-gray-600">
                Quizzes al final de cada tema para validar tu comprensión con
                retroalimentación inmediata.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Elige un tutorial y comienza tu camino hacia la excelencia en IT Support.
          </p>
          <button
            onClick={() => setSelectedCategory(null)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
          >
            Ver todos los tutoriales ↓
          </button>
        </div>
      </div>
    </main>
  );
}
