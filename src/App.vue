<template>
  <transition name="fade" mode="out-in">
  <router-view> </router-view>
  </transition>
</template>

<style>
  #app {
    width: 100%;
    min-height: 100%;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s ease;
  }


</style>
