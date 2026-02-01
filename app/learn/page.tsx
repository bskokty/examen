"use client";

import { useState } from "react";
import Link from "next/link";
import { questionCategories } from "@/data/questions";

export default function LearnPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
            Öğrenme Modu
          </h1>
          <p className="text-xl text-gray-600">
            Soru kelimelerini ve ipuçlarını öğrenin
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {Object.entries(questionCategories).map(([key, category]) => (
            <div
              key={key}
              onClick={() =>
                setSelectedCategory(selectedCategory === key ? null : key)
              }
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-all duration-200 flex flex-col h-full ${
                selectedCategory === key
                  ? "ring-2 ring-primary-500 border-primary-500"
                  : ""
              }`}
            >
              {/* Icon - Standart boyut */}
              <div
                className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
              >
                <span className="text-2xl">{category.icon}</span>
              </div>

              {/* Title - Koyu, kalın, okunabilir */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                {category.name}
              </h3>

              {/* Description - Koyu gri, okunabilir */}
              <p className="text-sm text-gray-700 mb-4 leading-relaxed flex-grow">
                {category.description}
              </p>

              {/* Badge - Koyu, belirgin renk - KESINLIKLE GÖRÜNÜR */}
              <div className="mt-auto">
                <div
                  className={`inline-flex items-center justify-center text-sm font-bold text-white px-5 py-2.5 rounded-lg shadow-md`}
                  style={{
                    background:
                      key === "hoe"
                        ? "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
                        : key === "wat"
                          ? "linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)"
                          : key === "waar"
                            ? "linear-gradient(135deg, #16a34a 0%, #15803d 100%)"
                            : key === "wanneer"
                              ? "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)"
                              : key === "wie"
                                ? "linear-gradient(135deg, #db2777 0%, #be185d 100%)"
                                : key === "welke"
                                  ? "linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)"
                                  : key === "waarom"
                                    ? "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)"
                                    : key === "sentence-completion"
                                      ? "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)"
                                      : key === "verbs"
                                        ? "linear-gradient(135deg, #d97706 0%, #b45309 100%)"
                                        : key === "prepositional-verbs"
                                          ? "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)"
                                          : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  }}
                >
                  {category.tips.length} ipucu
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Display */}
        {selectedCategory &&
          questionCategories[
            selectedCategory as keyof typeof questionCategories
          ] && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${questionCategories[selectedCategory as keyof typeof questionCategories].color} rounded-full flex items-center justify-center text-white text-3xl`}
                >
                  {
                    questionCategories[
                      selectedCategory as keyof typeof questionCategories
                    ].icon
                  }
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {
                      questionCategories[
                        selectedCategory as keyof typeof questionCategories
                      ].name
                    }
                  </h2>
                  <p className="text-gray-600">
                    {
                      questionCategories[
                        selectedCategory as keyof typeof questionCategories
                      ].description
                    }
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  İpuçları:
                </h3>
                {questionCategories[
                  selectedCategory as keyof typeof questionCategories
                ].tips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 font-medium flex-1">{tip}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href={`/exam?category=${selectedCategory}`}
                  className={`inline-block bg-gradient-to-r ${questionCategories[selectedCategory as keyof typeof questionCategories].color} text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all`}
                >
                  Bu Kategoriyle Sınava Başla →
                </Link>
              </div>
            </div>
          )}

        {/* Common Mistakes Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            ⚠️ Sık Yapılan Hatalar
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-red-400 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                HOE LAAT vs WANNEER
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>HOE LAAT</strong> → Saat sorar (om ... uur)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>WANNEER</strong> → Gün/ay/yıl sorar (maandag, volgend
                jaar)
              </p>
              <div className="bg-red-50 p-3 rounded mt-2">
                <p className="text-sm text-red-700">
                  ❌ Yanlış: "Hoe laat gaat u?" → "Maandag"
                  <br />✅ Doğru: "Hoe laat gaat u?" → "Om negen uur"
                </p>
              </div>
            </div>

            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                WAT VOOR
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>WAT VOOR</strong> → Tür/çeşit sorar (meslek, ev,
                kıyafet)
              </p>
              <div className="bg-orange-50 p-3 rounded mt-2">
                <p className="text-sm text-orange-700">
                  ❌ Yanlış: "Wat voor werk?" → "Om negen uur"
                  <br />✅ Doğru: "Wat voor werk?" → "Op kantoor"
                </p>
              </div>
            </div>

            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Scheidbare Werkwoorden (Ayrılabilir Fiiller)
              </h3>
              <p className="text-gray-700 mb-2">
                Fiil ayrılır: <strong>AANKOMEN</strong> → "Ik kom morgen{" "}
                <strong>AAN</strong>"
              </p>
              <p className="text-gray-700 mb-2">
                Perfectum: ge ortada → "Ik ben aangekomen"
              </p>
              <div className="bg-blue-50 p-3 rounded mt-2">
                <p className="text-sm text-blue-700">
                  Örnek: OPSTAAN → "Ik sta op" / "Ik ben opgestaan"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-300 transition-all"
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
