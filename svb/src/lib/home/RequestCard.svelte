<!-- ClientMatchCard.svelte -->
<script lang="ts">
    export let companyName: string = "Web Projects";
    export let courseType: string = "Applied Projects";
    export let matchDate: string = "Oct 15, 2024";
    export let staffName: string = "Sarah Chen";
    export let timeline: string = "3 months";
    export let status: "matched" | "pending" | "completed" = "matched";
    

    interface Project {
        projectName: string;
        description: string;
        organizationName: string;
    }

</script>
  
  <div class="w-64 h-64 rounded-2xl border border-[#ece7cf] bg-[#ece7cf] shadow-sm hover:shadow-md transition-shadow">
    <div class="p-6 h-full flex flex-col justify-between">
      <!-- Header section -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span class="font-medium text-gray-900">{companyName}</span>
          </div>
        </div>
  
        <div class="flex items-center text-gray-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span class="text-sm">{matchDate}</span>
        </div>
      </div>
  
      <!-- Middle section -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-600">{courseType}</span>
      
        </div>
  
        <!-- Divider -->
        <div class="border-t border-gray-100" />
      </div>
  
      <!-- Bottom stats -->
      <div class="space-y-2">
        <div class="flex items-center justify-between text-sm text-gray-600">
          <span class="font-medium">Course:</span>
          <span>{courseType}</span>
        </div>
        <div class="flex items-center justify-between text-sm text-gray-600">
          <span class="font-medium">Staff:</span>
          <span>{staffName}</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Example usage in a page or component -->
  <script lang="ts" context="module">
    // You can use this component like this:
    /*
    <ClientMatchCard
      companyName="Tech Solutions Inc"
      courseType="Web Development"
      matchDate="Oct 15, 2024"
      staffName="Sarah Chen"
      timeline="3 months"
      status="matched"
    />
    */
  </script>