<script lang="ts">
    // @ts-nocheck
    import SuperForm from '$lib/components/superforms/Form.svelte';
    import TextField from '$lib/components/superforms/TextField.svelte';
    import { fly,fade } from 'svelte/transition';
  

    let { data } = $props()
    let { session, supabase, magicLink_Form} = $derived(data)

</script>
      
     
<div class="mx-auto max-w-screen-2xl">
  <div class="flex item-center justify-center h-screen p-10">
    <div>
    <!-- Sign In: super form -->
      <section>
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">

          <!-- CTA portion -->
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font text-5xl italic gradient-heading">Welcome!</h1>
            <p class="leading-relaxed text-lg mt-4">
              Your journey with us is just the beginning! Enter your email to receive a Magic Link—a quick,
               secure way to log in without a password. Click the link we send, and you're in.<br><br>
               Simple, seamless, and ready to connect!
            </p>
            <br/>
          </div>
            <div class="side-line lg:w-2/6 md:w-1/2 0 flex flex-col md:ml-auto w-full mt-10 md:mt-0 ">
              <!-- super form Sign In -->
              <div class=" card card-hover p-4 ">
                <SuperForm
                  action = "?/magicLink"
                  data= {data?.magicLink_Form}
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
                    <TextField type="text" {form} field="email" label="E-Mail" custom_placeholder="name@text.com"></TextField>
                    <div class= "flex items-center justify-center py-4">
                      <button type="submit" class="btn variant-filled-primary px-8">Send email</button>
                    </div>
                </SuperForm>
                <a href="/auth/reset" class="text-xs mt-3 text-warning-400">Click here if you forgot your password</a>
              </div>
            </div>
        </div>
      </section>
    </div>
  </div>
</div>


    