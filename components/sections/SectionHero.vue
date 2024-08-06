<script setup lang="ts">
import { useTranslate } from '#imports';

const t = useTranslate()
defineProps<{
    title: { en: string }
    subtitle: { en: string }
}>()
</script>

<template>
    <section class="px-4 py-12">
        <h1 class="mb-2 font-semibold text-3xl uppercase">{{ t(title) }}</h1>
        <h2>{{ t(subtitle) }}</h2>
    </section>
</template>
