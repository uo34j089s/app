<template>
  <section :style="gradientStyle">
    <IndexLogo />
  </section>
</template>

<script setup lang="ts">
// usePointer tracks both mouse and touch input
const { x, y } = usePointer({ target: document });

// Reactive Gradient
const gradientStyle = computed(() => ({
  "--gradient": `radial-gradient(circle at ${x.value}px ${y.value}px, #ff00fa00, 27.5%, #000)`,
}));
</script>

<style lang="css">
section {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}
section::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #00000000;
  background: var(--gradient);
  z-index: 2;
}
</style>
