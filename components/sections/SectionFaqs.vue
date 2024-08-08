<script setup lang="ts">
import { useTranslate } from "#imports"
import InputV from "../common/InputV.vue"

const t = useTranslate()
defineProps<{
    title: { en: string }
    subtitle: { en: string }
}>()
</script>

<template>
    <section>
        <div class="bg-white-light py-20">
            <div class="container mx-auto px-5 max-w-[1320px]">
                <h2 class="font-extrabold text-black leading-110 text-center text-6xxl">{{ t(title) }}</h2>
            </div>
        </div>
    </section>
</template>
