<script setup lang="ts">
import Icon from "../common/Icon";

</script>

<template>
    <div
        class="flex flex-col rounded-lg sm:rounded-[20px] max-sm:max-w-[370px] w-full bg-white lg:px-6 sm:px-4 px-2 py-1.5 sm:py-3 lg:py-4 mt-4 md:mt-11">
        <div class="flex items-center justify-between">
            <div class="flex flex-col">
                <p class="text-yellow font-bold sm:text-base text-[5.79px]">
                    Teammitglied
                </p>
                <p class="text-start text-[8.68px] sm:text-custom-xs md:text-lg xl:text-2xl font-bold">
                    Odila Kühn
                </p>
            </div>
            <div class="flex items-center gap-1 sm:gap-4 sm: h-full">
                <div
                    class="border lg:py-3 lg:px-5 py-1 sm:py-[5.29px] px-2 flex items-center border-gray-light rounded-[3px] gap-2">
                    <p class="text-gray-dark text-[5.06px] sm:text-sm font-bold">
                        Bearbeiten
                    </p>
                    <img class="size-2 sm:size-6 pointer-events-none" src="/assets/images/png/note-icon.png"
                        alt="note-icon">
                </div>
                <div class="border border-gray-light lg:p-3 p-1 md:p-2 rounded-[3px]">
                    <Icon name="profileIcon" class="size-2 sm:size-6 block" />
                </div>
            </div>
        </div>
        <div class="flex items-center mt-1.5 sm:mt-4 md:gap-8 gap-3">
            <img class="size-16 sm:size-28 md:size-32 xl:size-[180px] rounded-full"
                src="/assets/images/png/odila-girl-profile.png" alt="odila-girl" />
            <div class="flex md:flex-row justify-between w-full">
                <div class="flex flex-col">
                    <p class="text-start font-bold text-gray-dark text-[4.34px] sm:text-xs">
                        E-Mail-Adresse
                    </p>
                    <p class="md:mt-2.5 mt-1 text-gray-dark text-[6.51px] sm:text-sm lg:text-lg">
                        odila@swob.com
                    </p>
                    <p class="text-start font-bold pt-1 sm:pt-4 text-gray-dark text-[4.34px] sm:text-xs">
                        Rolle
                    </p>
                    <p class="md:mt-2.5 mt-1 text-gray-dark text-[6.51px] sm:text-sm lg:text-lg">
                        Produkt Designer
                    </p>
                </div>
                <div class="flex flex-col md:hidden">
                    <div class="flex items-center gap-2">
                        <div class="flex flex-col">
                            <p class="text-start font-bold text-gray-dark text-[4.34px] sm:text-xs">
                                Telefonnummer
                            </p>
                            <p class="md:mt-2.5 mt-1 text-gray-dark text-[6.51px] sm:text-sm lg:text-lg">
                                999999999
                            </p>
                        </div>
                        <div class="border border-gray-light lg:p-3 p-1 md:p-2 rounded-[3px]">
                            <Icon name="telIcon" class="size-2 sm:size-6 block" />
                        </div>
                    </div>
                    <p class="text-start font-bold pt-1 sm:pt-4 text-gray-dark text-[4.34px] sm:text-xs">
                        Abteilung
                    </p>
                    <p class="md:mt-2.5 mt-1 text-gray-dark text-[6.51px] sm:text-sm lg:text-lg">
                        Design, Marketing
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>