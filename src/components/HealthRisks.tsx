import React from 'react';

interface HealthRisksProps {
  onContinue: () => void;
}

export const HealthRisks: React.FC<HealthRisksProps> = ({ onContinue }) => {
  const risks = [
    {
      icon: '⚖️',
      title: 'Risiko Obesitas',
      cause: 'Kurang tidur mengganggu regulasi hormon leptin dan ghrelin',
      solution: 'Tidur 7-8 jam setiap malam'
    },
    {
      icon: '🧠',
      title: 'Gangguan Metabolisme',
      cause: 'Stress kronis meningkatkan kortisol yang mempengaruhi metabolisme',
      solution: 'Kelola stress melalui meditasi dan aktivitas relaksasi'
    },
    {
      icon: '💔',
      title: 'Penyakit Kronis',
      cause: 'Pola hidup kacau meningkatkan risiko hipertensi dan diabetes',
      solution: 'Terapkan gaya hidup seimbang dengan rutinitas teratur'
    },
    {
      icon: '😰',
      title: 'Gangguan Kecemasan & Depresi',
      cause: 'Produktivitas berlebih menyebabkan burnout mental',
      solution: 'Ambil istirahat regular dan konsultasi profesional jika perlu'
    },
    {
      icon: '🔥',
      title: 'Burnout Syndrome',
      cause: 'Overwork tanpa recovery yang adekuat',
      solution: 'Set boundaries kerja dan prioritaskan self-care'
    },
    {
      icon: '👁️',
      title: 'Kerusakan Mata',
      cause: 'Screen time berlebih menyebabkan eye strain',
      solution: 'Terapkan aturan 20-20-20: istirahat setiap 20 menit'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🧬 Kenapa Ini Penting?
          </h1>
          <p className="text-gray-600 text-lg">
            Pahami dampak kesehatan dari toxic productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {risks.map((risk, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500"
            >
              <div className="text-4xl mb-3">{risk.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{risk.title}</h3>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-1">Penyebab:</h4>
                <p className="text-sm text-gray-700">{risk.cause}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-1">Solusi:</h4>
                <p className="text-sm text-green-700 font-medium">{risk.solution}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-5xl">🌍</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Dukungan dari Organisasi Internasional
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>World Health Organization (WHO)</strong> dan berbagai lembaga kesehatan internasional telah mengidentifikasi "presenteeism" (bekerja saat sakit) dan "workaholic culture" sebagai faktor risiko kesehatan publik yang signifikan.
              </p>
              <p className="text-gray-700 mb-4">
                Rekomendasi WHO untuk kesehatan mental dan fisik termasuk:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Tidur 7-9 jam setiap malam
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Aktivitas fisik minimal 150 menit per minggu
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Batasan work-life yang jelas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Istirahat dan recovery yang cukup
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-white">
            <div className="text-4xl font-bold mb-2">42%</div>
            <p className="text-sm">Pekerja mengalami burnout di seluruh dunia (WHO 2022)</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
            <div className="text-4xl font-bold mb-2">1/3</div>
            <p className="text-sm">Orang yang kurang tidur 6 jam/hari berisiko penyakit kronis</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-6 text-white">
            <div className="text-4xl font-bold mb-2">3x</div>
            <p className="text-sm">Lipat lebih tinggi risiko depresi saat stress kronis</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white mb-12 text-center">
          <p className="text-2xl font-bold leading-relaxed">
            "Produktif bukan berarti terus bergerak. <br/>
            <span className="text-yellow-300">Tapi tahu kapan harus berhenti."</span>
          </p>
        </div>

        <button
          onClick={onContinue}
          className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Mulai Perubahan Hari Ini 🚀
        </button>
      </div>
    </div>
  );
};
