<script setup lang="ts">
  import { useTranslate } from "#imports"
  import type { I18nString } from "~/types/util/I18nString"
  import Icon from "~/components/common/Icon.vue"

  const t = useTranslate()
  defineProps<{
    title: I18nString
    subtitle: I18nString
    cardLink: I18nString
    features: {
      iconName:
        | "arrowUp"
        | "arrowRight"
        | "arrowDown"
        | "arrowLeft"
        | "messageBox"
        | "zeitUndIcon"
        | "hrAnalyticsIcon"
        | "caretDownArrow"
        | "sixBlackDot"
        | "redFlag"
        | "threeBlackDot"
        | "clockIcon"
        | "profileIcon"
        | "telIcon"
      title: I18nString
      description: I18nString
    }[]
  }>()
</script>

<template>
  <section class="py-12 sm:py-14 md:py-16 lg:py-20" id="about-us">
    <div class="container mx-auto max-w-[1300px] px-4 sm:px-5">
      <h2
        class="mx-auto max-w-[768px] text-center font-sans text-[30px] font-semibold leading-110 text-gray-dark sm:text-4xl md:text-5xl lg:text-5xxl xl:max-w-[662px]"
      >
        {{ t(title) }}
      </h2>
      <p
        class="mx-auto w-full pt-4 text-center font-sans text-lg leading-150 text-black-light sm:pt-5 sm:text-xl md:max-w-[768px]"
      >
        {{ t(subtitle) }}
      </p>
      <div class="relative">
        <NuxtImg
          class="mx-auto w-full max-w-[860px] pt-8 max-sm:hidden sm:pt-10 md:pt-12"
          src="/assets/images/webp/feature-mobile.webp"
          alt="feature-mobile"
        />
        <NuxtImg
          class="absolute left-[45%] top-[48%] cursor-pointer duration-300 hover:scale-95 hover:opacity-90 max-sm:hidden sm:size-16 md:size-20 lg:left-[46%] lg:size-[89px] xl:left-[47%]"
          src="/assets/images/png/play-icon.png"
          alt="play-icon"
        />
      </div>
      <NuxtImg
        class="mx-auto w-full max-w-[860px] object-contain pt-8 max-sm:h-[392px] sm:hidden sm:py-12 md:py-16"
        src="/assets/images/webp/feature-mobile-girl.webp"
        alt="feature-mobile"
      />

      <div
        class="mx-auto flex max-w-[1168px] flex-row flex-wrap justify-center md:pt-10 lg:pt-16 xl:justify-start"
      >
        <div
          v-for="(value, index) of features"
          :key="index"
          class="w-full px-0.5 pt-8 sm:px-4 md:w-1/2 lg:px-0 xl:w-1/3 xl:pt-0"
        >
          <div
            class="mx-auto flex size-12 items-center justify-center rounded-full bg-yellow-white"
          >
            <Icon :name="value.iconName" class="size-6" />
          </div>
          <p
            class="mb-2 mt-5 text-center font-sans text-xl font-medium text-gray-dark"
          >
            {{ t(value.title) }}
          </p>
          <p
            :class="index === 1 && 'max-w-[340px]'"
            class="mx-auto mb-5 max-w-[357px] text-center font-sans text-base text-black-light"
          >
            {{ t(value.description) }}
          </p>
          <NuxtLink
            class="font-base group flex cursor-pointer items-center justify-center gap-2 font-sans font-medium text-yellow"
            to="#"
          >
            {{ t(cardLink) }}
            <span>
              <Icon
                name="arrowRight"
                class="text-yellow duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
