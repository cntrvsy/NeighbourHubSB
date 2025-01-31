<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import { error } from "@sveltejs/kit";

    let {supabase} = $props();

    async function handleSignOut() {
        try {
            await supabase.auth.signOut()
            goto('/')
        } catch(error) {
            console.error("Error during signing out home page", error.message)
        }
        
    }
</script>

<button onclick={handleSignOut} class=" btn variant-filled-primary">Sign Out</button>