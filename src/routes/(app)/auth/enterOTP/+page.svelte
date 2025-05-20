<script lang="ts">
  // @ts-nocheck
  import { getFlash } from 'sveltekit-flash-message';
  import { page } from '$app/state';
  import SuperForm from '$lib/components/superforms/FormNoDebug.svelte';
  import TextField from '$lib/components/superforms/TextField.svelte';
  import HiddenInputField from '$lib/components/superforms/HiddenInputField.svelte';

  const flash = getFlash(page);
  let email:string = $state();

  let { data } = $props()
  let { session, supabase, MagicLinkOTPVerify_Form} = $derived(data)

  function maskEmail(email: string): string {
    const [local, domain] = email.split("@");

    const maskedLocal = local
      .split("")
      .map((char, index) => (index === 0 || index === local.length - 1 ? char : "*"))
      .join("");

    const [domainName, domainExt] = domain.split(".");
  
    const maskedDomainName = domainName
      .split("")
      .map((char, index) => (index === 0 || index === domainName.length - 1 ? char : "*"))
      .join("");

    return `${maskedLocal}@${maskedDomainName}.${domainExt}`;
}

  $effect(() => {
    console.log("flash message", $flash?.message)
    email = $flash?.message;
  })


</script>

<!-- add countdown later -->

{#if $flash}
  {@const bg = $flash.type == 'success' ? '#3D9970' : '#FF4136'}
  <div style:background-color={bg} class="flash">{maskEmail(email)}</div>
{/if}

<section>
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
  <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div class="flex flex-col items-center justify-center text-center space-y-2">
        <div class="font-semibold text-3xl">
          <p>Email Verification</p>
        </div>
        <div class="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email ba**@d****h***.com</p>
        </div>
      </div>

      <div>
        <SuperForm
                  action = "?/verifyOTP"
                  data= {data?.MagicLinkOTPVerify_Form}
                  invalidateAll={false}
                  let:form let:message
                >

                  {#if message}
                    <div class= "alert
                      {message.status >= 400 ? 'alert-error': 'alert-success'}
                      text-white p-4 rounded-md"
                    > 
                      {message.text}
                    </div>
                  {/if}
                    <!-- for email -->
                    <HiddenInputField {form} field="email" value={email}></HiddenInputField>
                    <!-- for OTP -->
                    <TextField type="text" {form} field="otp" label="otp"></TextField>
                    <div class= "flex items-center justify-center py-4">
                      <button type="submit" class="btn variant-filled-primary px-8">Verify</button>
                    </div>
                </SuperForm>
      </div>
    </div>
  </div>
</div>
</section>