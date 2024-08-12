<script setup lang="ts">
  import ButtonV from "~/components/common/ButtonV.vue"
  import { useTranslate } from "~/composables/useTranslate"
  import { ref } from "vue"
  const t = useTranslate()
  const show = ref<boolean>(false)
  const isMobile = ref<boolean>(false)
  const nav = {
    links: [
      {
        name: { en: "Home" },
        url: "/",
      },
      {
        name: { en: "Über uns" },
        url: "#about-us",
      },
      {
        name: { en: "Kontakt" },
        url: "#contact",
      },
      {
        name: { en: "FAQ" },
        url: "#faqs",
      },
    ],
  }
  function toggleMenu() {
    show.value = !show.value
    if (show.value && isMobile.value) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  // code to handle responsive behavior
  if (process.client) {
    const mediaQuery = window.matchMedia("(max-width: 767.98px)")
    const handleResize = () => {
      isMobile.value = mediaQuery.matches
      if (!isMobile.value) {
        show.value = false
      }
    }
    mediaQuery.addListener(handleResize)
    handleResize()
  }
</script>

<template>
  <nav class="bg-white shadow-nav-shadow">
    <div
      class="container mx-auto flex justify-between px-4 py-[18px] md:py-6 xl:max-w-[1272px]"
    >
      <div class="flex items-center gap-9 lg:gap-12">
        <NuxtLink to="/" class="relative z-50" @click="toggleMenu">
          <NuxtImg
            src="/assets/images/png/swob-logo.png"
            alt="logo"
            width="139"
            height="32"
            class="h-[24px] w-[104px] md:h-[28px] md:w-[122px] lg:h-[32px] lg:w-[139px]"
          />
        </NuxtLink>
        <div
          v-if="show || !isMobile"
          class="flex gap-7 max-md:fixed max-md:-start-0 max-md:top-0 max-md:z-10 max-md:h-screen max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center max-md:bg-white lg:gap-10"
        >
          <NuxtLink
            @click="toggleMenu"
            v-for="(value, index) of nav.links"
            :key="index"
            :to="value.url"
            class="font-inter relative text-lg font-bold leading-150 tracking-[0.5px] text-black after:absolute after:-bottom-1 after:start-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full md:text-base"
          >
            {{ t(value.name) }}
          </NuxtLink>
        </div>
      </div>
      <div class="flex gap-4">
        <ButtonV class="hover:bg-black hover:text-white">Anmelden</ButtonV>
        <button @click="toggleMenu" class="relative z-10">
          <NuxtImg
            v-if="!show"
            src="/assets/images/svg/menu-icon.svg"
            alt="menu"
            width="24"
            height="24"
            class="cursor-pointer md:hidden"
          />
          <NuxtImg
            v-else
            src="/assets/images/svg/close-icon.svg"
            alt="close"
            width="24"
            height="24"
            class="cursor-pointer md:hidden"
          />
        </button>
      </div>
    </div>
  </nav>
</template>
