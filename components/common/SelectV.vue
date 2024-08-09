<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  label?: string | number;
  options: string[];
  texts?: string[];
  disabled?: boolean;
}>();

const modelValue = defineModel<any>();
const selectedValue = ref(modelValue ?? props.options[0]);
watch(
  () => selectedValue.value,
  (newValue) => {
    modelValue.value = newValue;
  }
);
watch(
  () => modelValue,
  (newValue) => {
    selectedValue.value = newValue;
  }
);
</script>

<template>
  <label>
    <span v-if="label" class="block pb-1">{{ label }}</span>
    <select v-model="selectedValue" :disabled="props.disabled || props.options.length <= 1"
      class="font-inter text-lg custom-select px-2.5 py-3.5 max-sm:py-[9px] sm:!px-5 !text-black-light max-sm:text-[11.2px] placeholder:max-sm:text-[11.2px] line-clamp-6 placeholder:text-black-light placeholder:text-lg placeholder:!leading-110 !leading-110 appearance-none">
      <option v-for="(option, index) in props.options" :value="option" :key="option">
        {{ props.texts?.[index] ?? option }}
      </option>
    </select>
  </label>
</template>
