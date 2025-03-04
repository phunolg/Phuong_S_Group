<script setup>
defineProps({
  img: String,
  name: String,
  types: Array,
  description: String
});
</script>

<template>
  <div class="pokemon-image">
    <img :src="img" :alt="name" />
  </div>

  <div class="features">
    <div class="type">
      <span v-for="type in types" :key="type" :class="['type', type]">
        {{ type }}
      </span>
    </div>
  </div>

  <div class="pokemon-name">
    {{ name }}
  </div>

  <p class="description">
    {{ description }}
  </p>
</template>

<style scoped>

:global(body) {
  font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  text-align: center;
  background-color: #fff;
  margin: 0;
  padding: 0;
}

img {
  margin-top: 100px;
  width: 200px;
  height: 200px;
}

.type {
  padding: 7px 6px;
  border-radius: 5px;
  font-size: 13px;
  color: #000;
  font-weight: 500;
  margin: 3px;
}

.type::first-letter {
  text-transform: uppercase;
}

.pokemon-name::first-letter {
  text-transform: uppercase;
}

.pokemon-name {
  font-size: 28px;
  font-weight: bold;
  margin-top: 8px;
}

.description {
  font-size: 18px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}

</style>
