import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const hasSupabaseEnv = Boolean(supabaseUrl && supabaseAnonKey);

if (!hasSupabaseEnv) {
  console.error(
    "[supabase] Missing VITE_SUPABASE_URL and/or VITE_SUPABASE_ANON_KEY. Configure them in Vercel Environment Variables."
  );
}

// Prevent app boot crash when env vars are missing; requests will fail gracefully.
const safeUrl = supabaseUrl ?? "https://invalid-project.supabase.co";
const safeAnonKey = supabaseAnonKey ?? "invalid-anon-key";

export const supabase = createClient(safeUrl, safeAnonKey);
