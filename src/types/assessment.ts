export interface Question {
  id: number;
  text: string;
  scale: number;
}

export interface AssessmentResult {
  totalScore: number;
  category: 'Seimbang' | 'Mulai Berisiko' | 'Toxic Productivity';
  description: string;
  recommendations: string[];
}

export interface ActionPlan {
  today: string[];
  week: string[];
  month: string[];
}
