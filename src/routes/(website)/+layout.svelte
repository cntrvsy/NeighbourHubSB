<script lang="ts">
	import CustomPageTransition from '$lib/components/CustomPageTransition.svelte';
	import CustomWebsiteFooter from '$lib/components/CustomWebsiteFooter.svelte';
	import '../../app.css';

	let { data, children } = $props();

</script>



<div class="w-full h-full flex flex-col overflow-hidden">
	<header>
		<!-- App Bar -->
		<h1>Hey im the nav bar</h1>
	</header>
	<!-- Page Route Content -->
	
	
    <div class=" overflow-y-auto">
		<CustomPageTransition key={data.url} duration={500}>
			<main class="flex flex-wrap justify-center items-center max-w-screen-xl mx-auto">
				{@render children()}
			</main>
		</CustomPageTransition>
        <footer>
            <CustomWebsiteFooter/>
        </footer>
    </div>

</div>