<script setup lang="ts">
  const p = defineProps<{
    disabled?: boolean
    submit?: boolean
  }>()
</script>

<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :disabled="disabled"
    class="h-10 border px-2 text-center"
  >
    <slot />
  </button>
</template>
