// ensures all pages have access to the session token 
import type { LayoutServerLoad } from './$types'
import { loadFlash } from 'sveltekit-flash-message/server';

export const load: LayoutServerLoad = loadFlash(async ({ locals: { safeGetSession, user }, cookies }) => {
  const { session } = await safeGetSession();
  const data = { someOther: 'data' };

  return {
    session,
    user,
    cookies: cookies.getAll(),
    ...data, // Merging the additional data
  };
});