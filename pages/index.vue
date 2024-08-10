<script setup lang="ts">
  import DevelopCard from "~/components/modernste/DevelopCard.vue"
  import PersonalCard from "~/components/modernste/PersonalCard.vue"
  import ProgressCard from "~/components/modernste/ProgressCard.vue"
  import TeamMemberCard from "~/components/modernste/TeamMemberCard.vue"
  import AnySection from "~/components/sections/AnySection.vue"

  const page = {
    sections: [
      {
        title: { en: "Revolutioniere dein HR-Management" },
        subtitle: {
          en: "Eine HR-Software für jede Unternehmensgröße. Bleib über unsere Einführung auf dem Laufenden.",
        },
        _orbi: { component: "SectionHero" },
      },
      {
        META_BLU_LIST: [
          {
            image: "/assets/images/png/meta-blu.png",
          },
          {
            image: "/assets/images/png/buildaa.png",
          },
          {
            image: "/assets/images/png/hapi.png",
          },
          {
            image: "/assets/images/png/logo-ipsum.png",
          },
          {
            image: "/assets/images/png/virtuo.png",
          },
        ],
        _orbi: { component: "SectionMetaBlu" },
      },
      {
        title: { en: "Modernste Funktionen für fortschrittliches HR" },
        subtitle: {
          en: "Leistungsstarke, selbst zu bedienende Produkt- und Wachstumsanalysen, die dir helfen, mehr Nutzer zu konvertieren, zu engagieren und zu binden. Über 4.000 Start-ups vertrauen uns.",
        },
        cardLink: { en: "Mehr erfahren" },
        CARD_DATA_LIST: [
          {
            iconName: "messageBox",
            title: { en: "Nahtloses Onboarding" },
            description: {
              en: "Sorge mit den intuitiven Onboarding-Tools von SWOB für einen reibungslosen Einstieg für neue Mitarbeiter. Vereinfache den Prozess und bringe neue Mitarbeiter schnell auf Trab.",
            },
          },
          {
            iconName: "zeitUndIcon",
            title: { en: "Zeit- und Abwesenheitsmanagement" },
            description: {
              en: "Behalte den Überblick über die Arbeitszeit deiner Mitarbeiter und verwalte Abwesenheiten mit den umfassenden Zeitmanagement-Tools von SWOB. Sorge mit Leichtigkeit für genaue Aufzeichnungen und die Einhaltung von Vorschriften.",
            },
          },
          {
            iconName: "hrAnalyticsIcon",
            title: { en: "HR Analytics" },
            description: {
              en: "Triff datengestützte Entscheidungen mit den fortschrittlichen HR-Analysen von SWOB. Gewinnen Sie wertvolle Einblicke in Ihre Belegschaft und optimieren Sie Ihre Personalstrategien.",
            },
          },
        ],
        _orbi: { component: "SectionFeature" },
      },
      {
        title: {
          en: "Lorem ipsum dolor sit amet consectetur. Diam pretium nunc.",
        },
        DASHBOARD_CARDS: [
          {
            image: "/assets/images/webp/dashboard-diam.webp",
          },
          {
            image: "/assets/images/webp/employees-hr-manager-diam.webp",
          },
          {
            image: "/assets/images/webp/dashboard-diam.webp",
          },
        ],
        _orbi: { component: "SectionDiamPretium" },
      },
      {
        title: { en: "Modernste Funktionen für fortschrittliches HR" },
        subtitle: {
          en: "Leistungsstarke, selbst zu bedienende Produkt- und Wachstumsanalysen, die dir helfen, mehr Nutzer zu konvertieren, zu engagieren und zu binden. Über 4.000 Start-ups vertrauen uns.",
        },
        CARD_DATA_LIST: [
          {
            title: {
              en: "Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla nunc faucibus in in viverra.",
            },
            description: {
              en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa.",
            },
            component: PersonalCard,
          },
          {
            title: {
              en: "Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla nunc faucibus in in viverra.",
            },
            description: {
              en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa.",
            },
            component: DevelopCard,
          },
          {
            title: {
              en: "Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla nunc faucibus in in viverra.",
            },
            description: {
              en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa.",
            },
            component: ProgressCard,
          },
          {
            title: {
              en: "Lorem ipsum dolor sit amet consectetur. Commodo laoreet volutpat nulla nunc faucibus in in viverra.",
            },
            description: {
              en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa.",
            },
            component: TeamMemberCard,
          },
        ],
        _orbi: { component: "SectionModernsteFunktionen" },
      },
      {
        title: { en: "Häufig gestellte Fragen (FAQ)" },
        FAQS_DATA_LIST: [
          {
            title: { en: "Wie funktioniert SWOB für Arbeitnehmer" },
            description: {
              en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa. ",
            },
          },
          {
            title: { en: "Ist SWOB als mobile App verfügbar" },
            description: {
              en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa. ",
            },
          },
          {
            title: { en: "Wie kann ich ein Profil auf SWOB erstellen" },
            description: {
              en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa. ",
            },
          },
          {
            title: {
              en: "Sind meine persönlichen Angaben und Daten bei SWOB sicher",
            },
            description: {
              en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa. ",
            },
          },
          {
            title: { en: "Wie kann ich den SWOB-Kundenservice kontaktieren" },
            description: {
              en: "Lorem ipsum dolor sit amet consectetur. Consequat sem sit eu sollicitudin viverra. Phasellus elementum potenti lacinia commodo sollicitudin diam massa. ",
            },
          },
        ],
        _orbi: { component: "SectionFaqs" },
      },
      {
        title: { en: "SWOB kostenlos erleben" },
        subtitle: {
          en: "Melde dich jetzt an und erhalte vollen Zugriff auf die leistungsstarken HR-Tools von SWOB. Keine Kreditkarte erforderlich. Fang noch heute an, deine HR-Prozesse zu optimieren!",
        },
        cta: { en: "Kostenlos ausprobieren" },
        _orbi: { component: "SectionExperienceSWOB" },
      },
    ],
  }
</script>

<template>
  <main>
    <AnySection
      v-for="(section, i) of page.sections"
      :key="i"
      :data="section"
    ></AnySection>
  </main>
</template>
