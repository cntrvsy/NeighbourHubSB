<script>
  import Neko from '$lib/components/Neko.svelte';
  import Pricing from '$lib/components/Pricing.svelte';
	import { Megaphone } from 'lucide-svelte';
</script>

<Neko />

<!-- header -->
<header class="z-20">
  <!-- App Bar -->
  <div class="navbar">
      <div class="navbar-start">
          <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
              </div>
              <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
              <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#faq">FAQ</a></li>
    <li><a href="#support">Support</a></li>
              </ul>
          </div>
          <a class="btn btn-ghost text-xl font-serif" href="/">NeighbourHub</a>
      </div>
      <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
  <li><a href="#support">Support</a></li>
          </ul>
      </div>
      <div class="navbar-end">
          <a class="btn" href="/auth">Login</a>
      </div>
  </div>
</header>

<section class="">
    <div class="hero pb-64 pt-32">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-4xl font-bold font-serif">
                Effortless Management, Unparalleled Convenience
            </h1>
            <p class="py-6">
              Streamlined your HOA's operations with our user-friendly platform, 
              offering a seamless experience for property owners and residents.
            </p>
            <!-- to remove -->
            <div class="py-2">
              <div role="alert" class="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>We are currently in Alpha.</span>
              </div>
            </div>
            <div class="pt-6">
              <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary">Request a Demo</button>
            </div>
          </div>
        </div>
    </div>
    <!-- features -->
    <section id="features" class="bg-base-200">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-5xl text-4xl font-medium title-font mb-2 pb-6">
            Why Choose Us?
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-opacity-80">
            With tools that simplify, connect, and empower, we help Home Owners Associations run smoothly and thrive.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 justify-center">
          <!-- Feature -->
          <div class="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div class="h-full card border border-primary bg-opacity-40 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center relative">
              <div class="items-center justify-center flex flex-col">
                <div class="avatar">
                  <div class="w-24 rounded-full bg-primary">
                    <div class="items-center justify-center flex h-full">
                      <Megaphone size={48} color="#ffffff" strokeWidth={1.25}/>
                    </div>
                  </div>
                </div>
              </div>
              <h1 class="title-font sm:text-2xl text-xl font-medium mb-3">
                Password-Less Authentication
              </h1>
              <p class="leading-relaxed mb-3">
                All you need is your email, and we'll send you a link to log in. Not only is this safer, but you'll never have to remember your password again.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div class="h-full card border border-primary bg-opacity-40 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center relative">
              <div class="items-center justify-center flex flex-col">
                <div class="avatar">
                  <div class="w-24 rounded-full bg-primary">
                    <div class="items-center justify-center flex h-full">
                      <Megaphone size={48} color="#ffffff" strokeWidth={1.25}/>
                    </div>
                  </div>
                </div>
              </div>
              <h1 class="title-font sm:text-2xl text-xl font-medium mb-3">
                Seamless Integration
              </h1>
              <p class="leading-relaxed mb-3">
                Our platform easily integrates with the tools you already use, ensuring a smooth experience without switching systems.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div class="h-full card border border-primary bg-opacity-40 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center relative">
              <div class="items-center justify-center flex flex-col">
                <div class="avatar">
                  <div class="w-24 rounded-full bg-primary">
                    <div class="items-center justify-center flex h-full">
                      <Megaphone size={48} color="#ffffff" strokeWidth={1.25}/>
                    </div>
                  </div>
                </div>
              </div>
              <h1 class="title-font sm:text-2xl text-xl font-medium mb-3">
                Secure and Reliable
              </h1>
              <p class="leading-relaxed mb-3">
                Your data is protected with top-notch security measures, ensuring a safe and reliable platform for all users.
              </p>
            </div>
          </div>
           <!-- Feature -->
           <div class="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div class="h-full card border border-primary bg-opacity-40 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center relative">
              <div class="items-center justify-center flex flex-col">
                <div class="avatar">
                  <div class="w-24 rounded-full bg-primary">
                    <div class="items-center justify-center flex h-full">
                      <Megaphone size={48} color="#ffffff" strokeWidth={1.25}/>
                    </div>
                  </div>
                </div>
              </div>
              <h1 class="title-font sm:text-2xl text-xl font-medium mb-3">
                Secure and Reliable
              </h1>
              <p class="leading-relaxed mb-3">
                Your data is protected with top-notch security measures, ensuring a safe and reliable platform for all users.
              </p>
            </div>
          </div>
           <!-- Feature -->
           <div class="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div class="h-full card border border-primary bg-opacity-40 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center relative">
              <div class="items-center justify-center flex flex-col">
                <div class="avatar">
                  <div class="w-24 rounded-full bg-primary">
                    <div class="items-center justify-center flex h-full">
                      <Megaphone size={48} color="#ffffff" strokeWidth={1.25}/>
                    </div>
                  </div>
                </div>
              </div>
              <h1 class="title-font sm:text-2xl text-xl font-medium mb-3">
                Secure and Reliable
              </h1>
              <p class="leading-relaxed mb-3">
                Your data is protected with top-notch security measures, ensuring a safe and reliable platform for all users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- pricing -->
    <section id="pricing">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <Pricing />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">We approach pricing
            <br class="hidden lg:inline-block">differently
          </h1>
          <p class="mb-8 leading-relaxed font-sans">
            Charging per user for a Home Owners Application ensures transparency by clearly defining costs based
             on actual usage. This model eliminates hidden fees, making budgeting straightforward for both 
             homeowners and management. It fosters accountability, as per "HOA" each user pays for their own access, 
             reducing unnecessary expenses. Plus, it scales fairly—small communities pay less, while larger groups 
             invest proportionally. Custom Terms and Fair Usage Policy  still apply.
          </p>
          <div class="flex justify-center">
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
    <!-- Faq -->
    <div class="hero bg-base-200 min-h-screen" id="faq">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
    </div>
    <!-- support -->
    <div class="hero bg-base-200 min-h-screen" id="support">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
    </div>
    
</section>