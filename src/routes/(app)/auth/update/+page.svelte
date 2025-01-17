<script lang="ts">
import { goto } from '$app/navigation';
import upt from '$lib/assets/upt.svg'
// we are able to access session and supabase from data
import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { redirect } from '@sveltejs/kit';

const toastStore = getToastStore();

export const showToast = (message:string) => {
    const t:ToastSettings = {
        message: message,
    }
    toastStore.trigger(t)
}

export let data;
let { supabase } = data

let email:string;
let password:string;
const customMessage:string = "Password was updated" 

const handleUpdateUser = async() => {
    try {
    await supabase.auth.updateUser({
        email:email,
        password:password
    })        
    showToast(customMessage);
    //redirect(301, '/auth')

    } catch (error) {
    console.log(error)
    showToast("Something went wrong")
    }
    
    
}


</script>
    
<section>
    <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="{upt}">
        <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Enter Your New Password below:</h1>
        <p class="leading-relaxed mb-8">
            Enter your Email and your new password Below.
        </p>
        <div class="flex justify-center">
            <div class="card p-4 w-full text-token space-y-4">
                <form on:submit={()=>handleUpdateUser()}>
                    <label class="label py-2">
                        <span>Email</span>
                        <input name="email" bind:value="{email}" class="input pl-4"/>
                    </label>
                    <label class="label py-2">
                        <span>Password</span>
                        <input type="password" name="password" bind:value="{password}" class="input pl-4"/>
                    </label>
                    <button type="submit" class="btn variant-filled-primary"on:click={()=> goto('/')}>Update</button>
                </form>
            </div>
        </div>
        </div>
    </div>
</section>