import { SignInSchema, SignUpSchema } from '$lib/types/schemas';
import { redirect } from '@sveltejs/kit'
import { fail, error } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions } from './$types';

export const load = async ({ locals: { getSession } }) => {
  // Get user session
  const session = await getSession();
  
  // if the user is already logged take them straight to the users page
  if (session) {
    console.log("hey you, lets get inside")
    throw redirect(303, '/users')
  }

  //return { url: url.origin }
  // Create and validate sign up and sign in form
  //@ts-ignore
  const SignIn_Form = await superValidate(zod(SignInSchema));
  const SignUp_Form = await superValidate(zod(SignUpSchema));

  // Combine data and form into a single object
  const data:any = { session, SignUp_Form, SignIn_Form };

  return data;
}

export const actions = {
  signIn: async ({ request, locals: { supabase} }) => {
    const signIn_Form = await superValidate(request, zod(SignInSchema));

    console.log('Sign In', signIn_Form);
    
    // error checking for the form itself
    if(!signIn_Form.valid) {

      return fail(400, {message:'Invalid signIn Form Submission',errors: signIn_Form.errors,signIn_Form});

    } else {
        const { email, password } = signIn_Form.data;

        // sending it to supabase
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        console.log("supabase run(signIn)")

        //if supabase returns error
        if(error){
          
          if (error instanceof AuthApiError && error.status === 400) {
            console.log(error)
            return message(signIn_Form,{text: 'Invalid Credentials, Try again.', status: 401});
          }
          return fail(500, { message: 'Server error. Try again later.'})
        }

        // Successful sign-In, update the store and dispatch custom event.
        redirect(303, '/users')
      //return message(signIn_Form, {text: 'benin posted, refresh the page'});
    }
  },
  signUp: async ({ request, locals: { supabase} }) => {
    const signUp_Form = await superValidate(request, zod(SignUpSchema));

    console.log('Sign Up', signUp_Form);
    // error checking for the form itself
    if(!signUp_Form.valid) {

      return fail(400, {message:'Invalid Form Submission',errors: signUp_Form.errors,signUp_Form});

    } else {
        const { email, password } = signUp_Form.data;

        // sending it to supabase
        const { error } = await supabase.auth.signUp({
          email,
          password
        })
        console.log("supabase run")

        if(error){
          //if supabase returns error
          if (error instanceof AuthApiError && error.status === 400) {
            return message(signUp_Form,{text: 'Something went wrong, try again', status: 401});

          }
          return fail(500, { message: 'Server error. Try again later.'})
        }

        // Successful sign-In, update the store and dispatch custom event.
      return message(signUp_Form,{text: 'Check your Email for Confirmation.'});
    }
  }
} satisfies Actions
