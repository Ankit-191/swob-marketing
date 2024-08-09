<script setup lang="ts">
import { ref } from 'vue'
import { useTranslate } from "#imports"
import InputV from "../common/InputV.vue"
import type { I18nString } from '../../types/util/I18nString';

const FAQS_DATA_LIST = [
    {
        title: { en: "Wie funktioniert SWOB für Arbeitnehmer" },
        description:
            { en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa. " },
    },
    {
        title: { en: "Ist SWOB als mobile App verfügbar" },
        description:
            { en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa. " },
    },
    {
        title: { en: "Wie kann ich ein Profil auf SWOB erstellen" },
        description:
            { en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa. " },
    },
    {
        title: { en: "Sind meine persönlichen Angaben und Daten bei SWOB sicher" },
        description:
            { en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa. " },
    },
    {
        title: { en: "Wie kann ich den SWOB-Kundenservice kontaktieren" },
        description:
            { en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa. " },
    },
]

const t = useTranslate()
defineProps<{
    title: I18nString
    subtitle: I18nString
}>()

const expandedQuestion = ref(null)

const toggleAccordion = (index) => {
    if (expandedQuestion.value === index) {
        expandedQuestion.value = null
    } else {
        expandedQuestion.value = index
    }
}
</script>

<template>
    <section>
        <img src="/assets/images/png/faqs-overlay.png" alt="overlay" class="max-h-[111px] w-full max-md:hidden">
        <div class="md:bg-white-light py-12 sm:py-14 md:py-16 lg:py-20">
            <div class="container mx-auto px-4 sm:px-5 max-w-[1320px]">
                <h2
                    class="font-semibold font-sans sm:font-extrabold text-black !leading-110 text-center text-[30px] sm:text-4xl md:text-5xl lg:text-6xxl">
                    {{ t(title) }}</h2>
                <div class="flex flex-col gap-6 w-full pt-12 sm:pt-14 md:pt-16 lg:pt-20">
                    <div v-for="(value, index) in FAQS_DATA_LIST" :key="index"
                        class="p-8 bg-white shadow-faqs-shadow rounded-[10px]">
                        <button @click="toggleAccordion(index)" class="flex items-center justify-between gap-2.5">
                            <p class="text-black font-sans font-medium text-lg sm:text-xl !leading-110">{{
                                t(value.title)
                            }}?</p>
                            <img class="size-6 duration-300" :class="[expandedQuestion === index && 'rotate-180']"
                                src="/assets/images/png/faqs-arrow-icon.png" alt="faqs-arrow">
                        </button>
                        <div
                            :class="['grid overflow-hidden duration-300', expandedQuestion === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0']">
                            <div class="overflow-hidden">
                                <p class="text-black font-sans text-base sm:text-lg pt-4 pr-5 md:pr-8">{{
                                    t(value.description) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
