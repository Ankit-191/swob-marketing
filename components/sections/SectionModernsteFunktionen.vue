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
  <div class="mx-auto max-w-[1349px] px-4 py-12">
    <h2
      class="font-inter text-center text-3xl font-semibold !leading-110 text-gray-dark md:text-4xl"
    >
      {{ t(title) }}
    </h2>
    <p
      class="mx-auto max-w-[768px] pt-4 text-center font-sans text-lg !leading-150 text-black-light md:pt-5 md:text-xl"
    >
      {{ t(subtitle) }}
    </p>
    <div class="flex flex-wrap gap-y-6 pt-12 md:pt-8 xl:gap-y-8">
      <div class="w-full md:w-6/12 md:pe-3 lg:w-7/12 xl:pe-4">
        <div class="h-full rounded-2xl bg-yellow p-4 md:p-6 xl:p-12">
          <h2 class="text-gray-dark font-inter text-2xxl font-bold !leading-120 xl:pe-4">
            Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat
            nulla nunc faucibus in in viverra.
          </h2>
          <p class="font-inter text-md text-black-light pt-3 !leading-165">
            Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
            sollicitudin viverra. Phasellus elementum potenti lacinia commodo
            sollicitudin diam massa.
          </p>
        </div>
      </div>
      <div class="w-full md:w-6/12 lg:w-5/12 md:ps-3 xl:ps-4">
       <div class="h-full rounded-2xl bg-yellow p-4 md:p-6 xl:p-12">
          <h2 class="text-gray-dark font-inter text-2xxl font-bold !leading-120 xl:pe-4">
            Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat
            nulla nunc faucibus in in viverra.
          </h2>
          <p class="font-inter text-md text-black-light pt-3 !leading-165">
            Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
            sollicitudin viverra. Phasellus elementum potenti lacinia commodo
            sollicitudin diam massa.
          </p>
        </div>
      </div>
      <div class="w-full md:w-6/12 lg:w-5/12 md:pe-3 xl:pe-4">
       <div class="h-full rounded-2xl bg-yellow p-4 md:p-6 xl:p-12">
          <h2 class="text-gray-dark font-inter text-2xxl font-bold !leading-120 xl:pe-4">
            Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat
            nulla nunc faucibus in in viverra.
          </h2>
          <p class="font-inter text-md text-black-light pt-3 !leading-165">
            Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
            sollicitudin viverra. Phasellus elementum potenti lacinia commodo
            sollicitudin diam massa.
          </p>
        </div>
      </div>
      <div class="w-full md:w-6/12 lg:w-7/12 md:ps-3 xl:ps-4">
       <div class="h-full rounded-2xl bg-yellow p-4 md:p-6 xl:p-12">
          <h2 class="text-gray-dark font-inter text-2xxl font-bold !leading-120 xl:pe-4">
            Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat
            nulla nunc faucibus in in viverra.
          </h2>
          <p class="font-inter text-md text-black-light pt-3 !leading-165">
            Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu
            sollicitudin viverra. Phasellus elementum potenti lacinia commodo
            sollicitudin diam massa.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
