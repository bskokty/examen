"use client";

import { useState } from "react";
import Link from "next/link";
import { grammarReference } from "@/data/grammar";

export default function GrammarPage() {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
            Gramer Referansı
          </h1>
          <p className="text-xl text-gray-600">
            Hollandaca gramer kuralları ve örnekler
          </p>
        </div>

        {/* Grammar Sections */}
        <div className="space-y-6">
          {grammarReference.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Section Header */}
              <button
                onClick={() =>
                  setSelectedSection(
                    selectedSection === sectionIndex ? null : sectionIndex,
                  )
                }
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{section.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    selectedSection === sectionIndex ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Section Content */}
              {selectedSection === sectionIndex && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="pt-6 space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-l-4 border-primary-500"
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>

                        {/* Examples */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase">
                            Örnekler:
                          </h4>
                          <ul className="space-y-2">
                            {item.examples.map((example, exIndex) => (
                              <li
                                key={exIndex}
                                className="flex items-start gap-2 text-gray-800"
                              >
                                <span className="text-primary-600 font-bold mt-1">
                                  •
                                </span>
                                <span className="flex-1">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Notes */}
                        {item.notes && item.notes.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase">
                              Notlar:
                            </h4>
                            <ul className="space-y-2">
                              {item.notes.map((note, noteIndex) => (
                                <li
                                  key={noteIndex}
                                  className="flex items-start gap-2 text-gray-700"
                                >
                                  <span className="text-yellow-600 font-bold mt-1">
                                    ⚠
                                  </span>
                                  <span className="flex-1">{note}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
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
