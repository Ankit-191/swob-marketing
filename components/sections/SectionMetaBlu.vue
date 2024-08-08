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
            <div class="flex flex-wrap">
                <img src="../../public/assets/images/png/meta-blu.png" alt="">
            </div>
        </div>
    </section>
</template>
