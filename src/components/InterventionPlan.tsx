import React, { useState } from 'react';

interface InterventionPlanProps {
  category: string;
  recommendations: string[];
  actionPlan: {
    today: string[];
    week: string[];
    month: string[];
  };
  onContinue: () => void;
}

export const InterventionPlan: React.FC<InterventionPlanProps> = ({
  category,
  recommendations,
  actionPlan,
  onContinue
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🛠️ Rencana Intervensi & Pencegahan
          </h1>
          <p className="text-gray-600 text-lg">
            Rekomendasi khusus untuk "{category}"
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            🎯 A. Intervensi yang Perlu Dilakukan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600"
              >
                <span className="text-2xl">✓</span>
                <p className="text-gray-700 font-medium">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            ⏰ B. Rencana Perubahanmu
          </h2>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📅</span>
              <h3 className="text-xl font-bold text-gray-800">Hari Ini</h3>
            </div>
            <div className="space-y-3 ml-6">
              {actionPlan.today.map((action, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={checkedItems[`today-${idx}`] || false}
                    onChange={() => toggleCheck(`today-${idx}`)}
                    className="w-5 h-5 text-indigo-600 rounded"
                  />
                  <span className={`${checkedItems[`today-${idx}`] ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {action}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📆</span>
              <h3 className="text-xl font-bold text-gray-800">Minggu Ini</h3>
            </div>
            <div className="space-y-3 ml-6">
              {actionPlan.week.map((action, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedItems[`week-${idx}`] || false}
                    onChange={() => toggleCheck(`week-${idx}`)}
                    className="w-5 h-5 text-indigo-600 rounded"
                  />
                  <span className={`${checkedItems[`week-${idx}`] ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {action}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📊</span>
              <h3 className="text-xl font-bold text-gray-800">Bulan Ini</h3>
            </div>
            <div className="space-y-3 ml-6">
              {actionPlan.month.map((action, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedItems[`month-${idx}`] || false}
                    onChange={() => toggleCheck(`month-${idx}`)}
                    className="w-5 h-5 text-indigo-600 rounded"
                  />
                  <span className={`${checkedItems[`month-${idx}`] ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {action}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            📱 C. Intervensi Digital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-3xl mb-2">⏱️</div>
              <h4 className="font-bold text-gray-800 mb-2">Screen Time Tracking</h4>
              <p className="text-sm text-gray-600">Monitor penggunaan gadget Anda setiap hari</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-3xl mb-2">🔔</div>
              <h4 className="font-bold text-gray-800 mb-2">Reminder Istirahat</h4>
              <p className="text-sm text-gray-600">Notifikasi untuk istirahat setiap jam</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-3xl mb-2">😴</div>
              <h4 className="font-bold text-gray-800 mb-2">Sleep Notification</h4>
              <p className="text-sm text-gray-600">Pengingat untuk tidur tepat waktu</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-3xl mb-2">📝</div>
              <h4 className="font-bold text-gray-800 mb-2">Daily Check-in</h4>
              <p className="text-sm text-gray-600">Evaluasi harian tentang kondisi Anda</p>
            </div>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Lihat Progress Tracking →
        </button>
      </div>
    </div>
  );
};
