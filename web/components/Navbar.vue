<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            MonSite
          </NuxtLink>
        </div>


        <!-- Bouton CTA (desktop) -->
        <div class="hidden md:block">
          <NuxtLink
              to="/contact"
              class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Bouton menu mobile -->
        <div class="md:hidden">
          <button
              @click="toggleMobileMenu"
              class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              :class="{ 'text-blue-600': mobileMenuOpen }"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                  v-if="!mobileMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink
              v-for="item in menuItems"
              :key="item.name"
              :to="item.href"
              @click="closeMobileMenu"
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              :class="{ 'text-blue-600 bg-blue-50': isActiveRoute(item.href) }"
          >
            {{ item.name }}
          </NuxtLink>

          <!-- Bouton CTA mobile -->
          <NuxtLink
              to="/contact"
              @click="closeMobileMenu"
              class="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors duration-200 mt-4"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// État du menu mobile
const mobileMenuOpen = ref(false)

// Items du menu
const menuItems = ref([
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' }
])

// Router pour vérifier la route active
const route = useRoute()

// Fonction pour basculer le menu mobile
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Fonction pour fermer le menu mobile
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Fonction pour vérifier si une route est active
const isActiveRoute = (href) => {
  if (href === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(href)
}

// Fermer le menu mobile quand on clique à l'extérieur
const handleClickOutside = (event) => {
  if (mobileMenuOpen.value && !event.target.closest('nav')) {
    closeMobileMenu()
  }
}

// Fermer le menu mobile avec Escape
const handleEscape = (event) => {
  if (event.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})

// Fermer le menu mobile lors du changement de route
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<style scoped>
/* Styles additionnels si nécessaire */
.router-link-exact-active {
  @apply text-blue-600 bg-blue-50;
}
</style>