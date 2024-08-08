<script setup lang="ts">
  import SafeHtml from "~/components/common/SafeHtml.vue"

  const p = defineProps<{
    title: string
    text: string
  }>()
</script>

<template>
  <section class="border-b p-4">
    <h2 class="mb-2 font-semibold">{{ title }}</h2>
    <SafeHtml :html="text" />
  </section>
</template>
