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
  <section class="bg-yellow relative mb-[133px] py-12 md:pb-9 md:pt-[78px]">
    <img
      src="/public/images/png/hero-bottom-layer.png"
      alt="layer"
      width="1440"
      height="114"
      class="absolute -bottom-[50px] start-0 h-[50px] w-full md:-bottom-20 md:h-[80px] lg:-bottom-[113px] lg:h-[114px]"
    />
    <div class="container mx-auto max-w-[1090px] px-4">
      <div class="flex flex-wrap justify-center md:justify-between">
        <div
          class="text-center sm:w-8/12 md:w-6/12 md:text-start lg:w-7/12 xl:w-6/12"
        >
          <h1
            class="font-inter text-4xl md:text-4xxl lg:text-6xl text-gray-dark leading-120 font-semibold tracking-[4%]"
          >
            {{ t(title) }}
          </h1>
          <p
            class="font-inter text-lg !leading-140 text-black-light pb-8 pt-4 font-normal md:max-w-[405px] md:py-6"
          >
            {{ t(subtitle) }}
          </p>
          <div class="rounded-[20px] bg-white p-6">
            <form>
              <div class="mb-4 flex gap-6">
                <InputV placeholder="Vorname" type="text" required />
                <InputV placeholder="Nachname" type="text" required />
              </div>
              <InputV
                placeholder="Geschäftliche E-Mail"
                type="email"
                required
              />
              <div class="mb-6 mt-4 relative">
                <div class="flex items-center gap-2 absolute top-1/2 start-5 -translate-y-1/2">
                  <div class="bg-red w-6 h-6 rounded-full flex justify-center items-center">
                    <img
                      src="/public/images/svg/plus-icon.svg"
                      alt="plus"
                      width="12"
                      height="12"
                    />
                  </div>
                  <select
                    class="appearance-none bg-transparent font-normal text-gray-dark focus:outline-none text-lg"
                  >
                    <option value="+41" class="text-base">+41</option>
                    <option value="+91" class="text-base">+91</option>
                    <option value="+44" class="text-base">+44</option>
                  </select>
                  <img
                      src="/public/images/svg/phone-arrow-icon.svg"
                      alt="plus"
                      width="16"
                      height="16"
                    />
                </div>
                <InputV
                  placeholder="Handynummer"
                  type="number"
                  className="ps-[116px]"
                />
              </div>
              <button
                type="submit"
                class="font-inter text-base !leading-130 rounded-full border border-transparent bg-black py-[13px] text-center font-bold text-white transition-all duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black"
              >
                Jetzt registrieren
              </button>
            </form>
          </div>
        </div>
        <div class="mt-10 sm:w-8/12 md:mt-0 md:w-6/12 lg:w-5/12">
          <img
            src="/public/images/png/hero-image.png"
            alt="boy"
            width="429"
            height="590"
            class="mx-auto w-full max-w-[272px] sm:max-w-[429px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
