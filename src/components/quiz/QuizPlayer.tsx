'use client';

import { Quiz, QuizQuestion } from '@/lib/quizzes/quizzes-data';
import { useState } from 'react';

interface QuizPlayerProps {
  quiz: Quiz;
  onComplete: (score: number, passed: boolean) => void;
}

export default function QuizPlayer({ quiz, onComplete }: QuizPlayerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit * 60); // convert to seconds

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isAnswered = selectedAnswers[currentQuestion.id];
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelectAnswer = (optionId: string) => {
    if (!quizCompleted) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: optionId,
      }));
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    quiz.questions.forEach((question) => {
      const selectedOptionId = selectedAnswers[question.id];
      const selectedOption = question.options.find(
        (opt) => opt.id === selectedOptionId
      );
      if (selectedOption?.isCorrect) {
        correctCount++;
      }
    });

    const calculatedScore = Math.round(
      (correctCount / quiz.questions.length) * 100
    );
    setScore(calculatedScore);
    setQuizCompleted(true);

    const passed = calculatedScore >= quiz.passingScore;
    onComplete(calculatedScore, passed);
  };

  const calculateProgress = () => {
    return ((answeredCount / quiz.questions.length) * 100).toFixed(0);
  };

  const selectedOption = currentQuestion.options.find(
    (opt) => opt.id === selectedAnswers[currentQuestion.id]
  );

  if (quizCompleted) {
    const passed = score >= quiz.passingScore;
    const correctAnswers = Object.entries(selectedAnswers).filter(
      ([questionId, optionId]) => {
        const question = quiz.questions.find((q) => q.id === questionId);
        const option = question?.options.find((opt) => opt.id === optionId);
        return option?.isCorrect;
      }
    ).length;

    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <div
          className={`rounded-lg p-8 text-center mb-8 ${
            passed
              ? 'bg-green-100 border-l-4 border-green-500'
              : 'bg-red-100 border-l-4 border-red-500'
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-2 ${
              passed ? 'text-green-800' : 'text-red-800'
            }`}
          >
            {passed ? '¡Congratulaciones! ✓' : 'Necesitas mejorar'}
          </h2>
          <p
            className={`text-lg mb-4 ${
              passed ? 'text-green-700' : 'text-red-700'
            }`}
          >
            Puntuación: {score}% ({correctAnswers}/{quiz.questions.length}{' '}
            correctas)
          </p>
          <p
            className={`text-sm ${
              passed ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {passed
              ? `Excelente trabajo. Has superado la puntuación mínima de ${quiz.passingScore}%.`
              : `Necesitas una puntuación mínima de ${quiz.passingScore}% para pasar. Intenta nuevamente revisando el material.`}
          </p>
        </div>

        {/* Results Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Resumen de Respuestas</h3>
          <div className="space-y-4">
            {quiz.questions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = question.options.find(
                (opt) => opt.id === userAnswer
              )?.isCorrect;

              return (
                <div
                  key={question.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    isCorrect
                      ? 'bg-green-50 border-green-500'
                      : 'bg-red-50 border-red-500'
                  }`}
                >
                  <p className="font-semibold text-gray-900 mb-2">
                    {index + 1}. {question.question}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    Tu respuesta: {' '}
                    <span
                      className={
                        isCorrect
                          ? 'text-green-700 font-semibold'
                          : 'text-red-700 font-semibold'
                      }
                    >
                      {question.options.find((opt) => opt.id === userAnswer)
                        ?.text || 'No respondida'}
                    </span>
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-gray-700">
                      Respuesta correcta:{' '}
                      <span className="text-green-700 font-semibold">
                        {question.options.find((opt) => opt.isCorrect)?.text}
                      </span>
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mt-2 italic">
                    {question.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => window.history.back()}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Volver al Tutorial
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {/* Quiz Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{quiz.title}</h1>
        <p className="text-gray-600 mb-6">{quiz.description}</p>

        {/* Progress Bar */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
          <span className="text-sm font-semibold text-gray-600">
            {answeredCount}/{quiz.questions.length}
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pregunta {currentQuestionIndex + 1} de {quiz.questions.length}
          </h2>
          <p className="text-lg text-gray-700">{currentQuestion.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswers[currentQuestion.id] === option.id;
            const isCorrect = option.isCorrect;
            const shouldShowResult = showExplanation && isSelected;

            return (
              <button
                key={option.id}
                onClick={() => handleSelectAnswer(option.id)}
                disabled={quizCompleted}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  isSelected
                    ? shouldShowResult && isCorrect
                      ? 'border-green-500 bg-green-50'
                      : shouldShowResult && !isCorrect
                        ? 'border-red-500 bg-red-50'
                        : 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? shouldShowResult && isCorrect
                          ? 'border-green-500 bg-green-500'
                          : shouldShowResult && !isCorrect
                            ? 'border-red-500 bg-red-500'
                            : 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {isSelected && (
                      <span className="text-white text-sm">✓</span>
                    )}
                  </div>
                  <span
                    className={`font-medium ${
                      isSelected
                        ? shouldShowResult
                          ? 'text-gray-900'
                          : 'text-gray-900'
                        : 'text-gray-700'
                    }`}
                  >
                    {option.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div
            className={`p-4 rounded-lg mb-6 ${
              selectedOption?.isCorrect
                ? 'bg-green-50 border-l-4 border-green-500'
                : 'bg-blue-50 border-l-4 border-blue-500'
            }`}
          >
            <p className="font-semibold text-gray-900 mb-2">
              {selectedOption?.isCorrect ? '✓ Correcto' : 'Explicación'}
            </p>
            <p className="text-gray-700">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="flex-1 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          ← Anterior
        </button>

        {currentQuestionIndex < quiz.questions.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Siguiente →
          </button>
        ) : (
          <button
            onClick={handleSubmitQuiz}
            disabled={!isAnswered}
            className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Enviar Quiz
          </button>
        )}
      </div>

      {/* Question Navigator */}
      <div className="mt-8">
        <p className="text-sm text-gray-600 mb-3">Ir a pregunta:</p>
        <div className="flex flex-wrap gap-2">
          {quiz.questions.map((question, index) => {
            const isAnswered = selectedAnswers[question.id];
            return (
              <button
                key={question.id}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  setShowExplanation(false);
                }}
                className={`w-10 h-10 rounded-full font-semibold transition-colors ${
                  currentQuestionIndex === index
                    ? 'bg-blue-500 text-white'
                    : isAnswered
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
