import type { PageServerLoad } from './$types'
import { supabaseLib } from '$lib/supabaseClient'
export const load: PageServerLoad = async ({ depends, locals: { supabase, session } }) => {
  depends('supabase:db:notes')
  const { data: notes } = await supabaseLib.from('notes').select('id,note').order('id')

  console.log("session", session)
  return { notes: notes ?? [] }
}