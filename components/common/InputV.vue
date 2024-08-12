<script setup lang="ts">
  const p = defineProps<{
    label?: string | number
    placeholder?: string
    type?: "text" | "number" | "email" | "password" | "date"
    required?: boolean
    disabled?: boolean
    lableClass?: string
    inputClass?: string
  }>()

  const modelValue = defineModel<any>()
</script>

<template>
  <label>
    <span
      v-if="label"
      :class="lableClass"
      class="block pb-1 text-xs font-bold text-gray-dark"
    >
      {{ label }}
    </span>
    <input
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder ?? ''"
      :disabled="disabled"
      :required="required"
      class="font-inter rounded-lg border border-gray-light px-5 py-[13.2px] text-lg leading-110 text-black-light placeholder:text-lg placeholder:leading-110 placeholder:text-black-light"
      :class="inputClass"
    />
  </label>
</template>
