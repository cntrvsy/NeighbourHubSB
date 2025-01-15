<script lang="ts">
    import {Facebook, Twitter} from 'lucide-svelte'
</script>

<footer>
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class=" flex title-font font-medium items-center md:justify-start justify-center" href="/">
            <!-- you can put the logo here -->
            <span class="ml-3 text-lg text-our-white"> KBS</span>
        </a>
        <p class="text-our-white text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 KBS Driving School —
            <a href="/" class=" ml-1 text-our-white" target="_blank" rel="noopener noreferrer">@socialmedia</a>
        </p>
        <!-- social media -->
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="/" class="px-2 text-our-white">
                <Facebook strokeWidth = {1}/>
            </a>
            <a href="/" class="px-2 text-our-white">
                <Twitter strokeWidth = {1}/>
            </a>
        </span>

    </div>
</footer>