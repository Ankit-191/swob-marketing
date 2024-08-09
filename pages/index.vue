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
      _orbi: { component: "SectionMetaBlu" },
    },
    {
      title: { en: "Modernste Funktionen für fortschrittliches HR" },
      subtitle: { en: "Leistungsstarke, selbst zu bedienende Produkt- und Wachstumsanalysen, die dir helfen, mehr Nutzer zu konvertieren, zu engagieren und zu binden. Über 4.000 Start-ups vertrauen uns." },
      cardLink: { en: "Mehr erfahren" },
      cardData: [
        {
          iconName: "messageBox",
          title: { en: "Nahtloses Onboarding" },
          description: { en: "Sorge mit den intuitiven Onboarding-Tools von SWOB für einen reibungslosen Einstieg für neue Mitarbeiter. Vereinfache den Prozess und bringe neue Mitarbeiter schnell auf Trab." },
        },
        {
          iconName: "zeitUndIcon",
          title: { en: "Zeit- und Abwesenheitsmanagement" },
          description: { en: "Behalte den Überblick über die Arbeitszeit deiner Mitarbeiter und verwalte Abwesenheiten mit den umfassenden Zeitmanagement-Tools von SWOB. Sorge mit Leichtigkeit für genaue Aufzeichnungen und die Einhaltung von Vorschriften." },
        },
        {
          iconName: "hrAnalyticsIcon",
          title: { en: "HR Analytics" },
          description: { en: "Triff datengestützte Entscheidungen mit den fortschrittlichen HR-Analysen von SWOB. Gewinnen Sie wertvolle Einblicke in Ihre Belegschaft und optimieren Sie Ihre Personalstrategien." },
        }
      ],
      _orbi: { component: "SectionFeature" },
    },
    {
      title: { en: "Lorem ipsum dolor sit amet consectetur. Diam pretium nunc." },
      _orbi: { component: "SectionDiamPretium" },
    },
    {
      title: { en: "Modernste Funktionen für fortschrittliches HR" },
      subtitle: { en: "Leistungsstarke, selbst zu bedienende Produkt- und Wachstumsanalysen, die dir helfen, mehr Nutzer zu konvertieren, zu engagieren und zu binden. Über 4.000 Start-ups vertrauen uns." },
      _orbi: { component: "SectionModernsteFunktionen" },
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
