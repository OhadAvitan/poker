<template>
  <header>
    <nav id="nav">
      <router-link to="/deck">Deck</router-link>
      <router-link to="/"><img :src="img" class="chipImg" /></router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      img: require('@/assets/imgs/chip.png'),
    };
  },
};
</script>
