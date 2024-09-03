import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ifhcncxysezykspvvjux.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmaGNuY3h5c2V6eWtzcHZ2anV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNjUyNDgsImV4cCI6MjA0MDk0MTI0OH0.JSJwXFvWHkE9jC7HvPHnQm8bpi2yhsG9K0KxJ86lqRg';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
