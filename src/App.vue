<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@components/Header.component.vue';
</script>

<template>
  <Header />
  <br>
  <RouterView />
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  display: none;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}
</style>
