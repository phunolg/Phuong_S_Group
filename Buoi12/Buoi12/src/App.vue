<script setup>
import { ref, computed, onMounted} from "vue";
import Pokemon from "./pokemon.vue";

const allPokemon = ref([]);
const dataCard = ref({ list: [] });
const searchQuery = ref("");
const offset = ref(0);
const limit = 36;

const filteredPokemon = computed(() => {
  if (!searchQuery.value) {
    return { list: dataCard.value.list };
  }


  const searchResults = allPokemon.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  return {
    list: searchResults.map(pokemon => {
      const pokemonId = pokemon.id;
      const existing = dataCard.value.list.find(p => p.id === pokemonId);
      return existing || {
        id: pokemonId,
        name: pokemon.name,
        img: pokemon.img,
        types: pokemon.types,
        loading: true
      };
    }),
  };
});

const getListPokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
  const data = await res.json();

  const allDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonId = pokemon.url.split("/").slice(-2, -1)[0];
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const details = await res.json();
      return {
        id: pokemonId,
        name: details.name,
        url: pokemon.url,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        types: details.types.map(type => type.type.name),
      };
    })
  );
  return allDetails;
};

const getPokemonDetail = (pokemon) => {
  const pokemonId = pokemon.url.split("/").slice(-2, -1)[0];
  return allPokemon.value.find(p => p.id === pokemonId);
};


const loadMore = async () => {
  const nextPokemons = allPokemon.value.slice(offset.value, offset.value + limit);
  const pokemonDetails = await Promise.all(nextPokemons.map(getPokemonDetail));
  dataCard.value.list.push(...pokemonDetails);
  offset.value += limit;
};

onMounted(async () => {
  const pokemonList = await getListPokemon();
  allPokemon.value = pokemonList;
  const firstPokemons = pokemonList.slice(offset.value, offset.value + limit);
  const pokemonDetails = await Promise.all(firstPokemons.map(getPokemonDetail));
  dataCard.value = { list: pokemonDetails };
});
</script>

<template>
  <Pokemon :datas="filteredPokemon" v-model="searchQuery" :loadMore="loadMore" />
</template>
