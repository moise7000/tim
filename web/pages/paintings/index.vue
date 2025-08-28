<template>
  <div class="paintings-page">




    <GridContainer
        :columns="4"
        :responsive="true"
        gap="1rem"
    >
      <PaintingCard
          v-for="painting in displayedPaintings"
          :key="painting.id"
          :painting="painting"
          @click="goToPainting(painting.id)"
      />

    </GridContainer>



    <div class="paintings-grid">

    </div>
  </div>
</template>

<script setup lang="ts">
import GridContainer from "~/components/GridContainer.vue";

const { getAllPaintings, searchPaintings } = usePaintings()

const searchQuery = ref('')
const displayedPaintings = ref(getAllPaintings())

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    displayedPaintings.value = searchPaintings(searchQuery.value)
  } else {
    displayedPaintings.value = getAllPaintings()
  }
}

const goToPainting = (id: string) => {
  navigateTo(`/paintings/${id}`)
}

// SEO
useHead({
  title: 'Galerie d\'Art - Nos Œuvres',
  meta: [
    { name: 'description', content: 'Découvrez notre collection d\'œuvres d\'art.' }
  ]
})
</script>

<style scoped>
.paintings-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-bar {
  margin: 20px 0;
}

.search-bar input {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.paintings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
}
</style>