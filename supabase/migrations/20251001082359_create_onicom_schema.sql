/*
  # Create Onicom.io Database Schema

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `client_name` (text) - Name of the client
      - `client_company` (text) - Company name
      - `client_role` (text) - Job title/role
      - `content` (text) - Testimonial content
      - `rating` (integer) - Rating out of 5
      - `service_category` (text) - Related service
      - `avatar_url` (text, optional) - Client avatar
      - `created_at` (timestamptz)
    
    - `case_studies`
      - `id` (uuid, primary key)
      - `title` (text) - Case study title
      - `client_name` (text) - Client name
      - `industry` (text) - Client industry
      - `service_category` (text) - Service provided
      - `challenge` (text) - Problem description
      - `solution` (text) - Solution implemented
      - `results` (text) - Measurable results
      - `image_url` (text, optional) - Case study image
      - `created_at` (timestamptz)
    
    - `appointments`
      - `id` (uuid, primary key)
      - `name` (text) - Client name
      - `email` (text) - Client email
      - `phone` (text, optional) - Phone number
      - `company` (text, optional) - Company name
      - `service_interest` (text) - Service interested in
      - `preferred_date` (timestamptz) - Preferred appointment date
      - `message` (text, optional) - Additional message
      - `status` (text) - Status: pending, confirmed, completed, cancelled
      - `created_at` (timestamptz)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Sender name
      - `email` (text) - Sender email
      - `company` (text, optional) - Company name
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `status` (text) - Status: new, read, replied
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on testimonials and case studies
    - Add policies for public insert on appointments and contact messages
    - Restrict update/delete operations
*/

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_company text NOT NULL,
  client_role text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  service_category text NOT NULL,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

-- Create case_studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  client_name text NOT NULL,
  industry text NOT NULL,
  service_category text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  results text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service_interest text NOT NULL,
  preferred_date timestamptz NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Testimonials policies (public read)
CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Case studies policies (public read)
CREATE POLICY "Anyone can view case studies"
  ON case_studies FOR SELECT
  TO anon, authenticated
  USING (true);

-- Appointments policies (public insert only)
CREATE POLICY "Anyone can create appointments"
  ON appointments FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Contact messages policies (public insert only)
CREATE POLICY "Anyone can send contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);