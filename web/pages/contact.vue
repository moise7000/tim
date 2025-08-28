<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Exemples de Grid avec différents types de cards</h1>


    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Produits</h2>
      <GridContainer
          :columns="'auto'"
          :responsive="true"
          min-card-width="300px"
          gap="1.5rem"
      >
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
      </GridContainer>
    </section>

    <!-- Section Équipe -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Notre Équipe</h2>

    </section>

    <!-- Section Articles -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Derniers Articles</h2>
      <GridContainer
          :columns="3"
          :responsive="true"
          min-card-width="350px"
          gap="2rem"
      >
        <ArticleCard
            v-for="article in articles"
            :key="article.id"
            :article="article"
        />
      </GridContainer>
    </section>

    <!-- Grid mixte -->
    <section>
      <h2 class="text-2xl font-semibold mb-6">Grid Mixte</h2>
      <GridContainer
          :columns="'auto'"
          :responsive="true"
          min-card-width="280px"
          gap="1.5rem"
      >


      </GridContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// Import des composants
import GridContainer from '~/components/GridContainer.vue'


// Données d'exemple
const products = ref([
  {
    id: 1,
    name: "Smartphone Pro",
    description: "Le dernier smartphone avec toutes les fonctionnalités avancées",
    price: 899,
    image: "https://via.placeholder.com/300x200/3B82F6/ffffff?text=Smartphone"
  },
  {
    id: 2,
    name: "Ordinateur Portable",
    description: "Performant et léger pour tous vos besoins professionnels",
    price: 1299,
    image: "https://via.placeholder.com/300x200/10B981/ffffff?text=Laptop"
  },
  {
    id: 3,
    name: "Casque Audio",
    description: "Son haute qualité avec réduction de bruit active",
    price: 299,
    image: "https://via.placeholder.com/300x200/8B5CF6/ffffff?text=Casque"
  }
])

const users = ref([
  {
    id: 1,
    name: "Marie Dubois",
    role: "Développeuse Frontend",
    email: "marie.dubois@example.com",
    avatar: "https://via.placeholder.com/64x64/F59E0B/ffffff?text=MD"
  },
  {
    id: 2,
    name: "Pierre Martin",
    role: "Designer UX/UI",
    email: "pierre.martin@example.com",
    avatar: "https://via.placeholder.com/64x64/EF4444/ffffff?text=PM"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Chef de Projet",
    email: "sarah.johnson@example.com",
    avatar: "https://via.placeholder.com/64x64/06B6D4/ffffff?text=SJ"
  },
  {
    id: 4,
    name: "Alex Chen",
    role: "Développeur Backend",
    email: "alex.chen@example.com",
    avatar: "https://via.placeholder.com/64x64/84CC16/ffffff?text=AC"
  }
])

const articles = ref([
  {
    id: 1,
    title: "Les tendances du développement web en 2024",
    excerpt: "Découvrez les technologies et frameworks qui définissent l'avenir du développement web cette année...",
    author: "Marie Dubois",
    category: "Technologie",
    date: "2024-08-15"
  },
  {
    id: 2,
    title: "Comment optimiser les performances de votre application Vue.js",
    excerpt: "Des techniques pratiques pour améliorer la vitesse et l'efficacité de vos applications Vue.js...",
    author: "Pierre Martin",
    category: "Développement",
    date: "2024-08-20"
  },
  {
    id: 3,
    title: "L'importance de l'accessibilité dans le design web",
    excerpt: "Pourquoi l'accessibilité devrait être au cœur de votre processus de design et comment l'implémenter...",
    author: "Sarah Johnson",
    category: "Design",
    date: "2024-08-25"
  }
])

// Meta pour Nuxt
useHead({
  title: 'Grid Component Example',
  meta: [
    { name: 'description', content: 'Exemple d\'utilisation du composant Grid avec différents types de cartes' }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>