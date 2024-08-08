<script setup lang="ts">
import { useTranslate } from "~/composables/useTranslate"

  const t = useTranslate()

  const footer = {
    text: { en: "@ 2023 SWOB. All rights reserved." },
  }
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
  const footerSocialIcons = [
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
    class="container mx-auto flex max-w-[1312px] justify-between px-4 py-9"
  >
    <p class="font-inter text-base !leading-140 text-black">
      {{ t(footer.text) }}
    </p>
    <div class="flex gap-12">
      <div class="flex gap-8">
        <NuxtLinkLocale
          v-for="l of footerLinks.links"
          :key="l.url"
          :to="l.url"
          class="font-inter !leading-150 text-base relative font-normal text-black"
        >
          {{ t(l.name) }}
        </NuxtLinkLocale>
      </div>
      <div class="flex gap-4">
        <NuxtLink class="hover:-translate-y-1 transition-all duration-300 ease-in-out"
          v-for="(obj, index) in footerSocialIcons"
          :key="index"
          :href="obj.url" target="_blank"
        >
          <img :src="obj.image" alt="icons" width="24" height="24" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
