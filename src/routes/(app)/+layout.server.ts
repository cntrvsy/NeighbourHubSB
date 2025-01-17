// ensures all pages have access to the session token 
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { session }, cookies }) => {
  return {
    session,
    cookies: cookies.getAll(),
  }
}