import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

// Prioriza variáveis de ambiente definidas na Netlify, com fallback para as chaves atuais
const supabaseUrl = process.env.SUPABASE_URL || 'https://ltgqjjxhkqunuiqxmfvl.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Z3Fqanhoa3F1bnVpcXhtZnZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxODA1MDgsImV4cCI6MjA4MTc1NjUwOH0.aYceExrjaaCwvL-gHOPpaJGouWHJzBOKHidhAf4ajjo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true });
  
  if (error) throw error;
  return data;
};