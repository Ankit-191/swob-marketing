<script setup lang="ts">
const icons = {
  arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>`,
  arrowDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>`,
  messageBox: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6667 6.77002C22.6667 5.67002 21.7667 4.77002 20.6667 4.77002H4.66667C3.56667 4.77002 2.66667 5.67002 2.66667 6.77002M22.6667 6.77002V18.77C22.6667 19.87 21.7667 20.77 20.6667 20.77H4.66667C3.56667 20.77 2.66667 19.87 2.66667 18.77V6.77002M22.6667 6.77002L12.6667 13.77L2.66667 6.77002" stroke="#FFC229" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  zeitUndIcon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2.77002L3 14.77H12L11 22.77L21 10.77H12L13 2.77002Z" stroke="#FFC229" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  hrAnalyticsIcon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3333 20.77V10.77M12.3333 20.77V4.77002M6.33325 20.77V14.77" stroke="#FFC229" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  caretDownArrow: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9999 9.20884C18.9999 9.44958 18.9133 9.65791 18.7401 9.83384L12.6151 16.0561C12.4419 16.232 12.2369 16.3199 11.9999 16.3199C11.7629 16.3199 11.5578 16.232 11.3846 16.0561L5.25964 9.83384C5.08647 9.65791 4.99988 9.44958 4.99988 9.20884C4.99988 8.96809 5.08647 8.75976 5.25964 8.58384C5.43282 8.40791 5.6379 8.31995 5.87488 8.31995H18.1249C18.3619 8.31995 18.5669 8.40791 18.7401 8.58384C18.9133 8.75976 18.9999 8.96809 18.9999 9.20884Z" fill="#16151C"/>
</svg>

`,
  // more icons here: https://remixicon.com
}

const p = defineProps<{
  name: keyof typeof icons
}>()
</script>

<template>
  <!--eslint-disable vue/no-v-html-->
  <svg v-html="icons[name]" class="aspect-1/1 shrink-0 base:w-4"></svg>
</template>
