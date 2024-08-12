<script setup lang="ts">
  import { useTranslate } from "#imports"
  import type { I18nString } from "~/types/util/I18nString"
  import InputV from "~/components/common/InputV.vue"
  import SelectV from "~/components/common/SelectV.vue"
  import { ref } from "vue"
  import Icon from "~/components/common/Icon.vue"

  const t = useTranslate()
  defineProps<{
    title: I18nString
    subtitle: I18nString
    label?: string | number
    options: string[]
    texts?: string[]
    disabled?: boolean
  }>()
  const nationalities = ["Schweiz", "lorem", "ipsum"]
  const residenceStatus = ["Aufenthaltsstatus", "lorem", "ipsum"]

  const nationality = ref(nationalities[0])
  const residence = ref(residenceStatus[0])
</script>
<template>
  <div
    class="mt-4 flex w-full max-w-[500px] flex-col gap-2.5 rounded-xl border border-gray-light bg-white p-3 sm:mt-6 sm:gap-4 sm:p-5 md:rounded-[20px] lg:-mb-2.5 lg:mt-7"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-1 sm:gap-2">
        <NuxtImg
          class="pointer-events-none size-3.5 sm:size-6"
          src="/assets/images/png/user-circle.png"
          alt="user-circle"
        />
        <p class="font-sans text-[10px] font-bold leading-110 sm:text-base">
          Personendaten
        </p>
      </div>
      <NuxtImg
        class="pointer-events-none size-3 cursor-pointer sm:size-5"
        src="/assets/images/png/up-arrow.png"
        alt="user-circle"
      />
    </div>
    <div class="grid grid-cols-2 gap-6">
      <InputV
        placeholder="Vorname"
        type="text"
        required
        label="Vorname"
        inputclass="max-sm:text-xs placeholder:max-sm:text-[11.2px] max-sm:py-2 sm:!px-5"
        lableClass="max-sm:text-[7.46px] max-sm:pb-0.5"
      />
      <InputV
        placeholder="Nachname"
        type="text"
        required
        label="Nachname"
        inputclass="max-sm:text-xs placeholder:max-sm:text-[11.2px] max-sm:py-2 sm:!px-5"
        lableClass="max-sm:text-[7.46px] max-sm:pb-0.5"
      />
    </div>
    <InputV
      type="date"
      required
      label="Geburtsdatum"
      inputclass="max-sm:text-xs placeholder:max-sm:text-[11.2px] max-sm:py-2 sm:!px-5"
      lableClass="max-sm:text-[7.46px] max-sm:pb-0.5"
      id="customDate"
    />
    <div class="grid grid-cols-2 gap-3.5 sm:gap-6">
      <div class="flex flex-col">
        <p
          class="mb-1 text-xs font-bold text-gray-dark max-sm:mb-0.5 max-sm:text-[7.46px]"
        >
          Nationalität
        </p>
        <div class="relative flex w-full rounded-lg border border-gray-light">
          <div class="w-full">
            <SelectV v-model="nationality" :options="nationalities"></SelectV>
          </div>
          <div
            class="pointer-events-none absolute right-3 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer sm:right-3"
          >
            <Icon class="block size-4 sm:size-6" name="caretDownArrow" />
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col">
        <p
          class="mb-1 text-xs font-bold text-gray-dark max-sm:mb-0.5 max-sm:text-[7.46px]"
        >
          Aufenthaltsstatus
        </p>
        <div class="relative flex w-full rounded-lg border border-gray-light">
          <div class="w-full">
            <SelectV v-model="residence" :options="residenceStatus"></SelectV>
          </div>
          <div
            class="pointer-events-none absolute right-3 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer md:right-3"
          >
            <Icon class="block size-4 sm:size-6" name="caretDownArrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Style the select box */
  .custom-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .custom-select option {
    @apply bg-white p-2;
    color: #333;
  }

  .custom-select option:hover {
    background-color: #f0f0f0;
  }
</style>
