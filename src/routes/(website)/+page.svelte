<script>
  import Neko from '$lib/components/Neko.svelte';
	import { Megaphone } from 'lucide-svelte';
</script>

<Neko />

<article class="">
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
              <div role="alert" class="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>We are looking for investors</span>
              </div>
            </div>
            <div class="py-2">
              <div role="alert" class="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>We are still Building this Application</span>
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
    <section class="bg-base-400">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2">Pricing</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">All share holders get access to all features regardless of tiers</p>
          <!-- toggle -->
          <label class="toggle text-base-content">
            <input type="checkbox">
            <button aria-label="enabled">Monthly</button>
            <button aria-label="disabled">Annually</button>
          </label>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">START</h2>
              <h1 class="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">Free</h1>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vexillologist pitchfork
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Tumeric plaid portland
              </p>
              <p class="flex items-center text-gray-400 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Mixtape chillwave tumeric
              </p>
              <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p class="text-xs text-gray-400 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
              <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
              <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">PRO</h2>
              <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                <span>$38</span>
                <span class="text-lg ml-1 font-normal text-gray-400">/mo</span>
              </h1>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vexillologist pitchfork
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Tumeric plaid portland
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Hexagon neutra unicorn
              </p>
              <p class="flex items-center text-gray-400 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Mixtape chillwave tumeric
              </p>
              <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p class="text-xs text-gray-400 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">BUSINESS</h2>
              <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                <span>$56</span>
                <span class="text-lg ml-1 font-normal text-gray-400">/mo</span>
              </h1>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vexillologist pitchfork
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Tumeric plaid portland
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Hexagon neutra unicorn
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vexillologist pitchfork
              </p>
              <p class="flex items-center text-gray-400 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Mixtape chillwave tumeric
              </p>
              <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p class="text-xs text-gray-400 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">SPECIAL</h2>
              <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                <span>$72</span>
                <span class="text-lg ml-1 font-normal text-gray-400">/mo</span>
              </h1>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vexillologist pitchfork
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Tumeric plaid portland
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Hexagon neutra unicorn
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vexillologist pitchfork
              </p>
              <p class="flex items-center text-gray-400 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Mixtape chillwave tumeric
              </p>
              <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p class="text-xs text-gray-400 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Faq -->
    <div class="hero bg-base-200 min-h-screen">
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
    <div class="hero bg-base-200 min-h-screen">
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
    
</article>