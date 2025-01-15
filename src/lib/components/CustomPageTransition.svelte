<script lang="ts">
    import { fly } from 'svelte/transition'

    export let key: string;
    export let duration: number = 300;

</script>

{#key key}
<!-- Use the data attribute to scope the styles -->
    <div data-transition-component-key={key}
        in:fly={{x:200, duration, delay: duration }}
        out:fly={{ duration }}
        >
        <slot/>
    </div>
{/key}