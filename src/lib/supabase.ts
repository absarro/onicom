import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Testimonial {
  id: string;
  client_name: string;
  client_company: string;
  client_role: string;
  content: string;
  rating: number;
  service_category: string;
  avatar_url?: string;
  created_at: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client_name: string;
  industry: string;
  service_category: string;
  challenge: string;
  solution: string;
  results: string;
  image_url?: string;
  created_at: string;
}

export interface Appointment {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_interest: string;
  preferred_date: string;
  message?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}
