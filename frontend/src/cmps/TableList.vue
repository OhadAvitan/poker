<template>
  <div class="table-list">
    <div v-if="tables.length === 0">
      <h3>No tables yet..</h3>
    </div>
    <div v-else>
      <div class="table-preview" v-for="table in tables" :key="table.id">
        <p>Owner: {{ table.owner }}</p>
        <p>Owner: {{ table._id }}</p>
        <p>Players: {{ table.players.length }}</p>
        <p>Mode: {{ table.mode }}</p>
        <button @click="joinTable(table._id)">Join</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tables"],
  data() {
    return {
      // tablesData: this.tables
    };
  },
  created() {
    // console.log('asdsdasdasdadsa');
    // // console.log('asdsdasdasdadsa', this.props);
    // console.log('tablessssssssssssssss', this.tablesData);
    // if(this.props.tables.length === 0) return true
    //     else return false
  },
  methods: {
    joinTable(tableId) {
      this.$router.push("/signup", tableId);
    },
  },
  computed: {},
};
</script>
