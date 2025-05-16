<template>
    <div class="card mb-4">
      <img 
        :src="`/images/cars/${car.thumb}`" 
        class="card-img-top" 
        :alt="car.name" 
        img-fluid 
      />
      <div class="card-body">
        <h5 class="card-title">
          <router-link :to="`/details/${car.id}`">{{ car.year }} {{ car.brand }} {{ car.name }}</router-link>
        </h5>
        <p class="card-text">
          {{ car.synopsis.slice(0, 30) }}...
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    car: {
      id: number
      name: string
      brand: string
      year: number
      synopsis: string
      thumb: string
    }
  }>()
  </script>
  