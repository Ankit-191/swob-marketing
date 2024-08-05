<script lang="ts" setup="">
  import { Store } from "~/services/Store"
  import Widget from "./_Widget.vue"
</script>

<template>
  <main class="space-y-2 p-4">
    <h1># examples</h1>
    <div class="grid">
      <NuxtLinkLocale to="/examples/pages">→ pages</NuxtLinkLocale>
      <NuxtLinkLocale to="/examples/posts">→ posts</NuxtLinkLocale>
    </div>
    <button @click="Store.counter++">
      Store.counter: {{ Store.counter }}
    </button>
    <NuxtImg
      src="https://s3.eu-central-1.wasabisys.com/orbitype/media/toa-heftiba-6bKpHAun4d8-unsplash.jpg"
      width="300"
    />
    <Widget/>
  </main>
</template>
