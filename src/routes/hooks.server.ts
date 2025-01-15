//@ts-nocheck
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import type { Database } from '$lib/types/database.types'
import { createServerClient } from '@supabase/ssr'
import type { Handle } from '@sveltejs/kit'
import { redirect, error } from '@sveltejs/kit'



export const handle: Handle = async ({ event, resolve }) => {
  //prevents any access to reset your password
  event.locals.supabase = createServerClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get: (key) => event.cookies.get(key),
      set: (key, value, options) => {
        event.cookies.set(key, value, { ...options, path: '/' })
      },
      remove: (key, options) => {
        event.cookies.delete(key, { ...options, path: '/' })
      },
    },
  })

  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }
  
  // Protect requests to all routes that start with /users
  if (event.url.pathname.startsWith('/users')) {
    const session = await event.locals.getSession()
    if (!session) {
      // The user is not signed in
      throw redirect(303, '/auth')
    }
  }


  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}