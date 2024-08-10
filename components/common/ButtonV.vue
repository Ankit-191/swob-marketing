<script setup lang="ts">

  const p = defineProps<{
    disabled?: boolean
    submit?: boolean
    className?: string
  }>()
</script>

<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :disabled="disabled"
    :class="className"
    class="font-inter rounded-full border-2 border-black px-5 py-[9px] text-xs font-bold !leading-120 transition-all duration-300 ease-in-out hover:bg-black hover:text-white md:px-7 md:py-[12.5px] md:text-sm lg:text-base"
  >
    <slot />
  </button>
</template>
