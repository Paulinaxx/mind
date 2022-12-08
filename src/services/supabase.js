import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ikpvfnwddmtxrtvsdlrf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcHZmbndkZG10eHJ0dnNkbHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA1MTk0NDUsImV4cCI6MTk4NjA5NTQ0NX0.upZgzqg-wISlXVhUMKUL5gr1xvG3ZZWDmMCK3KJ_4ME';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;