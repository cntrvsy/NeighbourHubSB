import { SupabaseClient, Session } from "@supabase/supabase-js";
import type { Database } from '$lib/types/database.types'

declare global {
	declare namespace App {
	interface Locals {
		supabase : SupabaseClient<Database>
		getSession(): Promise<Session | null>
	}
	interface PageData {
		session: Session | null
		isAdmin?: boolean
	}
	// interface Error {}
	// interface Platform {}
	}
}