<script setup lang="ts">
import Person_card from "~/components/person_card.vue";

const people = await $fetch('/api/people');
</script>

<template>
  <div class="top">
    <h2>Our Mission</h2>
    <p>
      At Cat Haven, we are passionate about making the world a better place for cats and their humans. Our mission is to provide a safe, loving environment for cats in need, while offering valuable resources, tips, and inspiration for cat lovers everywhere. Whether you're looking for advice on cat care or looking to adopt your new best friend, we're here to help every step of the way.
    </p>
    <p>
      We believe every cat deserves a home filled with love, and we work tirelessly to help rescue and rehome cats in need. Our website is dedicated to celebrating the joy that cats bring into our lives, providing expert advice, and connecting you with amazing feline companions. Welcome to the purrfect place for cat lovers!
    </p>
    <p>
      We are also incredibly proud of the supportive and passionate community that has grown around Cat Haven. From sharing adoption success stories to exchanging tips on how to care for your furry friends, our visitors and members continuously inspire us. Together, we are building a world where cats are loved, cared for, and treated with the respect they deserve.
    </p>
    
    <div class="people">
      <person_card v-for="person in people" :key="person.name" :person="person" />
    </div>
  </div>
</template>

<style scoped>
.top{
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

h2{
  text-align: center;
  color: violet;
}

p{
  width: 50%;
  text-align: center;
  margin: 20px auto;
  font-size: large;
}

.people{
  border-top: 1px dashed darkviolet;
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

</style>