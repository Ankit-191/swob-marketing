<script setup lang="ts">
  import { useTranslate } from "#imports"
  import type { I18nString } from "~/types/util/I18nString"

  const t = useTranslate()
  defineProps<{
    title: I18nString
    subtitle: I18nString
  }>()
</script>
<template>
  <div class="mx-auto max-w-[1344px] px-4 py-12">
    <h2
      class="font-inter text-center text-3xl font-semibold !leading-110 text-gray-dark md:text-4xl"
    >
      {{ t(title) }}
    </h2>
    <p
      class="mx-auto max-w-[768px] pt-4 md:pt-5 text-center font-sans text-lg md:text-xl !leading-150 text-black-light"
    >
      {{ t(subtitle) }}
    </p>
    <div class="flex flex-wrap pt-12 md:mt-8 gap-y-6 xl:gap-y-8">
      <div class="w-full md:w-6/12 lg:w-7/12 md:pe-3 xl:pe-4">
        <div class="bg-yellow h-[595px] rounded-2xl p-12">

        </div>
      </div>
      <!-- <div class="w-full md:w-6/12 lg:w-5/12 md:ps-3 xl:ps-4">
        <div class="bg-yellow h-[595px] rounded-2xl"></div>
      </div>
      <div class="w-full md:w-6/12 lg:w-5/12 md:pe-3 xl:pe-4">
        <div class="bg-yellow h-[595px] rounded-2xl"></div>
      </div>
      <div class="w-full md:w-6/12 lg:w-7/12 md:ps-3 xl:ps-4">
        <div class="bg-yellow h-[595px] rounded-2xl"></div>
      </div> -->
    </div>
  </div>
</template>
