<template>
    <div class="container mt-4">
      <img src="/images/home.webp" alt="Home banner" class="img-fluid mb-4" />
      <h1 class="fs-4 fs-md-3 fs-lg-2">EV Sports Cars</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 mb-4" v-for="car in cars" :key="car.id">
            <!-- 
              col-12 → full-width on extra-small screens | 
              col-sm-6 → 2-per-row on small tablets | 
              col-lg-4 → 3-per-row on desktops | 
              mb-4 adds vertical space between rows  
             -->
          <CarCard :car="car" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import CarCard from '@/components/CarCard.vue'
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  interface Car {
    id: number
    name: string
    brand: string
    year: number
    synopsis: string
    thumb: string
  }
  
  const cars = ref<Car[]>([])
  
  onMounted(async () => {
    const response = await axios.get('/src/assets/data/data_sportscars.json')
    cars.value = response.data
  })
  </script>
  
