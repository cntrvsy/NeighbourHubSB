<script lang="ts">
    import CustomPageTransition from '$lib/components/CustomPageTransition.svelte';
    import { Menu } from 'lucide-svelte';
    import SupabaseSignOut from '$lib/components/SupabaseSignOut.svelte';
  
    let { data, children } = $props()
    let { supabase } = $derived(data)
  
</script>
    

<div class="w-screen h-screen flex flex-col">
  <header>
      <div class="navbar bg-base-100 shadow-sm">
          <div class="flex-none md:block hidden navbar-start">
              <label for="my-drawer-2" class="drawer-button lg:hidden">
                  <Menu size={28}/>
              </label>
          </div>
          <div class="flex-1 navbar-center">
              <p class="text-3xl font-serif">DashBoard</p>
          </div>
      </div>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] grow min-h-0">
      <div class="hidden md:flex flex-col w-auto">
          <div class="drawer lg:drawer-open">
              <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
              <div class="drawer-content flex flex-col items-center justify-center">
                  <div class="space-y-4 pl-2 grow overflow-auto min-h-0">
                      <CustomPageTransition key={data.url} duration={500}>
                          {@render children()}
                      </CustomPageTransition>
                      <footer class="py-4">
                          <p class="text-center font-bold">Powered by FRSTUDIOS @2025</p>
                      </footer>
                  </div>
              </div>
              <div class="drawer-side">
                  <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                  <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-xl">
                      <li><a href="/">Home</a></li>
                      <li><SupabaseSignOut {supabase}/></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</div>

