<template>
  <div class="painting-card">
    <div class="image-container">
      <img
          :src="getPaintingImageUrl(painting.imageId)"
          :alt="painting.title"
          @error="onImageError"
      />
    </div>

    <!-- légende affichée seulement si showCaption = true -->
    <div v-if="false" class="content">
      <h3>{{ painting.title }}</h3>
      <p v-if="painting.width && painting.height" class="dimensions">
        {{ painting.width }} × {{ painting.height }} cm
      </p>
      <span v-if="painting.date" class="date">
        {{ formatDate(painting.date) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Painting } from '~/data/paintings'

interface Props {
  painting: Painting
  showCaption?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showCaption: true
})

const { getPaintingImageUrl } = usePaintings()

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(props.painting.title)}`
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('fr-FR', { year: "numeric" })
}
</script>

<style scoped>
.painting-card {

  border-radius: 0px;
  overflow: hidden;

  transition: transform 0.05s ease, box-shadow 0.25s ease;
  width: 300px;          /* largeur fixe (adaptable) */
}

.painting-card:hover {
  transform: translateY(-2px);

}

.image-container {
  width: 100%;
  height: 250px;          /* hauteur fixe => masque */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;      /* crop au centre */
  transition: transform 0.4s ease;
}

.painting-card:hover .image-container img {
  transform: scale(1.05);
}

.content {

  text-align: center;
}

.content h3 {
  margin: 0 0 6px 0;
  font-size: 1rem;
  font-weight: 600;
  color: #222;
}

.dimensions {
  color: #666;
  font-size: 0.85rem;
  margin: 2px 0;
}

.date {
  display: block;
  margin-top: 4px;
  font-size: 0.8rem;
  color: #aaa;
}
</style>
