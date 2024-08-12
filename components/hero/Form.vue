<script setup lang="ts">
  import { ref } from "vue"
  import SelectV from "~/components/common/SelectV.vue"
  import InputV from "~/components/common/InputV.vue"
  import ButtonV from "~/components/common/ButtonV.vue"

  const numberOptionList = ["+41", "+45", "+91"]
  const modelValueNumbers = ref(numberOptionList[0])
  const firstName = ref("")
  const lastName = ref("")
  const email = ref("")
  const phoneNumber = ref("")

  async function handleSubmit() {
    const data = {
      FirstName: firstName.value,
      LastName: lastName.value,
      Email: email.value,
      PhoneNumber: modelValueNumbers.value
        ? modelValueNumbers.value + phoneNumber.value
        : "",
    }
    try {
      const response = await $fetch("/api/registration", {
        method: "POST",
        body: data,
      })
    } catch (error) {
      console.error("Error during form submission:", error)
      alert("Failed to submit the message")
    }
  }
</script>
<template>
  <div class="rounded-[20px] bg-white p-6">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4 flex gap-6">
        <InputV
          v-model="firstName"
          placeholder="Vorname"
          type="text"
          required
        />
        <InputV
          v-model="lastName"
          placeholder="Nachname"
          type="text"
          required
        />
      </div>
      <InputV
        v-model="email"
        placeholder="Geschäftliche E-Mail"
        type="email"
        required
      />
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
              :options="numberOptionList"
              selectClass="form_select text-lg"
            >
              +
            </SelectV>
            <NuxtImg
              src="/assets/images/svg/phone-arrow-icon.svg"
              alt="plus"
              width="16"
              height="16"
              class="absolute end-0 top-1/2 z-[-1] -translate-y-1/2"
            />
          </div>
        </div>
        <InputV
          placeholder="Handynummer"
          v-model="phoneNumber"
          type="number"
          inputClass="pl-[114px]"
        />
      </div>
      <ButtonV
        type="submit"
        class="bg-black py-[12.5px] text-center text-base text-white hover:border-black hover:bg-white hover:text-black"
      >
        Jetzt registrieren
      </ButtonV>
    </form>
  </div>
</template>

<style scoped>
  .form_select {
    padding: 0 20px 0 8px !important;
  }
</style>
