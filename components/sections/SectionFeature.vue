<script setup lang="ts">
import { useTranslate } from "#imports"
import InputV from "../common/InputV.vue"
import type { I18nString } from '~/types/util/I18nString';

const t = useTranslate()
defineProps<{
    title: I18nString
    subtitle: I18nString
}>()

</script>

<template>
    <section class="py-12 sm:py-14 md:py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-5 max-w-[1300px]">
            <h2
                class="font-semibold font-sans sm:font-extrabold max-w-[768px] text-center mx-auto xl:max-w-[662px] text-black-gray !leading-110 text-[30px] sm:text-4xl md:text-5xl lg:text-5xxl">
                {{ t(title) }}</h2>
            <p class="font-sans text-xl !leading-150 text-center mx-auto text-black-light w-full md:max-w-[768px] pt-4 sm:pt-5">
                {{ t(subtitle) }}
            </p>
            <img class="max-w-[860px] w-full mx-auto py-8 sm:py-12 md:py-16" src="/assets/images/webp/feature-mobile.webp" alt="feature-mobile">
        </div>
    </section>
</template>
