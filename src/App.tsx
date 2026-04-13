import React, { useState } from 'react';
import { Assessment } from './components/Assessment';
import { Results } from './components/Results';
import { InterventionPlan } from './components/InterventionPlan';
import { ProgressTracking } from './components/ProgressTracking';
import { HealthRisks } from './components/HealthRisks';
import { useAssessment } from './hooks/useAssessment';

type AppStep = 'assessment' | 'results' | 'intervention' | 'tracking' | 'health' | 'complete';

function App() {
  const [step, setStep] = useState<AppStep>('assessment');
  const [result, setResult] = useState<any>(null);
  const { calculateScore, getActionPlan } = useAssessment();

  const handleAssessmentComplete = (answers: number[]) => {
    const assessmentResult = calculateScore(answers);
    setResult(assessmentResult);
    setStep('results');
  };

  const handleResultsComplete = () => {
    setStep('intervention');
  };

  const handleInterventionComplete = () => {
    setStep('tracking');
  };

  const handleTrackingComplete = () => {
    setStep('health');
  };

  const handleHealthComplete = () => {
    setStep('complete');
  };

  return (
    <div className="bg-gray-50">
      {step === 'assessment' && (
        <Assessment onComplete={handleAssessmentComplete} />
      )}

      {step === 'results' && result && (
        <Results
          category={result.category}
          totalScore={result.totalScore}
          description={result.description}
          onContinue={handleResultsComplete}
        />
      )}

      {step === 'intervention' && result && (
        <InterventionPlan
          category={result.category}
          recommendations={result.recommendations}
          actionPlan={getActionPlan(result.category)}
          onContinue={handleInterventionComplete}
        />
      )}

      {step === 'tracking' && (
        <ProgressTracking onContinue={handleTrackingComplete} />
      )}

      {step === 'health' && (
        <HealthRisks onContinue={handleHealthComplete} />
      )}

      {step === 'complete' && (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-6">
          <div className="max-w-2xl text-center">
            <div className="text-8xl mb-6">🎉</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Selamat!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Anda telah menyelesaikan evaluasi toxic productivity dan memiliki rencana aksi yang jelas untuk perubahan.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Langkah Selanjutnya:</h2>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  Aktifkan notifikasi reminder untuk istirahat & tidur
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  Track progress Anda setiap hari
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🗣️</span>
                  Bagikan hasil ini dengan teman atau keluarga
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">👨‍⚕️</span>
                  Konsultasi dengan profesional jika diperlukan
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setStep('assessment');
                setResult(null);
              }}
              className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Ulas Ulang Hasil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
