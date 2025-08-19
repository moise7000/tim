<script setup lang="ts">

</script>

<template>
  <header>
    <h1>Welcome to the Cat Haven!</h1>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/cats">Cats</NuxtLink>
      <NuxtLink to="/cats/random">Random</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </header>
  <main>
    <NuxtPage/>
  </main>
  <footer>Made by me :)</footer>
</template>

<style scoped>
main{
  flex-grow: 1;
}

header{
  padding: 5px;
  border-bottom: 2px solid mediumpurple;
  text-align: center;
}

header>h1{
  font-family: Pacifico,sans-serif;
  font-size: xx-large;
  color: violet;
}

header>nav{
  flex-grow: 1;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

header a{
  text-decoration: none;
  font-family: Pacifico,sans-serif;
  font-size: xx-large;
  color: moccasin;
  margin: 0 15px;
}

footer{
  padding: 5px;
  text-align: center;
  border-top: 1px solid mediumpurple;
}


</style>