<script setup lang="ts">
import { useHead, useSeoMeta } from "#imports"
import { useI18n } from "#i18n"

const { locale } = useI18n()

useHead({
  titleTemplate: (x) => (x ? `${x} | webentertainer` : "SWOB Marketing"),
  htmlAttrs: {
    lang: locale.value,
  },
})
useSeoMeta({
  description: 'Eine HR-Software für jede Unternehmensgröße. Bleib über unsere Einführung auf dem Laufenden.',
  ogTitle: 'titRevolutioniere dein HR-Managementneratele',
  ogDescription: 'Eine HR-Software für jede Unternehmensgröße. Bleib über unsere Einführung auf dem Laufenden.',
  ogImage: 'https://swob-marketing-main.vercel.app/assets/images/png/meta-tags.png',
  ogUrl: 'https://swob-marketing-main.vercel.app/',
  twitterTitle: 'Revolutioniere dein HR-Managementnerate',
  twitterDescription: 'description',
  twitterImage: 'https://swob-marketing-main.vercel.app/assets/images/png/meta-tags.png',
  twitterCard: 'summary'
})
</script>

<template>
  <!--eslint-disable vue/no-multiple-template-root-->
  <Head>
    <Link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" />
  </Head>

  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
