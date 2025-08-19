<script setup lang="ts">
defineProps(['cat']);
</script>

<template>
  <NuxtLink :to="`/cats/${cat.name}`">
    <div>
      <h3>{{cat.name}}</h3>
      <img :src="cat.img" :alt="`A picture of the cat ${cat.name}`">
    </div>
  </NuxtLink>
</template>

<style scoped>
div{
  width: 250px;
  background-color: darkcyan;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  display: inline-block;
  border-radius: 25px;
  padding: 15px 30px;
  text-align: center;
}

div:hover {
  transform: scale(1.05);
}

h3{
  color: violet;
  margin: 0;
}

img{
  border-radius: 10%;
  display: block;
  margin: auto;
  width: 75%;
}
</style>