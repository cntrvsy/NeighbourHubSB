import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
//import type { Database } from '$lib/types/database.types';

//export const supabaseLib = createClient<Database>(PUBLIC_SUPABASE_URL,PUBLIC_SUPABASE_ANON_KEY)
export const supabaseLib = createClient(PUBLIC_SUPABASE_URL,PUBLIC_SUPABASE_ANON_KEY)