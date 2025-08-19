<script setup lang="ts">
const store = useCatsStore()
callOnce('cats',()=>store.fetch())
</script>

<template>
  <h2>Our beloved cats</h2>
  <div>
    <cat_card v-for="cat of store.cats" :key="cat.name" :cat="cat" />
  </div>
</template>

<style scoped>
div{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px 5%;
  justify-content: center;
  align-items: center;

}
</style>