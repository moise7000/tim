<script setup lang="ts">
const cat = await $fetch(`/api/cats/random`)
navigateTo(`/cats/${cat.name}`)

</script>

<template>
</template>

<style scoped>

</style>