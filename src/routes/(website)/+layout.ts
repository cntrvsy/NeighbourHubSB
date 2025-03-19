import type { LayoutLoad } from './$types'

export const prerender = true

export const load: LayoutLoad = async ({ url }) => {
  // no session is required for this layout
  return { url: url.pathname, session: null }
}