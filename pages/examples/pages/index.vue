<script setup lang="ts">
  import { useHead } from "#imports"
  import type { IPage } from "~/types/dto/IPage"
  import AnySection from "~/components/sections/AnySection.vue"

  const page: IPage = await $fetch("/api/pages", { query: { id: "000100" } })
  useHead(page.head)
</script>

<template>
  <main>
    <AnySection
      v-for="(section, i) of page.sections"
      :key="i"
      :data="section"
    />
  </main>
</template>
