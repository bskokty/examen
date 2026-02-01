"use client";

import Link from "next/link";
import { questionCategories } from "@/data/questions";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
              Examen
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Aile Birleşim Sınavı - İlk Seviye
            </p>
            <p className="text-lg text-gray-500">
              Öğretici ve interaktif sınav uygulaması
            </p>
          </div>

          {/* Question Type Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Çoktan Seçmeli
              </h3>
              <p className="text-sm text-gray-700">
                Seçenekler arasından doğru cevabı seçin
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Yazılı Cevap
              </h3>
              <p className="text-sm text-gray-700">
                Soruları yazarak cevaplayın
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Sözlü Cevap
              </h3>
              <p className="text-sm text-gray-700">Sesli olarak cevap verin</p>
            </div>
          </div>

          {/* Category Selection */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Kategori Seçin
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {Object.entries(questionCategories).map(([key, category]) => (
                <Link
                  key={key}
                  href={`/exam?category=${key}`}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 flex flex-col h-full"
                >
                  {/* Icon - Standart boyut - Daha belirgin renkler */}
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <span className="text-2xl filter drop-shadow-sm">
                      {category.icon}
                    </span>
                  </div>

                  {/* Title - Koyu, kalın, okunabilir */}
                  <h3 className="text-lg font-bold mb-2 text-gray-900 leading-tight">
                    {category.name}
                  </h3>

                  {/* Description - Koyu gri, okunabilir */}
                  <p className="text-sm mb-4 text-gray-700 leading-relaxed flex-grow">
                    {category.description}
                  </p>

                  {/* Badge - Daha canlı ve profesyonel renkler */}
                  <div className="mt-auto">
                    <div
                      className={`inline-flex items-center justify-center text-sm font-bold text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all`}
                      style={{
                        background:
                          key === "hoe"
                            ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                            : key === "wat"
                              ? "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)"
                              : key === "waar"
                                ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                                : key === "wanneer"
                                  ? "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
                                  : key === "wie"
                                    ? "linear-gradient(135deg, #ec4899 0%, #db2777 100%)"
                                    : key === "welke"
                                      ? "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)"
                                      : key === "waarom"
                                        ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
                                        : key === "sentence-completion"
                                          ? "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)"
                                          : key === "verbs"
                                            ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                                            : key === "prepositional-verbs"
                                              ? "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
                                              : "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                      }}
                    >
                      {category.tips.length} ipucu
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Start Buttons - Profesyonel Renkler */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/exam"
              className="inline-block bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:from-slate-800 hover:via-slate-900 hover:to-slate-950 transform hover:scale-105 transition-all duration-200 text-lg text-center"
            >
              Tüm Sorularla Başla
            </Link>
            <Link
              href="/learn"
              className="inline-block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 text-lg text-center"
            >
              Öğrenme Modu
            </Link>
            <Link
              href="/grammar"
              className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 text-lg text-center"
            >
              Gramer Referansı
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
