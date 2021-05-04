<template>
<section class="flop">
  <div class="table"></div>
  <!-- <img :src="imgSrc" class="tableImg"> -->
  <div class="cards">
    <div class="card-table pos1 bounce-enter"></div>
    <div class="card-table pos2"></div>
    <div class="card-table pos3"></div>
    <div class="card-table pos4"></div>
    <div class="card-table pos5"></div>
  </div>
    <!-- <div @click="flipCard(idx)" class="card-table pos5"></div> -->
    <!-- <button @click=""></button> -->
</section>
</template>

<script>
// import Flipper from 'vue-flipper'
export default {

    // action: ['open flop','open turn','open river'],
  data() {
    return {
      imgSrc: require('@/assets/imgs/table.png'),
    }
    
  },
  methods: {
    flipCard(idx) {
      console.log('idx',idx);
      console.log('yessssss');
    }
  },
  // components: {
    // Flipper
  // }
}
</script>