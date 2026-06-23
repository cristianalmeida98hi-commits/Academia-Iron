export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  recommended?: boolean;
  badge?: string;
}

export interface Lesson {
  id: string;
  name: string;
  schedule: string;
  iconName: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatarUrl: string;
}

export interface StructureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imagePlaceholderUrl: string;
}

export interface SEOMetric {
  keyword: string;
  volume: string;
  difficulty: string;
  purpose: string;
}
