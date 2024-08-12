<script setup lang="ts">
  import { useTranslate } from "#imports"
  import type { I18nString } from "~/types/util/I18nString"
  import ButtonV from "~/components/common/ButtonV.vue"

  const t = useTranslate()
  defineProps<{
    title: I18nString
    subtitle: I18nString
    cta: I18nString
  }>()
</script>

<template>
  <section class="py-12 sm:py-14 md:py-16 lg:py-20" id="contact">
    <div class="container mx-auto max-w-[1300px] px-4 sm:px-5">
      <div
        class="relative flex rounded-2xl bg-light-yellow p-6 max-lg:pb-0 sm:p-8 md:p-12 lg:rounded-[40px] lg:p-16 xl:p-24"
      >
        <div class="flex flex-col max-lg:mx-auto">
          <h2
            class="max-w-[620px] font-sans text-3xl font-semibold leading-110 text-black-gray sm:text-4xl sm:font-extrabold md:text-5xl lg:text-[52px] xl:max-w-[662px]"
          >
            {{ t(title) }}
          </h2>
          <p
            class="leading-165 w-full pt-4 font-sans text-lg text-black-light-gray md:max-w-[500px] lg:pt-1"
          >
            {{ t(subtitle) }}
          </p>
          <ButtonV
            type="button"
            class="mt-4 bg-black py-[12.5px] text-center text-base text-white hover:border-black hover:bg-white hover:text-black sm:max-w-[246px]"
          >
            {{ t(cta) }}
          </ButtonV>
          <NuxtImg
            src="/assets/images/webp/experience-swob.webp"
            alt="cartoon"
            class="pointer-events-none bottom-0 right-0 w-full max-w-[410px] max-lg:mx-auto max-lg:pt-8 max-sm:min-h-[293px] lg:absolute lg:max-w-[460px] xl:right-24 xl:h-[405px] xl:max-w-[486px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
