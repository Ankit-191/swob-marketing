<script setup lang="ts">
import AnySection from '~/components/sections/AnySection.vue';

const page = {
  sections: [
    {
      title: { en: "Revolutioniere dein HR-Management" },
      subtitle: { en: "Eine HR-Software für jede Unternehmensgröße. Bleib über unsere Einführung auf dem Laufenden." },
      _orbi: { component: "SectionHero" },
    },
    {
      title: { en: "Lorem ipsum dolor sit amet consectetur. Diam pretium nunc." },
      _orbi: { component: "SectionDiamPretium" },
    },
    {
      title: { en: "Häufig gestellte Fragen (FAQ)" },
      _orbi: { component: "SectionFaqs" },
    },
    {
      title: { en: "SWOB kostenlos erleben" },
      subtitle: { en: "Melde dich jetzt an und erhalte vollen Zugriff auf die leistungsstarken HR-Tools von SWOB. Keine Kreditkarte erforderlich. Fang noch heute an, deine HR-Prozesse zu optimieren!" },
      cta: { en: 'Kostenlos ausprobieren' },
      _orbi: { component: "SectionExperienceSWOB" },
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
