<script setup lang="ts">
import Cat_card from "~/components/cat_card.vue";

const featured = [
  {
    name: 'Fluffy',
    img: '/cat1.png'
  },
  {
    name: 'Whiskers',
    img: '/cat2.png'
  },
  {
    name: 'Ginger',
    img: '/cat3.png'
  }
]
</script>

<template>



  <!-- Main Content Section -->
  <section class="main-content">
    <h2>Featured Cats</h2>
    <div class="cat-gallery">
      <Cat_card v-for="cat of featured" :cat="cat"/>
    </div>
    <NuxtLink class="ml" to="/cats">See More Cats →</NuxtLink>
  </section>
</template>

<style scoped>
.hero {
  background: url('/shelter.png') no-repeat center center/cover;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}

.hero h2 {
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.cat-gallery {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  flex-wrap: wrap;
}

.cat-gallery > * {
  flex-basis: 0;
}

.ml{
  display: block;
  text-align: end;
  padding: 30px;
}

</style>