<script setup lang="ts">
const route = useRoute()

const store = useCatsStore()
callOnce('cats',()=>store.fetch())
const cat = store.byName(route.params.name as string)
useSeoMeta({
  title: cat.name
})
</script>

<template>
  <section class="hero" :style="{ backgroundImage: `url(${cat.img})` }">
    <h2>{{cat.name}}</h2>
  </section>
  <p>{{cat.description}}</p>
</template>

<style scoped>
.hero {
  background: no-repeat center center/cover;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}

h2{
  color: violet;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

p{
  width: 75%;
  text-align: center;
  margin: 20px auto;
}
</style>