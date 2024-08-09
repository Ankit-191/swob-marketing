<script setup lang="ts">
import InputV from "../common/InputV.vue"
const formNumbers = [
  {
    value: "41",
  },
  {
    value: "45",
  },
  {
    value: "91",
  },
]
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
        <div class="absolute start-5 top-1/2 flex -translate-y-1/2 items-center">
          <div class="flex h-6 w-6 items-center justify-center rounded-full bg-red">
            <img src="/assets/images/svg/plus-icon.svg" alt="plus" width="12" height="12" />
          </div>
          <select class="appearance-none bg-transparent text-lg font-normal text-gray-dark focus:outline-none px-2">
            <option v-for="(obj, index) of formNumbers" :key="index" :value="obj.value" class="text-base">
              + {{ obj.value }}
            </option>
          </select>
          <img src="/assets/images/svg/phone-arrow-icon.svg" alt="plus" width="16" height="16" />
        </div>
        <InputV placeholder="Handynummer" type="number" className="ps-[116px]" />
      </div>
      <button type="submit"
        class="font-inter rounded-full border border-transparent bg-black py-[13px] text-center text-base font-bold !leading-130 text-white transition-all duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black">
        Jetzt registrieren
      </button>
    </form>
  </div>
</template>
