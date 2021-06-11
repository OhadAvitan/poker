<template>
  <div class="change-seats">
    <div v-if="!table" class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-else v-for="player in players" :key="player._id" class="ss">
      <p>{{player.name}}</p>
    </div>
    <h3>Change Seats</h3>
    <h3>Implementaion Soon</h3>
  </div>
</template>

<script>
import tableService from '@/services/tableService.js'
export default {
  props:['tableIdProp'],
  data() {
    return {
      tableId: this.tableIdProp,
      table: null,
      players: this.table.players

    }
  },
  async created() {
    console.log('Change Seats');
    console.log('tableId',this.tableId);
    this.table = await tableService.getById(this.tableId)
    console.log('this.table==>', this.table);

  }

}
</script>