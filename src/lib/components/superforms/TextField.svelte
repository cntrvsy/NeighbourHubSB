<script lang="ts" module>
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';

	

    interface Props {
        class?: string;
        label?: string;
        field: FormPathLeaves<T>;
        disabled?: boolean;
        form: SuperForm<T>;
        [key: string]: any
    }

    let {
        class: _class = '',
        label = '',
        field,
        disabled = false,
        form,
        ...rest
    }: Props = $props();

	const { value, errors, constraints } = formFieldProxy(form, field);
</script>
    
{#if label !== undefined}
    <label class="label text-lg" for={field}>{label}</label>
{/if}
<div class="space-y-4">
    <input 
    class={"input pl-4 py-2"+ _class} 
        name={field} 
        aria-invalid={$errors ? 'true' : undefined}  
        placeholder=""
        bind:value={$value}  
        {...$constraints}  
        {...rest}
        disabled={disabled}
    />    
</div>
{#if $errors}
    <p class="text-sm text-error-700 py-1">{$errors}</p>
{/if}
<br>
    