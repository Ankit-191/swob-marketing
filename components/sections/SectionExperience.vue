<script setup lang="ts">
import { useTranslate } from "#imports";
import type { I18nString } from '~/types/util/I18nString';
import ButtonV from "../common/ButtonV.vue";

const t = useTranslate()
defineProps<{
    title: I18nString
    subtitle: I18nString
    cta: I18nString
}>()

</script>

<template>
    <section class="py-12 sm:py-14 md:py-16 lg:py-20" id="contact">
        <div class="container mx-auto px-4 sm:px-5 max-w-[1300px]">
            <div
                class="bg-light-yellow rounded-2xl lg:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 max-lg:!pb-0 flex relative">
                <div class="flex flex-col max-lg:mx-auto">
                    <h2
                        class="font-semibold font-sans sm:font-extrabold max-w-[620px] xl:max-w-[662px] text-black-gray !leading-110 text-3xl sm:text-4xl md:text-5xl lg:text-[52px]">
                        {{ t(title) }}</h2>
                    <p
                        class="font-sans text-lg !leading-165 text-black-light-gray w-full md:max-w-[500px] pt-4 lg:pt-1">
                        {{ t(subtitle) }}
                    </p>
                    <ButtonV type="button"
                        className="text-center sm:max-w-[246px] mt-4 text-white bg-black hover:border-black hover:bg-white hover:!text-black !py-[12.5px] !text-base">
                        {{ t(cta) }}</ButtonV>
                    <NuxtImg src="/assets/images/webp/experience-swob.webp" alt="cartoon"
                        class="max-w-[410px] max-sm:min-h-[293px] lg:max-w-[460px] xl:max-w-[486px] xl:h-[405px] w-full lg:absolute bottom-0 right-0 xl:right-24 max-lg:pt-8 max-lg:mx-auto pointer-events-none" />
                </div>
            </div>
        </div>
    </section>
</template>
