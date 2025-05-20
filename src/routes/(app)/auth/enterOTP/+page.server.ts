import { MagicLinkOTPVerifySchema } from '$lib/types/schemas';
import { fail, redirect } from '@sveltejs/kit';
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
  
  const MagicLinkOTPVerify_Form = await superValidate(zod( MagicLinkOTPVerifySchema));

  // Combine data and form into a single object
  const data:any = { session, MagicLinkOTPVerify_Form };

  return data;
}

export const actions = {
  verifyOTP: async ({  request, locals: { supabase } }) => {
    const MagicLinkOTPVerify_Form = await superValidate(request, zod(MagicLinkOTPVerifySchema));

    console.log('Magic Link OTP', MagicLinkOTPVerify_Form);
    
    // error checking for the form itself
    if(!MagicLinkOTPVerify_Form.valid) {

      return fail(400, {message:'Invalid MagicLinkOTPVerify Form Submission',errors: MagicLinkOTPVerify_Form.errors, MagicLinkOTPVerify_Form});

    } else {
        const { email, otp } = MagicLinkOTPVerify_Form.data;

        // sending it to supabase
        const { error } = await supabase.auth.verifyOtp({
          email: `${email}`,
          token: `${otp}`,
          type:`email`
        })
        console.log("supabase run(magic link verify)")

        //if supabase returns error
        if(error){
          
          if (error instanceof AuthApiError && error.status === 400) {
            console.log(error)
            return message(MagicLinkOTPVerify_Form,{text: 'Invalid Code, Try again.', status: 401});
          }
          return fail(500, { message: 'Server error. Try again later.'})
        }
        
      redirect(303,'/Portal');

    }
  }
} satisfies Actions
