import React, { useState } from 'react';

interface AssessmentProps {
  onComplete: (answers: number[]) => void;
}

const questions = [
  'Saya sering begadang demi menyelesaikan tugas',
  'Saya merasa bersalah saat beristirahat',
  'Saya menggunakan gadget >6 jam/hari',
  'Saya sering merasa lelah meskipun tidak banyak aktivitas fisik',
  'Pola makan saya tidak teratur',
  'Saya kesulitan melepas diri dari pekerjaan',
  'Saya mengabaikan hobi atau waktu berkualitas dengan keluarga',
  'Saya sering mengerjakan banyak tugas sekaligus (multitasking)',
  'Saya merasa produktivitas saya tidak pernah cukup',
  'Saya mengalami sakit kepala atau pegal-pegal yang sering'
];

export const Assessment: React.FC<AssessmentProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(0));
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🧠 Cek Kondisi Produktivitasmu
          </h1>
          <p className="text-gray-600">Mari kita evaluasi pola produktivitas Anda</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Pertanyaan {currentQuestion + 1} dari {questions.length}
            </span>
            <span className="text-sm font-medium text-indigo-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            {questions[currentQuestion]}
          </h2>

          <div className="flex justify-between gap-3 mb-6">
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                onClick={() => handleAnswer(score)}
                className={`flex-1 py-4 px-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                  answers[currentQuestion] === score
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {score}
              </button>
            ))}
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>Sangat Tidak Setuju</span>
            <span>Sangat Setuju</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="flex-1 py-3 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            ← Sebelumnya
          </button>
          <button
            onClick={() => answers[currentQuestion] > 0 && setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
            disabled={answers[currentQuestion] === 0 || currentQuestion === questions.length - 1}
            className="flex-1 py-3 px-4 rounded-lg bg-indigo-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700"
          >
            Selanjutnya →
          </button>
        </div>
      </div>
    </div>
  );
};
