<script setup lang="ts">
  import Icon from "~/components/common/Icon.vue"
</script>

<template>
  <div
    class="mt-4 flex w-full flex-col rounded-lg bg-white px-2 py-1.5 max-sm:max-w-[370px] sm:rounded-[20px] sm:px-4 sm:py-3 md:my-11 lg:px-6 lg:py-4"
  >
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <p
          class="relative text-[5.79px] font-bold text-yellow after:absolute after:bottom-[1px] after:start-0 after:h-[0.3px] after:w-[87%] after:bg-yellow sm:text-base sm:after:bottom-[2px] sm:after:h-[1px] sm:after:w-full xl:after:w-[87%]"
        >
          Teammitglied
        </p>
        <p
          class="sm:text-custom-xs pt-1 text-start text-[8.68px] font-bold md:text-lg xl:text-2xl"
        >
          Odila Kühn
        </p>
      </div>
      <div class="sm: flex h-full items-center gap-1 sm:gap-4">
        <div
          class="flex items-center gap-2 rounded-[3px] border border-gray-light px-2 py-1 sm:py-[5.29px] lg:px-5 lg:py-3"
        >
          <p class="text-[5.06px] font-bold text-gray-dark sm:text-sm">
            Bearbeiten
          </p>
          <NuxtImg
            class="pointer-events-none size-2 cursor-pointer sm:size-6"
            src="/assets/images/png/note-icon.png"
            alt="note-icon"
          />
        </div>
        <div
          class="cursor-pointer rounded-[3px] border border-gray-light p-1 md:p-2 lg:p-3"
        >
          <Icon name="profileIcon" class="block size-2 sm:size-6" />
        </div>
      </div>
    </div>
    <div class="mt-1.5 flex items-center gap-3 sm:mt-4 md:gap-8">
      <NuxtImg
        class="size-16 rounded-full sm:size-28 md:size-32 xl:size-[180px]"
        src="/assets/images/webp/odila-girl-profile.webp"
        alt="odila-girl"
      />
      <div class="flex w-full justify-between md:flex-row">
        <div class="flex flex-col">
          <p
            class="text-start text-[4.34px] font-bold leading-130 text-gray-dark sm:text-xs"
          >
            E-Mail-Adresse
          </p>
          <p
            class="mt-1 text-[6.51px] leading-110 text-gray-dark sm:text-sm md:mt-2.5 lg:text-lg"
          >
            odila@swob.com
          </p>
          <p
            class="pt-1 text-start text-[4.34px] font-bold leading-130 text-gray-dark sm:pt-5 sm:text-xs"
          >
            Rolle
          </p>
          <p
            class="mt-1 text-[6.51px] leading-110 text-gray-dark sm:text-sm md:mt-2.5 lg:text-lg"
          >
            Produkt Designer
          </p>
        </div>
        <div class="flex flex-col md:hidden">
          <div class="flex items-center gap-2">
            <div class="flex flex-col">
              <p
                class="text-start text-[4.34px] font-bold text-gray-dark sm:text-xs"
              >
                Telefonnummer
              </p>
              <p
                class="mt-1 text-[6.51px] text-gray-dark sm:text-sm md:mt-2.5 lg:text-lg"
              >
                999999999
              </p>
            </div>
            <div
              class="rounded-[3px] border border-gray-light p-1 md:p-2 lg:p-3"
            >
              <NuxtLink href="tel:+999999999">
                <Icon name="telIcon" class="block size-2 sm:size-6" />
              </NuxtLink>
            </div>
          </div>
          <p
            class="pt-1 text-start text-[4.34px] font-bold text-gray-dark sm:pt-4 sm:text-xs"
          >
            Abteilung
          </p>
          <p
            class="mt-1 text-[6.51px] text-gray-dark sm:text-sm md:mt-2.5 lg:text-lg"
          >
            Design, Marketing
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
