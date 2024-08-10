<script setup lang="ts">
  import Footer from "~/layouts/components/Footer.vue";
import Navigation from "~/layouts/components/Navigation.vue";
import BackToTop from "~/layouts/components/BackToTop.vue";
</script>

<template>
  <div class="flex min-h-[100dvh] flex-col max-w-[1920px] mx-auto relative">
    <BackToTop />
    <Navigation />
    <div class="flex-grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>
