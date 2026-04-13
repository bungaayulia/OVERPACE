import React, { useState } from 'react';

interface ProgressTrackingProps {
  onContinue: () => void;
}

export const ProgressTracking: React.FC<ProgressTrackingProps> = ({ onContinue }) => {
  const [days, setDays] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false
  });

  const [habits, setHabits] = useState<Record<string, boolean>>({
    sleep: false,
    water: false,
    exercise: false,
    meditation: false,
    healthy_meal: false,
    screen_time: false
  });

  const toggleDay = (day: number) => {
    setDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const toggleHabit = (habit: string) => {
    setHabits(prev => ({
      ...prev,
      [habit]: !prev[habit]
    }));
  };

  const completedDays = Object.values(days).filter(Boolean).length;
  const completedHabits = Object.values(habits).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            📈 Perkembanganmu
          </h1>
          <p className="text-gray-600 text-lg">
            Lacak progress harian dan kebiasaan positif Anda
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            📅 Progress Mingguan
          </h2>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-700">
                {completedDays} dari 7 hari
              </span>
              <span className="text-sm text-indigo-600 font-bold">
                {Math.round((completedDays / 7) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-600 h-4 rounded-full transition-all duration-300"
                style={{ width: `${(completedDays / 7) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                className={`aspect-square rounded-lg font-bold text-lg transition-all duration-200 ${
                  days[day]
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-2xl mb-1">{days[day] ? '✓' : day}</div>
                <div className="text-xs">Hari {day}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            ✅ Checklist Kebiasaan Hari Ini
          </h2>

          <div className="space-y-4">
            <label className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
              <input
                type="checkbox"
                checked={habits.sleep}
                onChange={() => toggleHabit('sleep')}
                className="w-6 h-6 text-blue-600 rounded"
              />
              <div>
                <div className="font-semibold text-gray-800">😴 Tidur 7+ jam</div>
                <div className="text-sm text-gray-600">Istirahat yang cukup untuk recovery</div>
              </div>
            </label>

            <label className="flex items-center gap-4 p-4 bg-cyan-50 rounded-lg cursor-pointer hover:bg-cyan-100 transition-colors">
              <input
                type="checkbox"
                checked={habits.water}
                onChange={() => toggleHabit('water')}
                className="w-6 h-6 text-cyan-600 rounded"
              />
              <div>
                <div className="font-semibold text-gray-800">💧 Minum 6-8 gelas air</div>
                <div className="text-sm text-gray-600">Tetap terhidrasi sepanjang hari</div>
              </div>
            </label>

            <label className="flex items-center gap-4 p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
              <input
                type="checkbox"
                checked={habits.exercise}
                onChange={() => toggleHabit('exercise')}
                className="w-6 h-6 text-green-600 rounded"
              />
              <div>
                <div className="font-semibold text-gray-800">🏃 Olahraga 30 menit</div>
                <div className="text-sm text-gray-600">Aktivitas fisik untuk kesehatan</div>
              </div>
            </label>

            <label className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
              <input
                type="checkbox"
                checked={habits.meditation}
                onChange={() => toggleHabit('meditation')}
                className="w-6 h-6 text-purple-600 rounded"
              />
              <div>
                <div className="font-semibold text-gray-800">🧘 Meditasi 10 menit</div>
                <div className="text-sm text-gray-600">Kesadaran diri dan relaksasi</div>
              </div>
            </label>

            <label className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors">
              <input
                type="checkbox"
                checked={habits.healthy_meal}
                onChange={() => toggleHabit('healthy_meal')}
                className="w-6 h-6 text-orange-600 rounded"
              />
              <div>
                <div className="font-semibold text-gray-800">🥗 Makan makanan sehat</div>
                <div className="text-sm text-gray-600">Nutrisi seimbang untuk energi</div>
              </div>
            </label>

            <label className="flex items-center gap-4 p-4 bg-red-50 rounded-lg cursor-pointer hover:bg-red-100 transition-colors">
              <input
                type="checkbox"
                checked={habits.screen_time}
                onChange={() => toggleHabit('screen_time')}
                className="w-6 h-6 text-red-600 rounded"
              />
              <div>
                <div className="font-semibold text-gray-800">📱 Batasi screen time &lt;5 jam</div>
                <div className="text-sm text-gray-600">Kurangi kelelahan mata dan mental</div>
              </div>
            </label>
          </div>

          <div className="mt-6 p-4 bg-emerald-100 border border-emerald-300 rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700">
                {completedHabits}/6 ✓
              </div>
              <p className="text-emerald-600 mt-2">
                {completedHabits === 6 
                  ? '🎉 Luar biasa! Anda mencapai semua target hari ini!' 
                  : completedHabits >= 4 
                  ? '🌟 Hampir sempurna! Lanjutkan usaha Anda!'
                  : '💪 Anda bisa melakukan lebih banyak!'}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Lihat Risiko Kesehatan →
        </button>
      </div>
    </div>
  );
};
