<template>
  <div class="grid-container">
    <!-- Grid principal -->
    <div
        :class="gridClasses"
        class="grid  w-full"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  columns?: number | 'auto'
  gap?: string
  responsive?: boolean
  minCardWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  columns: 'auto',

  responsive: true,

})

const gridClasses = computed(() => {
  const classes = []

  if (props.responsive && props.columns === 'auto') {
    // Grid responsive avec largeur minimale des cartes
    classes.push('grid-cols-[repeat(auto-fit,minmax(var(--min-card-width),1fr))]')
  } else if (typeof props.columns === 'number') {
    // Nombre fixe de colonnes avec responsive
    if (props.responsive) {
      classes.push(
          'grid-cols-1',
          `sm:grid-cols-${Math.min(props.columns, 2)}`,
          `md:grid-cols-${Math.min(props.columns, 3)}`,
          `lg:grid-cols-${props.columns}`
      )
    } else {
      classes.push(`grid-cols-${props.columns}`)
    }
  }

  return classes
})

// Style CSS custom pour la largeur minimale
const cssVars = computed(() => ({
  '--min-card-width': props.minCardWidth,
  '--gap': props.gap
}))
</script>

<style scoped>
.grid-container {
  width: 100%;
}



/* Classes utilitaires pour les colonnes */
.grid-cols-\[repeat\(auto-fit\,minmax\(var\(--min-card-width\)\,1fr\)\)\] {
  grid-template-columns: repeat(auto-fit, minmax(var(--min-card-width), 1fr));
}

/* Responsive breakpoints */
@media (min-width: 640px) {
  .sm\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sm\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .md\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .lg\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  .lg\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
}
.grid > * {
  padding: 1rem; /* tu choisis la valeur */
}
</style>