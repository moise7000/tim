<script setup lang="ts">

</script>

<template>
  <header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/paintings">Paintings</NuxtLink>
      <NuxtLink to="/photos">Photos</NuxtLink>
      <NuxtLink to="/clothing">Clothing</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </header>
  <main>
    <NuxtPage/>
  </main>
</template>

<style scoped>
header {
  background: white;
  border-bottom: 1px solid #eee;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
}

nav a {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
}

nav a:hover {
  border-bottom-color: #333;
}

nav a.router-link-active {
  border-bottom-color: #333;
  font-weight: 600;
}

@media (max-width: 768px) {
  nav {
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>