/*
  # Create quote_requests table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, required)
      - `phone` (text, required)
      - `location` (text, required)
      - `date` (date, required)
      - `time` (time, required)
      - `children_count` (integer, required)
      - `duration` (numeric, required)
      - `event_type` (text, required)
      - `created_at` (timestamp, auto-generated)
      - `status` (text, default: 'pending')

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for anyone to insert quote requests
    - No SELECT/UPDATE/DELETE permissions needed (admin-only via backend)

  3. Indexes
    - Add index on `created_at` for sorting
    - Add index on `status` for filtering pending requests
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  children_count integer NOT NULL,
  duration numeric NOT NULL,
  event_type text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS quote_requests_created_at_idx ON quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS quote_requests_status_idx ON quote_requests(status);

-- Enable RLS
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert quote requests
CREATE POLICY "Anyone can insert quote requests"
  ON quote_requests
  FOR INSERT
  WITH CHECK (true);

-- Policy: Restrict SELECT to prevent data leakage
CREATE POLICY "No public read access"
  ON quote_requests
  FOR SELECT
  USING (false);

-- Policy: Restrict UPDATE to prevent tampering
CREATE POLICY "No public update access"
  ON quote_requests
  FOR UPDATE
  USING (false);

-- Policy: Restrict DELETE
CREATE POLICY "No public delete access"
  ON quote_requests
  FOR DELETE
  USING (false);
