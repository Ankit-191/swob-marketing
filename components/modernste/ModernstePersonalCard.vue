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
        class="p-3 sm:p-5 border-gray-light border bg-white rounded-xl md:rounded-[20px] mt-4 lg:-mb-2.5 sm:mt-6 lg:mt-7 max-w-[500px] w-full flex flex-col gap-2.5 sm:gap-4">
        <div class="flex items-center justify-between gap-4">
            <div class="flex gap-1 sm:gap-2 items-center">
                <img class="size-3.5 sm:size-6 pointer-events-none" src="/assets/images/png/user-circle.png"
                    alt="user-circle">
                <p class="text-[10px] sm:text-base font-sans !leading-110 font-bold">Personendaten</p>
            </div>
            <img class="size-3 sm:size-5 pointer-events-none cursor-pointer" src="/assets/images/png/up-arrow.png"
                alt="user-circle">
        </div>
        <div class="grid grid-cols-2 gap-6">
            <InputV placeholder="Vorname" type="text" required label="Vorname"
                className="max-sm:text-xs placeholder:max-sm:text-[11.2px] max-sm:py-2 sm:!px-5"
                lableClass="max-sm:text-[7.46px] max-sm:pb-0.5" />
            <InputV placeholder="Nachname" type="text" required label="Nachname"
                className="max-sm:text-xs placeholder:max-sm:text-[11.2px] max-sm:py-2 sm:!px-5"
                lableClass="max-sm:text-[7.46px] max-sm:pb-0.5" />
        </div>
        <InputV type="date" required label="Geburtsdatum"
            className="max-sm:text-xs placeholder:max-sm:text-[11.2px] max-sm:py-2 sm:!px-5 relative after:absolute after:content-['--/--/--']"
            lableClass="max-sm:text-[7.46px] max-sm:pb-0.5" id="customDate" />
        <div class="grid grid-cols-2 gap-3.5 sm:gap-6">
            <div class="flex flex-col">
                <p class="mb-1 text-xs font-bold text-gray-dark max-sm:text-[7.46px] max-sm:mb-0.5">Nationalität</p>
                <div class="relative flex w-full border-gray-light border rounded-lg">
                    <div class="w-full">
                        <select
                            class="font-inter text-lg custom-select px-2.5 py-3.5 max-sm:py-[9px] sm:!px-5 !text-black-light max-sm:text-[11.2px] placeholder:max-sm:text-[11.2px] line-clamp-6 placeholder:text-black-light placeholder:text-lg placeholder:!leading-110 !leading-110 appearance-none">
                            <option>Schweiz</option>
                            <option>Germany</option>
                            <option>Austria</option>
                        </select>
                    </div>
                    <div
                        class="absolute cursor-pointer top-1/2 right-3 sm:right-3 transform -translate-y-1/2 z-10 pointer-events-none">
                        <Icon class="block size-4 sm:size-6" name="caretDownArrow" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full">
                <p class="mb-1 text-xs font-bold text-gray-dark max-sm:text-[7.46px] max-sm:mb-0.5">
                    Aufenthaltsstatus
                </p>
                <div class="relative flex w-full border-gray-light border rounded-lg">
                    <div class="w-full">
                        <select
                            class="font-inter text-lg custom-select px-2.5 py-3.5 max-sm:py-[9px] sm:!px-5 !text-black-light max-sm:text-[11.2px] placeholder:max-sm:text-[11.2px] max-sm:w-[110px] truncate placeholder:text-black-light placeholder:text-lg placeholder:!leading-110 !leading-110 appearance-none">
                            <option>Aufenthaltsstatus</option>
                            <option>Germany</option>
                            <option>Austria</option>
                        </select>
                    </div>
                    <div
                        class="absolute cursor-pointer top-1/2 right-3 md:right-3 transform -translate-y-1/2 z-10 pointer-events-none">
                        <Icon class="block size-4 sm:size-6" name="caretDownArrow" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* Style the select box */
.custom-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.custom-select option {
    padding: 8px;
    background-color: #fff;
    color: #333;
}

.custom-select option:hover {
    background-color: #f0f0f0;
}
</style>