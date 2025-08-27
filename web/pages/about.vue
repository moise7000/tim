<script setup lang="ts">
import Person_card from "~/components/person_card.vue";

const people = await $fetch('/api/people');
</script>

<template>

</template>

<style scoped>


</style>