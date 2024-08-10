<template>
  <div
    v-show="visible"
    class="fixed bottom-4 end-4 z-10 cursor-pointer rounded-full border border-white"
    @click="scrollToTop"
  >
    <NuxtImg src="/assets/images/svg/back-to-top-icon.svg" alt="top-button" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll)
    },
    methods: {
      handleScroll() {
        this.visible = window.scrollY > 200
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" })
      },
    },
  }
</script>
