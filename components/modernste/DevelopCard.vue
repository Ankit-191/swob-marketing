<script setup lang="ts">
import Icon from "../common/Icon";

</script>

<template>
    <div class="flex flex-col mb-4 sm:mb-6 lg:my-16 mx-auto bg-white border border-gray-light rounded-lg">
        <div class="p-3">
            <div class="flex items-center gap-2 justify-between">
                <div class="flex items-center gap-2">
                    <Icon class="block pt-0.5 -mr-1.5" name="sixBlackDot" />
                    <span
                        class="w-5 h-5 border border-gray-light rounded-md cursor-pointer flex duration-300 focus:bg-yellow"></span>
                    <p class="text-sm font-medium text-gray-dark font-sans">
                        API-Endpunkte entwickeln
                    </p>
                </div>
                <Icon name="threeBlackDot" class="block pt-2 cursor-pointer" />
            </div>
            <p class="text-xs text-gray-dark !leading-120 max-w-[262px] sm:max-w-[275px] mt-3">
                Implementieren Sie RESTful-API-Endpunkte zur Unterstützung der
                Client-Server-Kommunikation für eine neue Funktion.
            </p>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t border-gray-light">
            <div class="flex items-center">
                <Icon name="redFlag" class="block object-contain size-6"/>
                <Icon name="clockIcon" class="ms-3" />
                <p class="ms-1.5 text-xs text-white-dark">Mar 15</p>
            </div>
            <div class="flex items-center">
                <NuxtImg class="block size-[30px] translate-x-3.5 pointer-events-none" src="/assets/images/png/avatar.png" alt="avatar" />
                <NuxtImg class="block size-[30px] relative z-10 pointer-events-none" src="/assets/images/png/avatar.png" alt="avatar" />
            </div>
        </div>
    </div>
</template>