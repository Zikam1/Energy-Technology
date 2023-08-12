<!-- <script setup lang="ts">
const topLink = [
  {
    to: '/about',
    title: 'About'
  },
  {
    to: '/media',
    title: 'Media'
  },
  {
    to: '/contact',
    title: 'Contact'
  },
];
</script>

<template>
    <div class="fixed top-16 right-1 rounded-b-lg bg-white shadow-md w-4/5 z-50 absolute p-5 text-sm">
        <nav class="bottom-nav border-b-2 border-gray-900 pb-5 mb-5">
            <NuxtLink 
                v-for="link, idx of topLink"
                v-slot="{ isActive }"              
                :to="link.to"
                :key="idx"
                role="listitem"
            >
            <div
                :class="isActive ? 'fw-900 text-yellow text-lg':''"
            >
                <p class="top-link">
                {{ link.title }}
                </p>
            </div>
            </NuxtLink>
        </nav>
        
        <NuxtLink class="top-link flex gap-x-5" href="https://www.triplehelixassociation.org/" target="_blank">
            <h2>Triple Helix Association</h2>
            <div class="i-solar:global-linear h4 w4 text-gray-5 mt-1"/>     
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
 .top-link{
      --uno: hover:bg-gray-200 duration-300 pt-1 pb-1 flex-v-center h-10 pl-3;
}

</style> -->
