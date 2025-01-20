import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ depends, locals: { supabase, session } }) => {
  depends('supabase:db:notes')
  const { data: notes } = await supabase.from('notes').select('id,note').order('id')

  //console.log("session", session)
  return { notes: notes ?? [] }
}