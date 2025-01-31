<script lang="ts" module>
    type T = Record<string, unknown>;
  </script>
  
  <script lang="ts" generics="T extends Record<string, unknown>">
    import { formFieldProxy } from 'sveltekit-superforms';
    import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
  
  interface Props {
    label?: string;
    field: FormPathLeaves<T>;
    form: SuperForm<T>;
    children?: import('svelte').Snippet;
    [key: string]: any
  }

  let {
    label = '',
    field,
    form,
    children,
    ...rest
  }: Props = $props();
  
    const { value, errors, constraints } = formFieldProxy(form, field);
  </script>
  
  {#if label !== undefined}
    <label class="label text-lg" for={field}>{label}</label>
  {/if}
  <div class="control space-y-4">
    <select
      class="select pl-4"
      name={field}
      aria-invalid={$errors ? 'true' : undefined}
      bind:value={$value}
      {...$constraints}
      {...rest}
    >
     {@render children?.()}
    </select>
  </div>
  {#if $errors}
    <p class="text-sm text-error-700 py-1">{$errors}</p>
  {/if}
  <br>