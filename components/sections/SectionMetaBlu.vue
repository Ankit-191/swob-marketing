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
        <div class="container mx-auto px-4 sm:px-5 max-w-[1130px]">
            <div class="flex flex-wrap md:gap-12 lg:gap-16 xl:gap-[106px] gap-8 items-center opacity-20 justify-center">
                <img class="w-[184px]" src="/assets/images/png/meta-blu.png" alt="meta-blu">
                <img class="w-[74px] sm:w-[109px]" src="/assets/images/png/buildaa.png" alt="buildaa">
                <img class="w-[118px] sm:w-[132px]" src="/assets/images/png/hapi.png" alt="hapi">
                <img class="w-[74px] sm:w-[93px]" src="/assets/images/png/logo-ipsum.png" alt="logo-ipsum">
                <img class="w-[182px] sm:w-[146px]" src="/assets/images/png/virtuo.png" alt="virtuo">
            </div>
        </div>
    </section>
</template>
