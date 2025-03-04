<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PokemonImage from '@/components/PokemonImage.vue';
import PokemonInfo from '@/components/PokemonInfo.vue';
import PokemonStats from '@/components/PokemonStats.vue';
import PokemonEvolution from "@/components/PokemonEvolution.vue";

const route = useRoute();
const pokemon = ref(null);
const evoId = ref(null);

const getPokemonDetail = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
  const data = await res.json();
  const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${route.params.id}`);
  const speciesData = await speciesRes.json();
  const chainID = speciesData.evolution_chain.url.split("/").slice(-2, -1)[0];
  evoId.value = chainID;
  const entry = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === "en"
  );
  const description = entry.flavor_text;

  pokemon.value = {
    id: route.params.id,
    name: data.name,
    img: data.sprites.front_default,
    types: data.types.map(type => type.type.name),
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map(ability => ability.ability.name),
    stats: data.stats.map(s => ({ name: s.stat.name, value: s.base_stat })),
    description: description,
  };
};
onMounted(getPokemonDetail);
</script>

<template>
    <div v-if="pokemon">
    <PokemonImage 
      :img="pokemon.img" 
      :name="pokemon.name" 
      :types="pokemon.types" 
      :description="pokemon.description"
    />
    <PokemonInfo 
      :height="pokemon.height" 
      :weight="pokemon.weight" 
      :abilities="pokemon.abilities" 
    />
    <PokemonStats :stats="pokemon.stats" />
    <PokemonEvolution v-if="evoId" :evoId="evoId" />
  </div>
</template>