<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  evoId: Number,
});

const evolutions = ref([]);
const getEvolutions = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${props.evoId}`);
    const data = await res.json();
    const chain = data.chain;
    const evoList = [];
    let current = chain;

    while (current) {
      const pokemon = current.species;
      evoList.push({
        id: pokemon.url.split("/").slice(-2, -1)[0],
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
      });
      current = current.evolves_to[0] || null;
    }
    evolutions.value = evoList;
};
  watch(() => props.evoId, getEvolutions, { immediate: true });
</script>

<template>
  <div class="pokemon-evolution">
    <h3 class="title">Evolution</h3>
    <div class="container-box">
      <div v-for="(evolution, index) in evolutions" :key="evolution.id" class="box">
        <router-link :to="'/detail/' + evolution.id" class = "boxx">
          <p class="namee">
            {{ evolution.name }}
          </p>
          <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.id}.png`" :alt="evolution.name"/>
        </router-link>
        <span v-if="index !== evolutions.length - 1" class="arrow">></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-evolution {
  text-align: center;
  margin-top: 20px;
}

.title {
  font-weight: 600;
  color: #2c3e50;
  font-size: 20px;
}

.container-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.boxx {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

}

.box {
  display: flex;
  align-items: center;
}

.box img {
  width: 100px;
  height: 100px;
}

.namee {
  font-size: 18px;
  color: #2c3e50;
  font-weight: 600;
}

.arrow {
  align-items: center;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  font-size: 17px;
  margin-left: 10px;
}

</style>

