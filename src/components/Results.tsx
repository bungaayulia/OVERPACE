import React from 'react';

interface ResultsProps {
  category: 'Seimbang' | 'Mulai Berisiko' | 'Toxic Productivity';
  totalScore: number;
  description: string;
  onContinue: () => void;
}

export const Results: React.FC<ResultsProps> = ({ category, totalScore, description, onContinue }) => {
  const getStatusColor = () => {
    switch (category) {
      case 'Seimbang':
        return 'from-green-500 to-emerald-600';
      case 'Mulai Berisiko':
        return 'from-yellow-500 to-orange-600';
      case 'Toxic Productivity':
        return 'from-red-500 to-rose-600';
    }
  };

  const getStatusIcon = () => {
    switch (category) {
      case 'Seimbang':
        return '✅';
      case 'Mulai Berisiko':
        return '⚠️';
      case 'Toxic Productivity':
        return '🚨';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className={`bg-gradient-to-br ${getStatusColor()} rounded-2xl shadow-2xl p-8 text-white mb-8 transform transition-all duration-300`}>
          <div className="text-6xl mb-4">{getStatusIcon()}</div>
          <h1 className="text-4xl font-bold mb-4">{category}</h1>
          <div className="text-2xl font-semibold mb-6">Skor: {totalScore}/50</div>
          <p className="text-lg leading-relaxed">{description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📊 Analisis Skor</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Skor Anda</span>
              <span className="font-bold text-lg text-indigo-600">{totalScore}/50</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full"
                style={{ width: `${(totalScore / 50) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>10</span>
              <span>Seimbang</span>
              <span>Mulai Berisiko</span>
              <span>Toxic</span>
              <span>50</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-blue-900 mb-3">📌 Apa Langkah Selanjutnya?</h3>
          <p className="text-blue-800 mb-4">
            Anda akan mendapatkan rencana aksi personal yang dirancang khusus berdasarkan hasil assessment ini.
          </p>
          <p className="text-sm text-blue-700">
            Rencana ini akan membantu Anda tidak hanya memahami kondisi, tetapi juga mengambil tindakan nyata hari ini.
          </p>
        </div>

        <button
          onClick={onContinue}
          className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Lanjut ke Rencana Aksi → 
        </button>
      </div>
    </div>
  );
};
