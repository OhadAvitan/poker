<template>
<section class="game">
  <section>
    <players-names />
  </section>
  <section>
    <div class="table"></div>
      <div class="cards">
        <div class="card-table pos1"></div>
        <div class="card-table pos2"></div>
        <div class="card-table pos3"></div>
        <div class="card-table pos4"></div>
        <div class="card-table pos5"></div>
      </div>
      <p>{{gg}}</p>
  </section>
  
</section>
</template>

<script>
import PlayersNames from '../cmps/PlayersNames.vue';
export default {
  props: ['gg'],
    // action: ['open flop','open turn','open river'],
  data() {
    return {
      imgSrc: require('@/assets/imgs/table.png'),
      tableFromParams: null,
    }
  },
  created(){
    this.getTableFromParams()
  },
  methods: {
    getTableFromParams(){
      // return this.tableFromParams = this.$route.params.table
      console.log('created');
      // const tt = this.$route.params
      // console.log(tt);
      return true
    }
  },
  components: {
    PlayersNames
  }
}
</script>