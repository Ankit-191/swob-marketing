<script setup lang="ts">
  const p = defineProps<{
    label?: string | number
    placeholder?: string
    type?: "text" | "number" | "email" | "password" | "date"
    required?: boolean
    disabled?: boolean
    className?: string
  }>()

  const modelValue = defineModel<any>()
</script>

<template>
  <label>
    <span v-if="label" class="block pb-1 text-xs font-bold text-gray-dark">{{ label }}</span>
    <input
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder ?? ''"
      :disabled="disabled"
      :required="required"
      :class="className"
      class="border-gray-light font-inter text-lg !text-black-light placeholder:text-black-light placeholder:text-lg placeholder:!leading-110 !leading-110 rounded-lg border px-2.5 py-[13.2px]"
    />
  </label>
</template>
