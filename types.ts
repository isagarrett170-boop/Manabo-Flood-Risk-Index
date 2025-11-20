export enum RiskLevel {
  VERY_LOW = 'Very Low',
  LOW = 'Low',
  MODERATE = 'Moderate',
  HIGH = 'High',
  VERY_HIGH = 'Very High'
}

export interface BarangayData {
  name: string;
  value: number;
  rating: RiskLevel;
}

export interface MapSectionData {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // In a real deployment, these would be the uploaded assets
  tableData: BarangayData[];
  legend?: { label: string; range: string; colorClass: string }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}