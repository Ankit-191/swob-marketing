<script setup lang="ts">
  import { useTranslate } from "~/composables/useTranslate"

  const t = useTranslate()

  const nav = {
    links: [
      {
        name: { en: "home" },
        url: "/",
      },
      {
        name: { en: "examples" },
        url: "/examples",
      },
    ],
  }
</script>

<template>
  <nav class="flex gap-4 border-b border-gray-500 p-4">
    <NuxtLinkLocale v-for="l of nav.links" :key="l.url" :to="l.url">
      {{ t(l.name) }}
    </NuxtLinkLocale>
  </nav>
</template>
