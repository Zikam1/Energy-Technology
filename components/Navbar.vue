<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
const dropdown = ref()
const mobileNav = ref(false);
const route = useRoute()

const close = () => {
  mobileNav.value = false;
}
const bottomLink = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/vision',
    title: 'Our Vision'
  },
 
  {
    to: '/publications',
    title: 'Publications'
  },
  {
    to: '/events',
    title: 'Events'
  },
]

onClickOutside(dropdown, close);

watch(route, ()=>{
    close()
})
</script>

<template>
  <div class="sticky top-0 bg-white w-full z-30">
    <transition-fade :offset="['-100%', 0]">
        <layout-dropdown ref="dropdown" class="md:hidden" v-if="mobileNav" />
    </transition-fade>
    <header>
      <div class="top-nav lt-sm:px4">
        <div class="flex-v-center">
          <NuxtLink to="/"> 
            <img src="/th-favicon.png" h9 w9 />
          </NuxtLink>
          <h1 class="font-fira text-3.5 ml2 fw700">Triple Helix Nigeria</h1>
        </div>

        <div v-if="!mobileNav" @click="mobileNav = true" class="i-solar:hamburger-menu-line-duotone h8 w6 md:hidden lg:hidden cursor-pointer" />
        <div v-else @click="close" class="i-ph:x h8 w6 md:hidden lg:hidden cursor-pointer" />

        <div class="hfull flex-v-center hidden lg:flex md:flex">
          <NuxtLink to="/about" class="top-link">
            About
          </NuxtLink>
          <NuxtLink to="/media" class="top-link">
            Media
          </NuxtLink>
          <NuxtLink to="/contact" class="top-link">
            Contact
          </NuxtLink>
          <NuxtLink class="top-link" href="https://www.triplehelixassociation.org/" target="_blank">
            <div class="i-solar:global-linear h6 w6 text-gray-5"/>
            <h2 ml1.5>Triple Helix Association</h2>
          </NuxtLink>
        </div>
      </div>

      <nav class="bottom-nav lt-sm:px4">
        <NuxtLink 
          v-for="link, idx of bottomLink"
          v-slot="{ isActive }" 
          class="bottom-link" 
          :to="link.to"
          :key="idx"
          role="listitem"
        >
          <div
            :class="isActive ? 'border-b-3 border-color-t-yellow md:(border-b-4)':''"
          >
            <p class="flex-v-center h-10">
              {{ link.title }}
            </p>
          </div>
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header{
  --uno: w-tha;
  .top-nav{
    --uno: h16 flex-center border-b border-color-gray-300;
    .top-link{
      --uno: flex-v-center hfull px4 text-3.5;
      --uno: hover:bg-gray-100 duration-300;
    }
  }
  .bottom-nav{
    --uno: flex-v-center h11 border-b-3 border-color-gray-700;
    --uno: lg:(border-b-4 border-color-gray-700) md:(border-b-4 border-color-gray-700);
    .bottom-link{
      --uno: hfull;
      --uno: hover:bg-gray-100 duration-300;
      div{
        --uno: text-3 md:(text-3.5 px4) h11 px2 fw600;
      }
    }
  }
}
</style>