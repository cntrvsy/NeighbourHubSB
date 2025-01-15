<script lang="ts" context="module">
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import { dateProxy, formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';

	let _class = '';
	export { _class as class };

	export let label = '';
	export let field : FormPathLeaves<T>; 
	export let form : SuperForm<T>;

	const { errors } = formFieldProxy(form, field);
    $: value = dateProxy(form, field, { format: 'date', empty: 'null' });
</script>
    
{#if label !== undefined}
    <label class="label text-lg" for={field}>{label}</label>
{/if}
<div class="space-y-4">
    <input
        type ="date"
        class={"input pl-4 py-2"+ _class} 
        placeholder=""
        name={field} 
        aria-invalid={$errors ? 'true' : undefined}  
        bind:value={$value}  
    />    
</div>
{#if $errors}
    <p class="text-sm text-error-700 py-1">{$errors}</p>
{/if}
<br>
    