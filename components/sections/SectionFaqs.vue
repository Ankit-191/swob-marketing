<script setup lang="ts">
  import { useTranslate } from "#imports"
  import { ref } from "vue"
  import type { I18nString } from "~/types/util/I18nString"

  const t = useTranslate()
  defineProps<{
    title: I18nString
    subtitle: I18nString
    faqs: {
      title: I18nString
      description: I18nString
    }[]
  }>()

  const expandedQuestion = ref(null)

  function toggleAccordion(index: any) {
    if (expandedQuestion.value === index) {
      expandedQuestion.value = null
    } else {
      expandedQuestion.value = index
    }
  }
</script>

<template>
  <section id="faqs">
    <NuxtImg
      src="/assets/images/png/faqs-overlay.png"
      alt="overlay"
      class="max-h-[111px] w-full max-md:hidden"
    />
    <div class="py-12 sm:py-14 md:bg-white-light md:py-16 lg:py-20">
      <div class="container mx-auto max-w-[1320px] px-4 sm:px-5">
        <h2
          class="text-center font-sans text-[30px] font-semibold leading-110 text-black sm:text-4xl sm:font-extrabold md:text-5xl lg:text-6xxl"
        >
          {{ t(title) }}
        </h2>
        <div
          class="flex w-full flex-col gap-6 pt-12 sm:pt-14 md:pt-16 lg:pt-20"
        >
          <div
            v-for="(value, index) of faqs"
            :key="index"
            class="rounded-[10px] bg-white p-8 shadow-faqs-shadow"
          >
            <button
              @click="toggleAccordion(index)"
              class="flex items-center justify-between gap-2.5"
            >
              <p
                class="font-sans text-lg font-medium leading-110 text-black sm:text-xl"
              >
                {{ t(value.title) }}?
              </p>
              <NuxtImg
                class="size-6 duration-300"
                :class="[expandedQuestion === index && 'rotate-180']"
                src="/assets/images/png/faqs-arrow-icon.png"
                alt="faqs-arrow"
              />
            </button>
            <div
              class="grid overflow-hidden duration-300"
              :class="[
                expandedQuestion === index
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0',
              ]"
            >
              <div class="overflow-hidden">
                <p
                  class="pr-5 pt-4 font-sans text-base text-black sm:text-lg md:pr-8"
                >
                  {{ t(value.description) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
