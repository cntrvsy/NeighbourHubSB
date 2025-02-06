//@ts-nocheck

//import { supabaseLib } from "$lib/supabaseClient";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ url, locals: { supabase } }) => {
    const code = url.searchParams.get('code');
    console.log("code is:", code);

    try{
        const {data, error } = await supabase.auth.exchangeCodeForSession({code});

        if(error){
            return {
                status: 302,
                redirect: '/auth',
            };
        }
        console.log("reset password data:", data)
        // on session verified, proceed
       
    } catch (error) {
        console.error('Error exchanging session:', error)
        return {
            status: 500,
            error: 'Failed to exchange session'
        }
    }
}