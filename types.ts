
export interface AuditPoint {
  title: string;
  description: string;
}

export interface Recommendation {
  title: string;
  why: string;
  effort: 'Low' | 'Medium' | 'High';
}

export interface PlanItem {
  timeframe: string;
  focus: string;
  actions: string[];
}
