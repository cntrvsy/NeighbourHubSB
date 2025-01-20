// ensures all pages have access to the session token 
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession, user }, cookies }) => {
  const { session } = await safeGetSession()
  return {
    session,
    user,
    cookies: cookies.getAll(),
  }
}