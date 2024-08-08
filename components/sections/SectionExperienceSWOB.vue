<script setup lang="ts">
import { useTranslate } from "#imports"
import InputV from "../common/InputV.vue"
import type { I18nString } from '~/types/util/I18nString';

const t = useTranslate()
defineProps<{
    title: I18nString
    subtitle: I18nString
    cta: I18nString
}>()

</script>

<template>
    <section class="py-12 sm:py-14 md:py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-5 max-w-[1300px]">
            <div
                class="bg-light-yellow rounded-2xl lg:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 max-lg:!pb-0 flex relative">
                <div class="flex flex-col max-lg:mx-auto">
                    <h2
                        class="font-semibold font-sans sm:font-extrabold max-w-[620px] xl:max-w-[662px] text-black-gray !leading-110 text-[30px] sm:text-4xl md:text-5xl lg:text-5xxl">
                        {{ t(title) }}</h2>
                    <p class="font-sans text-lg !leading-150 text-black-light-gray w-full md:max-w-[500px] pt-4 lg:pt-1">
                        {{ t(subtitle) }}
                    </p>
                    <button
                        class="font-sans block mt-4 text-base !leading-130 rounded-full border border-transparent bg-black py-[13px] text-center font-bold text-white transition-all duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black sm:max-w-[246px]">
                        {{ t(cta) }}
                    </button>
                    <img src="/assets/images/png/experience-swob.png" alt="cartoon"
                        class="max-w-[460px] w-full lg:absolute bottom-0 right-0 xl:right-24 max-lg:pt-8 max-lg:mx-auto pointer-events-none">
                </div>
            </div>
        </div>
    </section>
</template>
