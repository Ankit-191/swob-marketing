<script setup lang="ts">
  import { useTranslate } from "#imports"
  import type { I18nString } from "~/types/util/I18nString"

  const t = useTranslate()
  defineProps<{
    title: I18nString
    subtitle: I18nString
    cta: I18nString
    META_BLU_LIST: Array<{
      image: I18nString
    }>
  }>()
</script>

<template>
  <section class="py-12 sm:py-14 md:py-16 lg:py-20">
    <div class="container mx-auto max-w-[1130px] px-4 sm:px-5">
      <div
        class="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-[106px]"
      >
        <NuxtImg
          class="cursor-pointer opacity-20 transition-all duration-300 ease-in-out hover:opacity-100"
          :class="`${
            index === 0
              ? 'w-[184px]'
              : index === 1
                ? 'w-[74px] sm:w-[109px]'
                : index === 2
                  ? 'w-[118px] sm:w-[132px]'
                  : index === 3
                    ? 'w-[74px] sm:w-[93px]'
                    : index === 4
                      ? 'w-[182px] sm:w-[146px]'
                      : 'w-[184px]'
          }`"
          :src="value.image"
          alt="meta-icons"
          v-for="(value, index) of META_BLU_LIST"
          :key="index"
        />
      </div>
    </div>
  </section>
</template>
