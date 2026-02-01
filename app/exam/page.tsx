"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion";
import WrittenAnswerQuestion from "@/components/WrittenAnswerQuestion";
import VoiceAnswerQuestion from "@/components/VoiceAnswerQuestion";
import {
  questions,
  questionCategories,
  getQuestionsByCategory,
  Question,
  QuestionCategory,
} from "@/data/questions";

export default function ExamPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as QuestionCategory | null;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // Soruları kategoriye göre filtrele veya tümünü kullan
  const examQuestions = categoryParam
    ? getQuestionsByCategory(categoryParam)
    : questions;

  const currentQuestion = examQuestions[currentQuestionIndex];
  const progress =
    examQuestions.length > 0
      ? ((currentQuestionIndex + 1) / examQuestions.length) * 100
      : 0;

  const category = currentQuestion
    ? questionCategories[currentQuestion.category]
    : null;

  useEffect(() => {
    // İlk soruda ipucunu göster
    if (currentQuestion) {
      setShowTip(true);
    }
  }, [currentQuestionIndex]);

  const handleAnswer = (answer: any) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer,
    });

    // Çoktan seçmeli sorularda doğru cevabı kontrol et
    if (
      currentQuestion.type === "multiple-choice" &&
      currentQuestion.correctAnswer
    ) {
      if (answer === currentQuestion.correctAnswer) {
        setScore((prev) => prev + 1);
      }
      setTotalScore((prev) => prev + 1);
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
      setShowTip(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
      setShowTip(false);
    }
  };

  if (examQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sorular bulunamadı
          </h2>
          <p className="text-gray-600 mb-6">
            {categoryParam
              ? `"${categoryParam}" kategorisinde soru bulunamadı.`
              : "Soru bulunamadı."}
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    const percentage =
      totalScore > 0 ? Math.round((score / totalScore) * 100) : 0;
    const passed = percentage >= 75; // %75 geçme notu

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 flex items-center justify-center px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div
            className={`w-20 h-20 ${passed ? "bg-green-100" : "bg-orange-100"} rounded-full flex items-center justify-center mx-auto mb-6`}
          >
            {passed ? (
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-10 h-10 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            )}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            {passed ? "Tebrikler!" : "Devam Et!"}
          </h2>
          <div className="text-center mb-6">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              %{percentage}
            </div>
            <p className="text-gray-600">
              {score} / {totalScore} doğru
            </p>
            {passed ? (
              <p className="text-green-600 font-semibold mt-2">
                Sınavı geçtiniz! 🎉
              </p>
            ) : (
              <p className="text-orange-600 font-semibold mt-2">
                Daha fazla pratik yapın
              </p>
            )}
          </div>
          <div className="space-y-3">
            <button
              onClick={() => {
                setCurrentQuestionIndex(0);
                setAnswers({});
                setIsCompleted(false);
                setScore(0);
                setTotalScore(0);
                setShowExplanation(false);
                setShowTip(false);
              }}
              className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              Tekrar Başla
            </button>
            <Link
              href="/"
              className="block w-full bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-300 transition-all text-center"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Ana Sayfaya Dön Butonu */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="mb-4">
            <div
              className={`inline-flex items-center gap-3 bg-gradient-to-r ${category.color} text-white px-5 py-3 rounded-full shadow-lg border-2 border-white/20`}
            >
              <span className="text-2xl filter drop-shadow-md">
                {category.icon}
              </span>
              <span className="font-bold text-lg drop-shadow-md">
                {category.name}
              </span>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Soru {currentQuestionIndex + 1} / {examQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              %{Math.round(progress)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-primary-600 to-accent-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Tip Card */}
        {showTip && currentQuestion.tip && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm text-yellow-700 font-medium">İpucu</p>
                <p className="text-sm text-yellow-600 mt-1">
                  {currentQuestion.tip}
                </p>
              </div>
              <button
                onClick={() => setShowTip(false)}
                className="ml-3 text-yellow-400 hover:text-yellow-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          {/* Question */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {currentQuestion.question}
            </h2>
            {currentQuestion.questionDutch && (
              <p className="text-lg text-gray-500 italic mb-2">
                Telaffuz: {currentQuestion.questionDutch}
              </p>
            )}
          </div>

          {/* Answer Component */}
          {currentQuestion.type === "multiple-choice" && (
            <MultipleChoiceQuestion
              question={currentQuestion.question}
              options={currentQuestion.options || []}
              selectedAnswer={answers[currentQuestion.id]}
              correctAnswer={currentQuestion.correctAnswer}
              showCorrect={showExplanation}
              onAnswer={handleAnswer}
            />
          )}

          {currentQuestion.type === "written" && (
            <WrittenAnswerQuestion
              question={currentQuestion.question}
              answer={answers[currentQuestion.id] || ""}
              onAnswer={handleAnswer}
            />
          )}

          {currentQuestion.type === "voice" && (
            <VoiceAnswerQuestion
              question={currentQuestion.question}
              answer={answers[currentQuestion.id]}
              onAnswer={handleAnswer}
            />
          )}

          {/* Explanation */}
          {showExplanation && currentQuestion.explanation && (
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
              <p className="text-sm font-semibold text-blue-800 mb-2">
                Açıklama:
              </p>
              <p className="text-sm text-blue-700">
                {currentQuestion.explanation}
              </p>
              {currentQuestion.exampleAnswer && (
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <p className="text-sm font-semibold text-blue-800 mb-1">
                    Örnek Cevap:
                  </p>
                  <p className="text-sm text-blue-700 italic">
                    {currentQuestion.exampleAnswer}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Example Answer for Written/Voice */}
          {!showExplanation &&
            currentQuestion.exampleAnswer &&
            (currentQuestion.type === "written" ||
              currentQuestion.type === "voice") && (
              <div className="mt-6 p-4 bg-gray-50 border-l-4 border-gray-300 rounded-r-lg">
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Örnek Cevap:
                </p>
                <p className="text-sm text-gray-600 italic">
                  {currentQuestion.exampleAnswer}
                </p>
              </div>
            )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex-1 bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Önceki
          </button>
          {currentQuestion.type === "multiple-choice" && !showExplanation && (
            <button
              onClick={() => {
                if (answers[currentQuestion.id]) {
                  setShowExplanation(true);
                }
              }}
              disabled={!answers[currentQuestion.id]}
              className="flex-1 bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Cevabı Kontrol Et
            </button>
          )}
          <button
            onClick={handleNext}
            className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all"
          >
            {currentQuestionIndex === examQuestions.length - 1
              ? "Bitir"
              : "Sonraki"}
          </button>
        </div>
      </div>
    </div>
  );
}
