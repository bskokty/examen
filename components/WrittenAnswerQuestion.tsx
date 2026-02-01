"use client";

import { useState, useEffect } from "react";

interface WrittenAnswerQuestionProps {
  question: string;
  answer: string;
  onAnswer: (answer: string) => void;
}

export default function WrittenAnswerQuestion({
  question,
  answer,
  onAnswer,
}: WrittenAnswerQuestionProps) {
  const [text, setText] = useState(answer || "");

  useEffect(() => {
    onAnswer(text);
  }, [text, onAnswer]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{question}</h2>
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Cevabınızı buraya yazın..."
          className="w-full min-h-[200px] p-4 border-2 border-gray-200 rounded-xl focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none text-gray-800 placeholder-gray-400"
        />
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">
          {text.length} karakter
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        <span>Yazılı cevabınız otomatik olarak kaydediliyor</span>
      </div>
    </div>
  );
}
