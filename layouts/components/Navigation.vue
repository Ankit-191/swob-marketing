<script setup lang="ts">
import ButtonV from "~/components/common/ButtonV.vue"
import { useTranslate } from "~/composables/useTranslate"
import { ref } from "vue";
const t = useTranslate()
const show = ref<boolean>(false);
const isMobile = ref<boolean>(false);
const nav = {
  links: [
    {
      name: { en: "Home" },
      url: "/",
    },
    {
      name: { en: "Über uns" },
      url: "/examples",
    },
    {
      name: { en: "Kontakt" },
      url: "/",
    },
    {
      name: { en: "FAQ" },
      url: "/",
    },
  ],
}
const toggleMenu = () => {
  show.value = !show.value;
  if (show.value && isMobile.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};
if (process.client) {
  const mediaQuery = window.matchMedia("(max-width: 767.98px)");
  const handleResize = () => {
    isMobile.value = mediaQuery.matches;
    if (!isMobile.value) {
      show.value = false;
    }
  };
  mediaQuery.addListener(handleResize);
  handleResize();
}
</script>

<template>
  <nav class="shadow-nav-shadow bg-white">
    <div class="container mx-auto flex justify-between px-4 py-6 xl:max-w-[1272px]">
      <div class="flex items-center gap-9 lg:gap-12">
        <NuxtLinkLocale to="/" class="relative z-50" @click="toggleMenu">
          <img src="/images/png/swob-logo.png" alt="logo" width="139" height="32"
            class="h-[24px] w-[104px] md:h-[28px] md:w-[122px] lg:h-[32px] lg:w-[139px]" />
        </NuxtLinkLocale>
        <div v-if="show || !isMobile"
          class="flex gap-7 max-md:fixed max-md:z-10 max-md:-start-0 max-md:top-0 max-md:h-screen max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center max-md:bg-white lg:gap-10">
          <NuxtLinkLocale v-for="l of nav.links" :key="l.url" :to="l.url"
            class="font-inter !leading-150 text-lg md:text-base relative font-bold tracking-[0.5px] text-black after:absolute after:-bottom-1 after:start-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            {{ t(l.name) }}
          </NuxtLinkLocale>
        </div>
      </div>
      <div class="flex gap-4">
        <ButtonV>Anmelden</ButtonV>
        <button @click="toggleMenu" class="relative z-10">
          <img src="/images/svg/menu-icon.svg" alt="menu" width="24" height="24" class="cursor-pointer md:hidden" />
        </button>
      </div>
    </div>
  </nav>
</template>
