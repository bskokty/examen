"use client";

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  selectedAnswer?: string;
  correctAnswer?: string;
  showCorrect?: boolean;
  onAnswer: (answer: string) => void;
}

export default function MultipleChoiceQuestion({
  question,
  options,
  selectedAnswer,
  correctAnswer,
  showCorrect = false,
  onAnswer,
}: MultipleChoiceQuestionProps) {
  return (
    <div>
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = showCorrect && option === correctAnswer;
          const isWrong = showCorrect && isSelected && option !== correctAnswer;
          const optionLabels = ["A", "B", "C", "D"];

          let buttonClass =
            "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ";
          if (isCorrect) {
            buttonClass += "border-green-500 bg-green-50 shadow-md";
          } else if (isWrong) {
            buttonClass += "border-red-500 bg-red-50 shadow-md";
          } else if (isSelected) {
            buttonClass += "border-primary-600 bg-primary-50 shadow-md";
          } else {
            buttonClass +=
              "border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50";
          }

          return (
            <button
              key={index}
              onClick={() => !showCorrect && onAnswer(option)}
              disabled={showCorrect}
              className={buttonClass}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    isCorrect
                      ? "bg-green-500 text-white"
                      : isWrong
                        ? "bg-red-500 text-white"
                        : isSelected
                          ? "bg-primary-600 text-white"
                          : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {optionLabels[index]}
                </div>
                <span className="text-gray-800 font-medium flex-1">
                  {option}
                </span>
                {isCorrect && (
                  <svg
                    className="w-6 h-6 text-green-600"
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
                )}
                {isWrong && (
                  <svg
                    className="w-6 h-6 text-red-600"
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
                )}
                {isSelected && !showCorrect && (
                  <svg
                    className="w-6 h-6 text-primary-600"
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
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
