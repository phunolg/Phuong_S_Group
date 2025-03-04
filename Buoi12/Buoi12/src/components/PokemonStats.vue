<script setup>
defineProps({
  stats: Array
});
</script>

<template>
  <div class="pokemon-stats">
    <h3 class="stats-title">Stats</h3>
    <div class="stats-container">
      <div v-for="stat in stats" :key="stat.name" class="stat-box">
        <span class="stat-name" :class="stat.name">
          {{ getStatShortName(stat.name) }}
        </span>
        <p class="stat-value">{{ stat.value }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-stats {
  text-align: center;
  margin-top: 20px;
}

.stats-title {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 55px;
}

.stat-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8fbff;
  padding: 10px 0px;
  border-radius: 25px;
  width: 60px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  width: 42px;
}

.stat-name {
  font-size: 10px;
  font-weight: bold;
  color: white;
  padding: 5px 5px;
  border-radius: 100%;
  text-transform: uppercase;
}

.hp { 
  background-color: #df2140; 
}
.attack { 
  background-color: #ff994d; 
}
.defense { 
  background-color: #eecd3d; 
}
.special-attack { 
  background-color: #85ddff; 
}
.special-defense { 
  background-color: #96da83; 
}
.speed { 
  background-color: #ff75a0; 
}

.stat-value {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-top: 3px;
  margin-bottom: 0;
}
</style>

<script>
const statShortNames = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SPA",
  "special-defense": "SPD",
  speed: "SPD"
};

export function getStatShortName(stat) {
  return statShortNames[stat] || stat.toUpperCase();
}
</script>
