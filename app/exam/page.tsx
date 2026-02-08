import { Suspense } from "react";
import type { Metadata } from "next";
import ExamContent from "./exam-content";

export const metadata: Metadata = {
  title: "Sınav - Examen",
  description: "Aile Birleşim Sınavı sorularını çözün",
};

export default function ExamPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Yükleniyor...</p>
          </div>
        </div>
      }
    >
      <ExamContent />
    </Suspense>
  );
}
