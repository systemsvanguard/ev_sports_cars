<!-- src/pages/CarDetail.vue -->
<template>
    <div class="container mt-4" v-if="car">
      <img :src="`/images/cars/${car.image_1}`" :alt="car.name" class="img-fluid mb-4" />
      <h1 class="fs-4 fs-md-3 fs-lg-2">EV Sports Cars</h1>
  
      <h2>{{ car.year }} {{ car.brand }} {{ car.name }}</h2>
      <p><strong><i class="bi bi-currency-dollar"></i> Price:</strong> ${{ car.price.toLocaleString() }}</p>
      <p><strong><i class="bi bi-rocket-takeoff-fill"></i>  Range:</strong>  {{ car.range }} miles</p>
      <p><strong><i class="bi bi-minecart-loaded"></i>   Weight:</strong> {{ car.weight.toLocaleString() }} lbs</p>
      <p><strong><i class="bi bi-hourglass-bottom"></i>  0 - 60 speed :</strong> {{ car.zeroto60 }} seconds</p>
  
      <p class="mt-4">{{ car.synopsis }}</p>
      
      <router-link to="/" class="btn btn-secondary mt-3">← Back to Home  <i class="bi bi-house-door-fill"></i></router-link> <br /><br />

        <!-- Carousel ~ start -->
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
            <!-- Indicators/dots -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
            </div>

        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
            <div class="carousel-item active"> <img :src="`/images/cars/${car.image_1}`" :alt="car.name" class="d-block w-100" /></div>
            <div class="carousel-item active"> <img :src="`/images/cars/${car.image_2}`" :alt="car.name" class="d-block w-100" /></div>
            <div class="carousel-item active"> <img :src="`/images/cars/${car.image_3}`" :alt="car.name" class="d-block w-100" /></div>
            <div class="carousel-item active"> <img :src="`/images/cars/${car.image_4}`" :alt="car.name" class="d-block w-100" /></div>
            <div class="carousel-item active"> <img :src="`/images/cars/${car.image_5}`" :alt="car.name" class="d-block w-100" /></div>
            <div class="carousel-item active"> <img :src="`/images/cars/${car.image_6}`" :alt="car.name" class="d-block w-100" /></div>

        </div>

            <!-- Left and right controls/icons -->
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
        <!-- Carousel ~ end -->      
  
      
      <br />
    </div>
  
    <div v-else class="text-center mt-5">
      <p>Loading car details...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  
  interface Car {
    id: number
    name: string
    brand: string
    year: number
    price: number
    range: number
    weight: number
    zeroto60: number
    image_1: string
    image_2: string
    image_3: string
    image_4: string
    image_5: string
    image_6: string
    synopsis: string
  }
  
  const route = useRoute()
  const car = ref<Car | null>(null)
  
  onMounted(async () => {
    const id = Number(route.params.id)
    const response = await axios.get('/src/assets/data/data_sportscars.json')
    const cars: Car[] = response.data
    car.value = cars.find(c => c.id === id) || null
  })
  </script>
  