<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from "vue"

  const visible = ref(false)

  function handleScroll() {
    visible.value = window.scrollY > 200
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  onMounted(() => {
    window.addEventListener("scroll", handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll)
  })
</script>

<template>
  <div
    v-show="visible"
    class="fixed bottom-4 end-4 z-10 cursor-pointer rounded-full border border-white transition-all duration-300 hover:-translate-y-2"
    @click="scrollToTop"
  >
    <NuxtImg
      src="/assets/images/svg/back-to-top-icon.svg"
      alt="top-button"
      class="size-10"
    />
  </div>
</template>
