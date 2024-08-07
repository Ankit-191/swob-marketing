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
    class="font-inter text-xs md:text-sm lg:text-base !leading-120 rounded-full border-2 border-black px-5 md:px-7 py-[9px] md:py-[12.5px] text-black font-bold transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
  >
    <slot />
  </button>
</template>
