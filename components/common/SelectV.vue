<script setup lang="ts">
  import { ref, watch } from "vue"

  const props = defineProps<{
    label?: string | number
    options: string[]
    texts?: string[]
    disabled?: boolean
    selectClass?: string
  }>()

  const modelValue = defineModel<any>()
  const selectedValue = ref(modelValue.value ?? props.options[0])
  watch(
    () => selectedValue.value,
    (newValue) => {
      modelValue.value = newValue
    },
  )
  watch(
    () => modelValue,
    (newValue) => {
      selectedValue.value = newValue
    },
  )
</script>

<template>
  <label>
    <span v-if="props.label" class="block pb-1">{{ props.label }}</span>
    <select
      v-model="selectedValue"
      :disabled="props.disabled || props.options.length <= 1"
      class="font-inter custom-select line-clamp-6 appearance-none px-2.5 py-3.5 text-lg leading-110 text-black-light placeholder:text-lg placeholder:leading-110 placeholder:text-black-light max-sm:py-[9px] max-sm:text-[11.2px] placeholder:max-sm:text-[11.2px] sm:px-5"
      :class="selectClass"
    >
      <option
        v-for="(option, index) of props.options"
        :value="option"
        :key="option"
      >
        {{ props.texts?.[index] ?? option }}
      </option>
    </select>
  </label>
</template>
