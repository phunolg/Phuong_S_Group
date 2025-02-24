<script setup>
import { ref, computed, onMounted } from "vue";
import Pokemon from "./pokemon.vue";

const dataCard = ref({ list: [] });
const searchQuery = ref("");

const filteredPokemon = computed(() => {
  return {
    list: dataCard.value.list.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    ),
  };
});

const getListPokemon = async (offset, limit) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
  const data = await res.json();
  return data.results;
};

const getPokemonDetail = async (pokemonId) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const data = await res.json();
  return {
    id: pokemonId,
    name: data.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
    types: data.types.map(type => type.type.name),
  };
};

onMounted(async () => {
  const offset = 0;
  const limit = 850;
  const pokemonList = await getListPokemon(offset, limit);
  const pokemonDetails = await Promise.all(
    pokemonList.map(pokemon => {
      const pokemonId = pokemon.url.split("/").slice(-2, -1)[0];
      return getPokemonDetail(pokemonId);
    })
  );

  dataCard.value = { list: pokemonDetails };
});
</script>

<template>
  <Pokemon :datas="filteredPokemon" v-model="searchQuery"  />
</template>

