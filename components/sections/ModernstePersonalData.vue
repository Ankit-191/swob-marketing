<script setup lang="ts">
import { useTranslate } from "#imports"
import type { I18nString } from "~/types/util/I18nString"
import InputV from "../common/InputV.vue";
import Icon from "../common/Icon";


const t = useTranslate()
defineProps<{
    title: I18nString
    subtitle: I18nString
}>()


</script>
<template>
    <div
        class="p-5 border-gray-light border bg-white rounded-[20px] mt-4 sm:mt-6 lg:my-[28px] max-w-[500px] w-full flex flex-col gap-4">
        <div class="flex items-center justify-between gap-4">
            <div class="flex gap-2 items-center">
                <img class="size-6 pointer-events-none" src="/assets/images/png/user-circle.png" alt="user-circle">
                <p class="text-base font-sans !leading-110 font-bold">Personendaten</p>
            </div>
            <img class="size-5 pointer-events-none cursor-pointer" src="/assets/images/png/up-arrow.png"
                alt="user-circle">
        </div>
        <div class="grid grid-cols-2 gap-6">
            <InputV placeholder="Vorname" type="text" required label="Vorname" />
            <InputV placeholder="Nachname" type="text" required label="Nachname" />
        </div>
        <InputV type="date" required label="Geburtsdatum" />
        <div class="grid grid-cols-2 gap-6">
            <div class="flex flex-col">
                <p class="mb-1 text-xs font-bold text-gray-dark">Nationalität</p>
                <div class="relative flex w-full border-gray-light border rounded-lg px-2.5 py-[13.2px]">
                    <select
                        class="font-inter text-lg !text-black-light placeholder:text-black-light placeholder:text-lg placeholder:!leading-110 !leading-110 appearance-none">
                        <option>Schweiz</option>
                        <option>Germany</option>
                        <option>Austria</option>
                    </select>
                    <span
                        class="absolute top-1/2 right-3 sm:right-3 transform -translate-y-1/2 z-10 pointer-events-none">
                        <Icon class="cursor-pointer block size-6" name="caretDownArrow" />
                    </span>
                </div>
            </div>
            <div class="flex flex-col w-full">
                <p class="mb-1 text-xs font-bold text-gray-dark">
                    Aufenthaltsstatus
                </p>
                <div class="relative flex w-full border-gray-light border rounded-lg px-2.5 py-[13.2px]">
                    <select
                        class="font-inter text-lg !text-black-light placeholder:text-black-light placeholder:text-lg placeholder:!leading-110 !leading-110 appearance-none">
                        <option>Aufenthaltsstatus</option>
                        <option>Germany</option>
                        <option>Austria</option>
                    </select>
                    <span
                        class="absolute top-1/2 right-3 md:right-3 transform -translate-y-1/2 z-10 pointer-events-none">
                        <Icon class="cursor-pointer block size-6" name="caretDownArrow" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
