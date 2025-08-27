<template>
  <div class="painting-card">
    <div class="image-container">
      <img
          :src="getPaintingImageUrl(painting.imageId)"
          :alt="painting.title"
          @error="onImageError"
      />
    </div>
    <div class="content">
      <h3>{{ painting.title }}</h3>
      <p class="dimensions">{{ painting.width }}cm × {{ painting.height }}cm</p>
      <p class="description">{{ painting.description }}</p>
      <div class="stats">
        <span class="views">{{ painting.views }} vues</span>
        <span class="date">{{ formatDate(painting.date) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Painting } from '~/data/paintings'

interface Props {
  painting: Painting
}

const props = defineProps<Props>()
const { getPaintingImageUrl } = usePaintings()

const onImageError = (event: Event) => {
  // Image placeholder si l'image n'existe pas
  const target = event.target as HTMLImageElement
  target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(props.painting.title)}`
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('fr-FR')
}
</script>

<style scoped>
.painting-card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.painting-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.image-container img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.content {
  padding: 16px;
}

.content h3 {
  margin: 0 0 8px 0;
  color: #333;
}

.dimensions {
  color: #666;
  font-size: 0.9rem;
  margin: 4px 0;
}

.description {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 12px 0;
}

.stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #888;
}
</style>