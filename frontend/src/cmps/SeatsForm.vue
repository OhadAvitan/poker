<template>
<div class="seats-form">
    <p>Seats Form</p>
    <p>{{this.$route.params}}</p>
    <div class="gg" :v-for="table.player in table.players" :key="table.player">
        <label>player {{n}}:</label>
        <input type="text">
    </div>
    <p>{{playersNames}}</p>
    <!-- <div v-for="(player, index) in players" :key="player.id" class="player-name-section">
        <label for="player{{ index }}:">Table owner:</label>
        <input type="text" name="owner" id="" placeholder="Player {{}} name" v-model="newTableData.owner">
    </div> -->

</div>
  
</template>

<script>
export default {
    props:['table'],
    data() {
        return {
            playersNames: this.$route.params
        }
    },
    computed:{

    }


}
</script>
