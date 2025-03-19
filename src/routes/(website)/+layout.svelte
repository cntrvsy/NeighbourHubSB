<script lang="ts">
	// @ts-nocheck
	import CustomPageTransition from '$lib/components/CustomPageTransition.svelte';
	import background_homepage from '$lib/assets/webp/background_homepage.webp';
	import '../../app.css';

	let { data, children } = $props();
    
	function handleScroll(event: MouseEvent): void {
		event.preventDefault();
		const link = event.currentTarget as HTMLAnchorElement;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		if (anchor) {
			window.scrollTo({
				top: anchor.offsetTop,
				behavior: 'smooth',
			});
		}
	}

</script>

<div class="relative w-full h-full">
    <!-- Background image -->
    <div class="absolute inset-0 -z-10">
        <img class=" object-contain" src={background_homepage} alt="hero" />
    </div>

    <div class="relative w-full h-full flex flex-col overflow-hidden">
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

        <!-- Page Route Content -->
        <div class="overflow-y-auto relative z-10">
            <CustomPageTransition key={data.url} duration="500">
                <main class="relative z-10">
                    {@render children()}
                </main>
            </CustomPageTransition>

            <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 relative z-10">
                <aside class="grid-flow-col items-center">
                    <span>NeighbourHub</span>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="/privacy-policy"><span>Privacy Policy</span></a>
                    <a href="/privacy-policy"><span>Privacy Policy</span></a>
                </nav>
            </footer>
        </div>
    </div>
</div>

