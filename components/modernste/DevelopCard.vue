<script setup lang="ts">
  import Icon from "~/components/common/Icon.vue"
</script>

<template>
  <div
    class="mx-auto mb-4 flex flex-col rounded-lg border border-gray-light bg-white sm:mb-6 lg:my-16"
  >
    <div class="p-3">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <Icon class="-mr-1.5 block pt-0.5" name="sixBlackDot" />
          <span
            class="flex h-5 w-5 cursor-pointer rounded-md border border-gray-light duration-300 focus:bg-yellow"
          ></span>
          <p class="font-sans text-sm font-medium text-gray-dark">
            API-Endpunkte entwickeln
          </p>
        </div>
        <Icon name="threeBlackDot" class="block cursor-pointer pt-2" />
      </div>
      <p
        class="mt-3 max-w-[262px] text-xs leading-120 text-gray-dark sm:max-w-[275px]"
      >
        Implementieren Sie RESTful-API-Endpunkte zur Unterstützung der
        Client-Server-Kommunikation für eine neue Funktion.
      </p>
    </div>
    <div
      class="flex items-center justify-between border-t border-gray-light px-3 py-2"
    >
      <div class="flex items-center">
        <Icon name="redFlag" class="block size-6 object-contain" />
        <Icon name="clockIcon" class="ms-3" />
        <p class="ms-1.5 text-xs text-white-dark">Mar 15</p>
      </div>
      <div class="flex items-center">
        <NuxtImg
          class="pointer-events-none block size-[30px] translate-x-3.5"
          src="/assets/images/png/avatar.png"
          alt="avatar"
        />
        <NuxtImg
          class="pointer-events-none relative z-10 block size-[30px]"
          src="/assets/images/png/avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  </div>
</template>
