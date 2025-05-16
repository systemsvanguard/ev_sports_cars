<!-- src/components/CarCarousel.vue -->
<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          v-for="(img, index) in images"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : undefined"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img :src="`/images/${img}`" class="d-block w-100" alt="Car image slide" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps<{
    images: string[]
  }>()
  </script>
  
  <style scoped>
  .carousel {
    margin-top: 2rem;
    border-radius: 12px;
    overflow: hidden;
  }
  </style>
  
