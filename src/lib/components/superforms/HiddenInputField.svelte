<script lang="ts" context="module">
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves, FormPathType } from 'sveltekit-superforms';

	export let field: FormPathLeaves<T>;
	export let value: FormPathType<T, typeof field>
	export let form: SuperForm<T>;

	// Proxy form field state
	const { value: formValue, constraints } = formFieldProxy(form, field);

	// Update the form field with the provided value
	$: formValue.set(value);
</script>
  
  <input
	type="hidden"
	name={field}
	bind:value={$formValue}
	{...constraints}
  />
  