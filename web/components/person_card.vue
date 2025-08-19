<script setup lang="ts">
defineProps(['person'])
</script>

<template>
  <div>
    <img :src="person.img"/>
    <h3>{{ person.name }}</h3>
  </div>
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

div:hover{
  transform: scale(1.05);
}

img{
  width: 100%;
  border-radius: 15px;
}
</style>