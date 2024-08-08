<script setup lang="ts">
  import { useHead } from "#imports"
  import { useI18n } from "#i18n"

  const { locale } = useI18n()

  useHead({
    titleTemplate: (x) => (x ? `${x} | webentertainer` : "SWOB Marketing"),
    htmlAttrs: {
      lang: locale.value,
    },
  })
</script>

<template>
  <!--eslint-disable vue/no-multiple-template-root-->
  <Head>
    <Link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
    />
    <!-- Primary Meta Tags -->
    <title>Revolutioniere dein HR-Managementnerate</title>
    <meta name="title" content="Revolutioniere dein HR-Managementnerate" />
    <meta
      name="description"
      content="Eine HR-Software für jede Unternehmensgröße. Bleib über unsere Einführung auf dem Laufenden."
    />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://swob-marketing-main.vercel.app/" />
    <meta
      property="og:title"
      content="Revolutioniere dein HR-Managementnerate"
    />
    <meta
      property="og:description"
      content="Eine HR-Software für jede Unternehmensgröße. Bleib über unsere Einführung auf dem Laufenden."
    />
    <meta
      property="og:image"
      content="https://swob-marketing-main.vercel.app/assets/images/png/meta-tags.png"
    />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://swob-marketing-main.vercel.app/" />
    <meta
      property="twitter:title"
      content="Revolutioniere dein HR-Managementnerate"
    />
    <meta
      property="twitter:description"
      content="Eine HR-Software für jede Unternehmensgröße. Bleib über unsere Einführung auf dem Laufenden."
    />
    <meta
      property="twitter:image"
      content="https://swob-marketing-main.vercel.app/assets/images/png/meta-tags.png"
    />
  </Head>

  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
