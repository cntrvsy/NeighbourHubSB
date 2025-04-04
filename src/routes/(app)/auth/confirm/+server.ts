import type { EmailOtpType } from '@supabase/supabase-js';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals: { supabase } }) => {
  const token_hash = url.searchParams.get('token_hash');
  const type = url.searchParams.get('type') as EmailOtpType | null;

  // Define the protected route you want to redirect to
  const protectedRoute = '/Portal'; // Change this to your protected route

  // Clean up the redirect URL by deleting the Auth flow parameters.
  const redirectTo = new URL(url);
  redirectTo.pathname = protectedRoute; // Set the protected route as the redirect target
  redirectTo.searchParams.delete('token_hash');
  redirectTo.searchParams.delete('type');

  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({ type, token_hash });
    if (!error) {
      redirect(303, redirectTo); // Redirect to the protected route if verification is successful
    }
  }

  redirectTo.pathname = '/auth/error'; // Redirect to error page if verification fails
  redirect(303, redirectTo);
}