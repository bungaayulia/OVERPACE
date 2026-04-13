import { AssessmentResult, ActionPlan } from '../types/assessment';

export const useAssessment = () => {
  const calculateScore = (answers: number[]): AssessmentResult => {
    const totalScore = answers.reduce((a, b) => a + b, 0);
    
    if (totalScore <= 16) {
      return {
        totalScore,
        category: 'Seimbang',
        description: 'Kamu mempertahankan keseimbangan produktivitas yang sehat. Terus jaga pola hidup ini!',
        recommendations: [
          'Pertahankan pola tidur yang teratur',
          'Monitor screen time secara konsisten',
          'Lanjutkan olahraga & aktivitas fisik'
        ]
      };
    }
    
    if (totalScore <= 33) {
      return {
        totalScore,
        category: 'Mulai Berisiko',
        description: 'Kamu mulai menunjukkan tanda-tanda produktivitas berlebih. Penting untuk segera mengambil tindakan pencegahan.',
        recommendations: [
          'Batasi screen time maksimal 5-6 jam per hari',
          'Jadwalkan istirahat setiap 2-3 jam',
          'Mulai habit tracker sederhana',
          'Tingkatkan kualitas tidur'
        ]
      };
    }
    
    return {
      totalScore,
      category: 'Toxic Productivity',
      description: 'Kamu menunjukkan tanda kelelahan akibat produktivitas berlebih yang dapat berdampak pada kesehatan mental dan fisik. Segera ambil langkah perubahan!',
      recommendations: [
        'Wajib tidur minimal 7 jam per malam',
        'Aktifkan "focus mode" tanpa gangguan',
        'Kurangi multitasking secara drastis',
        'Konsultasi dengan profesional kesehatan mental'
      ]
    };
  };

  const getActionPlan = (category: string): ActionPlan => {
    const plans: Record<string, ActionPlan> = {
      'Seimbang': {
        today: ['Tidur sebelum jam 23:00', 'Istirahat 10 menit setiap 2 jam', 'Minum air 6-8 gelas'],
        week: ['Jaga konsistensi tidur', 'Monitor screen time', 'Olahraga 3x seminggu'],
        month: ['Review pola hidup', 'Evaluasi produktivitas', 'Tingkatkan kesadaran diri']
      },
      'Mulai Berisiko': {
        today: ['Tidur sebelum jam 22:30', 'Istirahat 15 menit setiap 1.5 jam', 'Kurangi screen time 1-2 jam'],
        week: ['Buat jadwal istirahat yang ketat', 'Mulai habit tracker', 'Atur alarm tidur'],
        month: ['Evaluasi progress', 'Tingkatkan aktivitas fisik', 'Konsultasi jika perlu']
      },
      'Toxic Productivity': {
        today: ['Tidur sebelum jam 22:00 (WAJIB)', 'Istirahat 20 menit setiap jam', 'Hanya gunakan gadget 4-5 jam'],
        week: ['Buat routine tidur yang ketat', 'Lakukan meditasi daily', 'Batasi pekerjaan setelah jam 19:00'],
        month: ['Konsultasi dengan dokter/psikolog', 'Mulai terapi jika diperlukan', 'Review & sesuaikan rencana']
      }
    };
    return plans[category] || plans['Seimbang'];
  };

  return { calculateScore, getActionPlan };
};
