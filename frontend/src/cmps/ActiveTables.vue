<template>
  <div class="active-tables">
    <table-list :tables="tables" />
  </div>
</template>

<script>
import TableList from './TableList.vue'

export default {
  props:['tables'],
  data() {
    return {
      // tables: null,
    };
  },
  created() {
    // console.log('created');
    // this.tables = await tableService.query();
    // console.log('end created', this.tables);

  },
  methods:{
    loadTables(){
      // this.emit('loadTables', JSON.parse(JSON.stringify(this.tables)))
    }
  },
  components: {
    TableList,
  },
};
</script>
