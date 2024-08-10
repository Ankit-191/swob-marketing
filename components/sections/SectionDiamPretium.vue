<script setup lang="ts">
  import { useTranslate } from "#imports"
  import type { I18nString } from "~/types/util/I18nString"
  const t = useTranslate()
  defineProps<{
    title: I18nString
  }>()

  const dashboardCards = [
    {
      image: "/assets/images/png/dashboard-diam.png",
    },
    {
      image: "/assets/images/png/employees-hr-manager-diam.png",
    },
    {
      image: "/assets/images/png/dashboard-diam.png",
    },
  ]
</script>
<template>
  <div class="bg-white-primary sm:bg-white-light pt-12 pb-10 md:py-16 lg:py-20">
    <h2
      class="font-inter text-black-dark mx-auto max-w-[330px] sm:max-w-[1135px] px-4 text-3xl font-bold !leading-110 max-lg:text-center md:text-4xxl "
    >
      {{ t(title) }}
    </h2>
    <div
      class="diam-pretium-scroll ml-auto flex max-w-[1285px] gap-4 overflow-x-scroll pb-7 ps-4 pt-[69px] lg:gap-6 lg:pt-[74px] 2xl:max-w-[1335px] min-[1900px]:max-w-[1530px]"
    >
      <div v-for="(obj, index) in dashboardCards" :key="index">
        <img
          :src="obj.image"
          alt="dashboard"
          width="768"
          height="514"
          class="w-full min-w-[288px] rounded-2xl shadow-faqs-shadow sm:min-w-[450px] lg:min-w-[600px] xl:min-w-[768px]"
        />
      </div>
    </div>
  </div>
</template>
