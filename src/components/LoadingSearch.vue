<template>
  <div class="flex justify-center">
    <span class="loader"></span>
  </div>
</template>

<script setup></script>

<style scoped>
.loader {
  margin: 50px;
  width: 48px;
  height: 48px;
  border: 5px solid rgb(59 130 246);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
