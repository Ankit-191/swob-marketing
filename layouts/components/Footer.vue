<script setup lang="ts">
  import { useTranslate } from "~/composables/useTranslate"

  const t = useTranslate()

  const footer = {
    text: { en: "SWOB. All rights reserved." },
  }
  const currentYear = new Date().getFullYear()
  const footerLinks = {
    links: [
      {
        name: { en: "AGB" },
        url: "/",
      },
      {
        name: { en: "DSGVO" },
        url: "/",
      },
      {
        name: { en: "kontakt" },
        url: "/",
      },
    ],
  }
  const socialIcons = [
    {
      image: "/assets/images/svg/youtube.svg",
      url: "https://www.youtube.com/",
    },
    {
      image: "/assets/images/svg/facebook.svg",
      url: "https://www.facebook.com/",
    },
    {
      image: "/assets/images/svg/twitter.svg",
      url: "https://twitter.com/",
    },
    {
      image: "/assets/images/svg/instagram.svg",
      url: "https://instagram.com/",
    },
    {
      image: "/assets/images/svg/linkedin.svg",
      url: "https://linkedin.com/",
    },
  ]
</script>

<template>
  <footer
    class="container mx-auto flex max-w-[1312px] justify-between px-4 py-6 max-md:flex-col max-md:justify-center md:py-9"
  >
    <NuxtLink to="/" class="mx-auto mb-6 md:hidden">
      <NuxtImg
        src="/assets/images/png/swob-logo.png"
        alt="logo"
        width="139"
        height="32"
      />
    </NuxtLink>
    <p class="font-inter text-base leading-140 text-black max-md:text-center">
      @ {{ currentYear }} {{ t(footer.text) }}
    </p>
    <div class="mt-11 flex gap-11 max-md:flex-col md:mt-0 md:gap-8 lg:gap-12">
      <div class="flex gap-8 max-md:justify-center md:gap-6 lg:gap-8">
        <NuxtLinkLocale
          v-for="(value, index) of footerLinks.links"
          :key="index"
          :to="value.url"
          class="font-inter relative text-base font-normal leading-150 text-black after:absolute after:-bottom-1 after:start-0 after:h-[3px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
        >
          {{ t(value.name) }}
        </NuxtLinkLocale>
      </div>
      <div class="flex gap-4 max-md:justify-center">
        <NuxtLink
          class="transition-all duration-300 ease-in-out hover:-translate-y-1"
          v-for="(value, index) of socialIcons"
          :key="index"
          :href="value.url"
          target="_blank"
        >
          <NuxtImg :src="value.image" alt="icons" width="24" height="24" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
