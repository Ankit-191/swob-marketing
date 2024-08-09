<script setup lang="ts">
  import { useTranslate } from "#imports"
  import type { I18nString } from "~/types/util/I18nString"
  import HeroForm from "../common/HeroForm.vue"

  const t = useTranslate()
  defineProps<{
    title: I18nString
    subtitle: I18nString
  }>()
</script>

<template>
  <section class="relative mb-[50px] md:mb-20 lg:mb-[114px] bg-yellow py-12 md:pb-9 md:pt-[78px]">
    <img
      src="/assets/images/png/hero-bottom-layer.png"
      alt="layer"
      width="1440"
      height="114"
      class="absolute -bottom-[50px] start-0 h-[50px] w-full md:-bottom-20 md:h-[80px] lg:-bottom-[113px] lg:h-[114px]"
    />
    <div class="container mx-auto max-w-[1090px] px-4">
      <div class="flex flex-wrap justify-center md:justify-between">
        <div
          class="text-center sm:w-8/12 md:w-6/12 md:text-start lg:w-7/12 xl:w-6/12"
        >
          <h1
            class="font-inter text-4xl font-semibold !leading-120 !tracking-[-0.04em] text-gray-dark md:text-4xxl lg:text-6xl"
          >
            {{ t(title) }}
          </h1>
          <p
            class="font-inter pb-8 pt-4 text-lg font-normal !leading-140 text-black-light md:max-w-[405px] md:py-6"
          >
            {{ t(subtitle) }}
          </p>
          <HeroForm />
        </div>
        <div class="mt-10 sm:w-8/12 md:mt-0 md:w-6/12 lg:w-5/12 relative">
          <img
            src="/assets/images/png/hero-image.png"
            alt="boy"
            width="429"
            height="590"
            class="mx-auto w-full max-w-[272px] sm:max-w-[360px] lg:max-w-[390px] xl:max-w-[429px]"
          />
          <img src="/assets/images/png/hero-image-bottom-layer.png" alt="shadow" width="429" height="10" class="absolute start-1/2 -translate-x-1/2 -bottom-5 md:-bottom-0 xl:-bottom-5 sm:w-[75%] lg:w-[90%] xl:w-full">
        </div>
      </div>
    </div>
  </section>
</template>
