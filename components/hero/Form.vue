<script setup lang="ts">
  import { ref } from 'vue';
import SelectV from '../common/SelectV.vue';
import InputV from '../common/InputV.vue';
import ButtonV from '../common/ButtonV.vue';


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
            <NuxtImg
              src="/assets/images/svg/plus-icon.svg"
              alt="plus"
              width="12"
              height="12"
            />
          </div>
          <div class="relative z-[1]">
            <SelectV
              v-model="modelValueNumbers"
              :options="NUMBERS_OPTION_LIST" className="!py-0 !ps-2 !pe-5 !text-lg"
            >+</SelectV>
            <NuxtImg
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
          className="ps-[114px]"
        />
      </div>
      <ButtonV type="submit" className="text-center text-white bg-black hover:border-black hover:bg-white hover:!text-black !py-[12.5px] !text-base">Jetzt registrieren</ButtonV>
    </form>
  </div>
</template>
