<script>
    //@ts-nocheck
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    export let onConsent; // Callback for when the user gives consent

    let showBanner = false;

    onMount(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            showBanner = true;
        }
    });

    function handleConsentTrue() {
        localStorage.setItem('cookieConsent', 'true');
        showBanner = false;
        onConsent();
    }
    function handleConsentFalse() {
        localStorage.setItem('cookieConsent', 'false');
        showBanner = false;
        onConsent();
    }
</script>

{#if showBanner}
    <div in:fade ={{ duration: 3000 }} out:fade>   
        <div class="fixed inset-x-0 bottom-0 z-30 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
            <p class="max-w-4xl text-sm leading-6 text-gray-900">This website uses cookies to enhance your browsing experience,
                analyze site traffic, and serve better user experiences. By continuing to use this site, you consent to our use of
                cookies. Learn more in our <a class="font-semibold text-teal-600" href="/guidelines/privacy">cookie policy</a>.</p>
            <div class="mr-16 flex flex-none items-center gap-x-5">
                <button type="button" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900" on:click={handleConsentTrue}>I Accept 🍪</button>
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900" on:click={handleConsentFalse}> I Reject 🥺</button>
            </div>
        </div>
    </div>


{/if}

