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

