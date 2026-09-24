export type ServiceCategory = 'all' | 'strategy' | 'photo' | 'video' | 'audio' | '3d' | 'design';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  discountPercentage: number;
  originalPriceINR: number;
  salePriceINR: number;
  isPillar: boolean;
  pillarOrder?: 1 | 2 | 3;
  image?: string;
  turnaround: string;
  deliverables: string[];
  software: string[];
  idealFor: string;
  highlightFeature: string;
  sampleOutcome?: string;
}

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  clientName: string;
  email: string;
  phone: string;
  projectScope: string;
  timeline: 'asap' | '1-2weeks' | 'flexible';
  budgetPreference: string;
}
