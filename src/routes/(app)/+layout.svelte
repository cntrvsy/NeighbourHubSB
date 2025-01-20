<script>
  import { invalidate } from '$app/navigation'
  import SupabaseSignOut from '$lib/components/SupabaseSignOut.svelte';
  import { onMount } from 'svelte'

  let { data, children } = $props()
  let { session, supabase } = $derived(data)

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => data.subscription.unsubscribe()
  })
</script>
  
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
  <SupabaseSignOut {supabase}/>
</header>
<main>
  {@render children()}
</main>