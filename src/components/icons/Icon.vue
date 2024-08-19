<template>
      <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" :fill="fill" :stroke="stroke" xmlns="http://www.w3.org/2000/svg">
        <slot />
      </svg>
  </template>
  
  <script setup lang="ts">
  defineProps({
    fill: {
      type: String,
      default: 'currentColor'
    },
    stroke: {
      type: String,
      default: 'none'
    },
    width: {
      type: String,
      default: '20'
    },
    height: {
      type: String,
      default: '20'
    },
  
  })
  </script>
  