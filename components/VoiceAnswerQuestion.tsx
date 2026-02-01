"use client";

import { useState, useRef, useEffect } from "react";

interface VoiceAnswerQuestionProps {
  question: string;
  answer?: { audioBlob?: Blob; duration?: number };
  onAnswer: (answer: { audioBlob: Blob; duration: number }) => void;
}

export default function VoiceAnswerQuestion({
  question,
  answer,
  onAnswer,
}: VoiceAnswerQuestionProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasRecorded, setHasRecorded] = useState(!!answer);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const duration = recordingTime;
        onAnswer({ audioBlob, duration });
        setHasRecorded(true);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      setHasRecorded(false);

      intervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (error) {
      console.error("Mikrofon erişimi hatası:", error);
      alert(
        "Mikrofon erişimi için izin gerekli. Lütfen tarayıcı ayarlarından izin verin.",
      );
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{question}</h2>

      <div className="flex flex-col items-center justify-center py-8">
        {!hasRecorded && !isRecording && (
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
              <svg
                className="w-16 h-16 text-white"
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
            <p className="text-gray-600 mb-6">
              Kayda başlamak için butona tıklayın
            </p>
            <button
              onClick={startRecording}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Kayda Başla
            </button>
          </div>
        )}

        {isRecording && (
          <div className="text-center">
            <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg animate-pulse">
              <div className="w-20 h-20 bg-white rounded-full"></div>
            </div>
            <p className="text-3xl font-bold text-gray-800 mb-4">
              {formatTime(recordingTime)}
            </p>
            <p className="text-gray-600 mb-6">Kayıt yapılıyor...</p>
            <button
              onClick={stopRecording}
              className="bg-red-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Kaydı Durdur
            </button>
          </div>
        )}

        {hasRecorded && !isRecording && (
          <div className="text-center">
            <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-16 h-16 text-green-600"
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
            </div>
            <p className="text-gray-600 mb-2">Kayıt tamamlandı!</p>
            {answer && (
              <p className="text-sm text-gray-500 mb-6">
                Süre: {formatTime(answer.duration || 0)}
              </p>
            )}
            <button
              onClick={startRecording}
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Tekrar Kaydet
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-600 justify-center">
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
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
        <span>Mikrofon erişimi için tarayıcı izni gerekli</span>
      </div>
    </div>
  );
}
