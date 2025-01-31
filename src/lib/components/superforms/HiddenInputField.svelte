<script lang="ts" module>
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	//import { run } from 'svelte/legacy';

	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves, FormPathType } from 'sveltekit-superforms';

	interface Props {
		field: FormPathLeaves<T>;
		value: FormPathType<T, typeof field>;
		form: SuperForm<T>;
	}

	let { field, value, form }: Props = $props();

	// Proxy form field state
	const { value: formValue, constraints } = formFieldProxy(form, field);

	// Update the form field with the provided value
	// run(() => {
	// 	formValue.set(value);
	// });
	$effect.pre(() => {
		formValue.set(value);
	});

</script>
  
  <input
	type="hidden"
	name={field}
	bind:value={$formValue}
	{...constraints}
  />
  