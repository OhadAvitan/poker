<template>
  <div>
    <table-list :tables="tables" />
  </div>
</template>

<script>
import TableList from './TableList.vue'
import tableService from '@/services/tableService.js'

export default {
  data() {
    return {
      tables: null,
    };
  },
  async created() {
    this.tables = await tableService.createDemoTables();
  },
  components: {
    TableList,
  },
};
</script>
