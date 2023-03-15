import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const url = 'https://yzkbbgciiynndrvyieiq.supabase.co'
const public_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6a2JiZ2NpaXlubmRydnlpZWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NTk0MzYsImV4cCI6MTk5NDQzNTQzNn0.fQ5DvKBPlmcXY3YKR9mNOFZppiiC_6fELNzM4i4u5EQ'

const supabase = createClient(url, public_key)

export default supabase