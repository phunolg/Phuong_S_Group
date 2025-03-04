<script setup>
defineProps({
  height: Number,
  weight: Number,
  abilities: Array
});
</script>

<template>
  <div class="pokemon">
    <div class="size">
      <div class="box">
        <p class="title">Height</p>
        <p class="value">{{ height }}</p>
      </div>
      <div class="box">
        <p class="title">Weight</p>
        <p class="value">{{ weight }}</p>
      </div>
    </div>

    <p class="abilities-title">Abilities</p>
    <div class="abilities-list">
      <span v-for="ability in abilities" :key="ability" class="value">
        {{ ability }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.pokemon{
  text-align: center;
  margin-top: 20px;
}

.size{
  display: flex;
  justify-content: center;
  gap: 130px;
  margin-bottom: 15px;
}

.box {

  text-align: center;
  width: 115px;
}

.title {
  font-weight: 600;
  color: #2c3e50;
  font-size: 20px;

}

.value {
  width: 100px;
  margin: 5px;
  padding: 2px;
  border-radius: 30px;
  background-color: #f6f8fc;
  text-align: center;
  text-transform: capitalize;
}

.abilities-title {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
  color: #2c3e50;
}

.abilities-list {
  display: flex;
  justify-content: center;
  gap: 130px;
}

.ability-item {
  background: #f8fbff;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
}
</style>
