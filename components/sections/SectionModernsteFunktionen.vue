<script setup lang="ts">
import { useTranslate } from "#imports"
import type { I18nString } from "~/types/util/I18nString"

const t = useTranslate()
defineProps<{
  title: I18nString
  subtitle: I18nString
  CARD_DATA_LIST: Array<{
    title: I18nString
    description: I18nString
    component: I18nString
  }>
}>()
</script>
<template>
  <div class="container mx-auto max-w-[1358px] px-4 py-12">
    <h2 class="font-inter text-center text-3xl font-semibold !leading-110 text-gray-dark md:text-4xl">
      {{ t(title) }}
    </h2>
    <p
      class="mx-auto max-w-[768px] pt-4 text-center font-sans text-lg !leading-150 text-black-light md:pt-5 md:text-xl">
      {{ t(subtitle) }}
    </p>
    <div class="grid grid-cols-1 gap-8 pt-12 md:pt-8 lg:grid-cols-7">
      <div v-for="(value, index) in CARD_DATA_LIST" :key="index" class="lg:col-span-4" :class="index === 1 ? 'lg:!col-span-3' : index === 2 && 'lg:!col-span-3'
        ">
        <div
          class="flex h-full w-full flex-col justify-between rounded-2xl bg-light-yellow p-4 md:p-6 xl:p-12 xl:!pb-10"
          :class="index === 1
              ? '!flex-col-reverse'
              : index === 2 && '!flex-col-reverse max-sm:pt-8'
            ">
          <div class="flex flex-col">
            <h2 class="font-inter text-2xxl font-bold !leading-120 text-gray-dark xl:pe-4">
              {{ t(value.title) }}
            </h2>
            <p class="font-inter pt-3 text-md !leading-165 text-black-light">
              {{ t(value.description) }}
            </p>
          </div>
          <div class="flex w-full justify-center">
            <component :is="value.component" v-if="value.component" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
