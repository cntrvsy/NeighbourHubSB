<script lang="ts">
    //where the user inserts their email and are given a special link that allows them to reset their password
    // we are able to access session and supabase from data
    //import reset from '$lib/assets/reset.svg'
    //import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
    
    // const toastStore = getToastStore();
    
    // export const showToast = (message:string) => {
    //     const t:ToastSettings = {
    //         message: message,
    //     }
    //     toastStore.trigger(t)
    // }
    
    export let data;
    let { supabase } = data
    
    let email:string;
    const customMessage:string = "Check your E-mail to continue to change your Password." 
    
    const handlePasswordRecovery = async() => {
       try {
        await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'http://localhost:5173/auth/update'
        })
        // showToast(customMessage);
        console.log("email sent")
       } catch (error) {
        console.log(error)
        //showToast("Something went wrong")
        console.log("email not sent", error)
       }
        
       
    }
    
    
</script>
    
<section>
    <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
        <!-- <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="{reset}"> -->
        <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Enter Your email below:</h1>
            <p class="leading-relaxed mb-8">
                We will send you the link to where you will be allowed to reset your password.
            </p>
            <div class="flex justify-center">
                <div class="card p-4 w-full text-token space-y-4">
                    <form on:submit={()=>handlePasswordRecovery()}>
                        <label class="label py-2">
                            <input name="email" bind:value="{email}" class="input pl-4"/>
                        </label>
                        <button type="submit" class="btn variant-filled-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
 </section>