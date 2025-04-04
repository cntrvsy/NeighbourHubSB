import { MagicLinkSchema } from '$lib/types/schemas';
import { WEBSITE_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit'
import { fail } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions } from './$types';

export const load = async ({ locals: { session} }) => {

  // if the user is already logged take them straight to the users page
  if (session) {
    //console.log("hey you, lets get inside")
    //console.log("session",session)
    throw redirect(303, '/Portal')
  }

  //return { url: url.origin }
  // Create and validate sign up and sign in form
  
  const magicLink_Form = await superValidate(zod(MagicLinkSchema));

  // Combine data and form into a single object
  const data:any = { session, magicLink_Form };

  return data;
}

export const actions = {
  magicLink: async ({ request, locals: { supabase } }) => {
    const magicLink_Form = await superValidate(request, zod(MagicLinkSchema));

    console.log('Magic Link', magicLink_Form);
    
    // error checking for the form itself
    if(!magicLink_Form.valid) {

      return fail(400, {message:'Invalid signIn Form Submission',errors: magicLink_Form.errors, magicLink_Form});

    } else {
        const { email } = magicLink_Form.data;

        // sending it to supabase
        const { error } = await supabase.auth.signInWithOtp({
          email: `${email}`,
          options: {
            shouldCreateUser: true,
          }
        })
        console.log("supabase run(magic link)")

        //if supabase returns error
        if(error){
          
          if (error instanceof AuthApiError && error.status === 400) {
            console.log(error)
            return message(magicLink_Form,{text: 'Invalid Credentials, Try again.', status: 401});
          }
          return fail(500, { message: 'Server error. Try again later.'})
        }

      return message(magicLink_Form, {text: 'Check your email for a link!'});
    }
  }
} satisfies Actions
