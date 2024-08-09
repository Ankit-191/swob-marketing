<script setup lang="ts">
import { useTranslate } from "#imports"
import type { I18nString } from "~/types/util/I18nString"
import ModernstePersonalData from "./ModernstePersonalData.vue";

const t = useTranslate()
defineProps<{
  title: I18nString
  subtitle: I18nString
}>()

const CARD_DATA_LIST = [
  {
    title: { en: "Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla nunc faucibus in in viverra.", },
    description: { en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa." },
    component: ModernstePersonalData
  },
  {
    title: { en: "Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla nunc faucibus in in viverra.", },
    description: { en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa." },
    component: ""
  },
  {
    title: { en: "Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla nunc faucibus in in viverra.", },
    description: { en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa." },
    component: ""
  },
  {
    title: { en: "Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla nunc faucibus in in viverra.", },
    description: { en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa." },
    component: ""
  },
]

</script>
<template>
  <div class="mx-auto max-w-[1358px] px-4 py-12 container">
    <h2 class="font-inter text-center text-3xl font-semibold !leading-110 text-gray-dark md:text-4xl">
      {{ t(title) }}
    </h2>
    <p
      class="mx-auto max-w-[768px] pt-4 text-center font-sans text-lg !leading-150 text-black-light md:pt-5 md:text-xl">
      {{ t(subtitle) }}
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-7 gap-8 pt-12 md:pt-8">
      <div v-for="(value, index) in CARD_DATA_LIST" :key="index" class="lg:col-span-4"
        :class="index === 1 ? 'lg:!col-span-3' : index === 2 && 'lg:!col-span-3'">
        <div class="h-full rounded-2xl bg-light-yellow p-4 md:p-6 xl:p-12 w-full flex flex-col"
          :class="index === 1 ? '!flex-col-reverse' : index === 2 && '!flex-col-reverse'">
          <div class="flex flex-col">
            <h2 class="text-gray-dark font-inter text-2xxl font-bold !leading-120 xl:pe-4">
              {{ t(value.title) }}
            </h2>
            <p class="font-inter text-md text-black-light pt-3 !leading-165">
              {{ t(value.description) }}
            </p>
          </div>
          <div class="w-full flex justify-center">
            <component :is="value.component" v-if="value.component" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
