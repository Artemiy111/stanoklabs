<script setup lang="ts">
const colorMode = useColorMode()
useHead({
  htmlAttrs: { class: colorMode.value },
  bodyAttrs: {
    class: 'dark:bg-stone-900',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
