<script lang="ts">
    import { onMount } from 'svelte';
    
    // Pricing tiers
    const tiers = [
      { name: 'Small', maxUsers: 50, pricePerUser: 400, features: ['Basic storage', 'Document vault', 'Email support'] },
      { name: 'Medium', maxUsers: 200, pricePerUser: 300, features: ['All Small features', 'Advanced search', 'Priority support'] },
      { name: 'Enterprise', maxUsers: 1000, pricePerUser: 150, features: ['All Medium features', 'Custom integrations', 'Dedicated account manager'] }
    ];
  
    let users = 1;
    let currentTier = tiers[0];
    let total = users * currentTier.pricePerUser;
  
    function updatePricing(value: number) {
      users = value;
      currentTier = tiers.find(t => value <= t.maxUsers) || tiers[tiers.length - 1];
      total = users * currentTier.pricePerUser;
    }
  
    onMount(() => {
      updatePricing(users);
    });
  </script>
  
  <div class="p-6 max-w-lg mx-auto bg-white rounded-lg shadow">
    <h2 class="text-2xl font-semibold mb-4">Estimate Your Monthly Cost</h2>
  
    <label for="userRange" class="block text-sm font-medium text-gray-700 range">
      Number of Users: {users}
    </label>
    <input
      id="userRange"
      type="range"
      min="1"
      max="500"
      step="1"
      bind:value={users}
      on:input={() => updatePricing(users)}
      class="w-full mt-2 mb-4"
    />
  
    <div class="mb-4">
      <p class="text-lg">
        <span class="font-medium">Tier:</span> {currentTier.name}
      </p>
      <p class="text-lg">
        <span class="font-medium">Price per user:</span> KSh {currentTier.pricePerUser}
      </p>
      <p class="text-2xl font-bold mt-2">
        Total: KSh {total.toLocaleString()}/mo
      </p>
    </div>
  
    <div>
      <h3 class="text-xl font-semibold mb-2">Features Included:</h3>
      <ul class="list-disc list-inside">
        {#each currentTier.features as feature}
          <li>{feature}</li>
        {/each}
      </ul>
    </div>
  </div>