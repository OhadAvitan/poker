<template>
<section class="table">
  <section>
    <seats-form :tableId="tableId" />
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
      <p>{{tableTrans}}</p>
  </section>
  
</section>
</template>

<script>
import SeatsForm from '../cmps/SeatsForm.vue';
import tableService from '@/services/tableService.js'

export default {
  props: ['tableTrans'],
    // action: ['open flop','open turn','open river'],
  data() {
    return {
      imgSrc: require('@/assets/imgs/table.png'),
      tableId: null
      // tableFromParams: null,
    }
  },
  created(){
    // this.getTableFromParams()
    // console.log(this.tableTrans);
    // console.log(this.$route.params._id);
    this.tableId = this.$route.params._id
  },
  methods: {
    getTable() {
      var table = tableService.getTable();
      console.log('table from service (Table)', table);
    },
    // getTableFromParams(){
    //   // return this.tableFromParams = this.$route.params.table
    //   console.log('createdssssssssssssssssss');
    //   // const tt = this.$route.params
    //   // console.log(tt);
    //   return true
    // }
  },
  components: {
    SeatsForm
  }
}
</script>