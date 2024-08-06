<script setup lang="ts">
import AnySection from '~/components/sections/AnySection.vue';

const page = {
  sections: [
    {
      title: { en: "Revolutioniere dein HR-Management" },
      subtitle: { en: "Eine HR-Software für jede Unternehmensgröße. Bleib über unsere Einführung auf dem Laufenden." },
      _orbi: { component: "SectionHero" },
    },
  ]
}
</script>

<template>
  <main>
    <AnySection v-for="(section, i) of page.sections" :key="i" :data="section">
    </AnySection>
  </main>
</template>
