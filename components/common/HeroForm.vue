<script setup lang="ts">
  import InputV from "../common/InputV.vue"
  import { ref } from 'vue';
import SelectV from "./SelectV.vue";

  const NUMBERS_OPTION_LIST = [
   
  "+41",
  "+45",
  "+91"
  ]
  const modelValueNumbers = ref(NUMBERS_OPTION_LIST[0])
</script>
<template>
  <div class="rounded-[20px] bg-white p-6">
    <form>
      <div class="mb-4 flex gap-6">
        <InputV placeholder="Vorname" type="text" required />
        <InputV placeholder="Nachname" type="text" required />
      </div>
      <InputV placeholder="Geschäftliche E-Mail" type="email" required />
      <div class="relative mb-6 mt-4">
        <div
          class="absolute start-5 top-1/2 flex -translate-y-1/2 items-center"
        >
          <div
            class="flex h-6 w-6 items-center justify-center rounded-full bg-red"
          >
            <img
              src="/assets/images/svg/plus-icon.svg"
              alt="plus"
              width="12"
              height="12"
            />
          </div>
          <div class="relative z-[1]">
            <SelectV
              v-model="modelValueNumbers"
              :options="NUMBERS_OPTION_LIST" className="!py-0 !ps-2 !pe-6 !text-lg"
            >+</SelectV>
            <img
            src="/assets/images/svg/phone-arrow-icon.svg"
            alt="plus"
            width="16"
            height="16"
            class="absolute end-0 top-1/2 -translate-y-1/2 z-[-1]"
          />
          </div>          
        </div>
        <InputV
          placeholder="Handynummer"
          type="number"
          className="ps-[122px]"
        />
      </div>
      <button
        type="submit"
        class="font-inter rounded-full border border-transparent bg-black py-[13px] text-center text-base font-bold !leading-130 text-white transition-all duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black"
      >
        Jetzt registrieren
      </button>
    </form>
  </div>
</template>
