<script setup lang="ts">
  import { useTranslate } from "~/composables/useTranslate"

  const t = useTranslate()

  const footer = {
    text: { en: "©Webentertainer GmbH" },
  }
</script>

<template>
  <footer class="border-t border-gray-500 p-4">
    {{ t(footer.text) }}
  </footer>
</template>
