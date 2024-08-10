<script setup lang="ts">
import { useTranslate } from "#imports"
import type { I18nString } from '~/types/util/I18nString';
import Icon from "../common/Icon";


const t = useTranslate()
defineProps<{
    title: I18nString
    subtitle: I18nString
    cardLink: I18nString
    CARD_DATA_LIST: Array<{
        iconName: string
        title: I18nString
        description: I18nString
    }>
}>()

</script>

<template>
    <section class="py-12 sm:py-14 md:py-16 lg:py-20" id="about-us">
        <div class="container mx-auto px-4 sm:px-5 max-w-[1300px]">
            <h2
                class="font-semibold font-sans max-w-[768px] text-center mx-auto xl:max-w-[662px] text-gray-dark !leading-110 text-[30px] sm:text-4xl md:text-5xl lg:text-5xxl">
                {{ t(title) }}</h2>
            <p
                class="font-sans text-lg sm:text-xl !leading-150 text-center mx-auto text-black-light w-full md:max-w-[768px] pt-4 sm:pt-5">
                {{ t(subtitle) }}
            </p>
            <div class="relative">
                <img class="max-w-[860px] w-full mx-auto pt-8 sm:pt-10 md:pt-12 max-sm:hidden"
                    src="/assets/images/webp/feature-mobile.webp" alt="feature-mobile">
                <img class="absolute top-[48%] left-[45%] lg:left-[46%] xl:left-[47%] max-sm:hidden sm:size-16 md:size-20 lg:size-[89px] cursor-pointer duration-300 hover:scale-95 hover:opacity-90"
                    src="/assets/images/png/play-icon.png" alt="play-icon">
            </div>
            <img class="max-w-[860px] w-full mx-auto pt-8 sm:py-12 md:py-16 sm:hidden max-sm:h-[392px] object-contain"
                src="/assets/images/webp/feature-mobile-girl.webp" alt="feature-mobile">

            <div class="flex flex-row md:pt-10 lg:pt-16 justify-center xl:justify-start flex-wrap max-w-[1168px] mx-auto">
                <div v-for="(value, index) in CARD_DATA_LIST" :key="index"
                    class="w-full md:w-1/2 xl:w-1/3 pt-8 xl:pt-0 px-0.5 sm:px-4 lg:px-0">
                    <div class="size-12 mx-auto rounded-full flex items-center justify-center bg-yellow-white">
                        <Icon :name="value.iconName" class="size-6" />
                    </div>
                    <p class="text-center text-gray-dark text-xl font-medium mt-5 mb-2 font-sans">
                        {{ t(value.title) }}
                    </p>
                    <p :class="index===1&&'max-w-[340px]'" class="text-base mb-5 max-w-[357px] text-center mx-auto text-black-light font-sans">
                        {{ t(value.description) }}
                    </p>
                    <NuxtLink
                        class="flex items-center justify-center text-yellow group gap-2 cursor-pointer font-medium font-base font-sans"
                        to="#"> {{ t(cardLink) }}<span>
                            <Icon name="arrowRight" class="text-yellow duration-300 group-hover:translate-x-0.5" />
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
