<script setup lang="ts">
  import { useTranslate } from "#imports"
  import type { I18nString } from "~/types/util/I18nString"
  const t = useTranslate()
  defineProps<{
    title: I18nString
    sliderCards: {
      image: string
    }[]
  }>()
</script>
<template>
  <div class="bg-white-primary pb-10 pt-12 sm:bg-white-light md:py-16 lg:py-20">
    <div class="lg:ml-auto xl:ml-[calc((100%-1135px)/2)]">
      <h2
        class="font-inter max-w-[330px] px-4 text-3xl font-bold leading-110 text-black-dark max-lg:mx-auto max-lg:text-center sm:max-w-[1135px] md:text-4xxl"
      >
        {{ t(title) }}
      </h2>
    </div>
    <div
      class="diam-pretium-scroll ml-auto flex gap-4 overflow-x-scroll pb-7 ps-4 pt-[69px] lg:gap-6 lg:pt-[74px] xl:ml-[calc((100%-1135px)/2)]"
    >
      <div v-for="(value, index) of sliderCards" :key="index">
        <NuxtImg
          :src="value.image"
          alt="dashboard"
          width="768"
          height="514"
          class="h-[193px] w-full min-w-[288px] rounded-2xl object-cover shadow-faqs-shadow sm:h-[301px] sm:min-w-[450px] lg:h-[402px] lg:min-w-[600px] xl:h-[514px] xl:min-w-[768px]"
        />
      </div>
    </div>
  </div>
</template>
