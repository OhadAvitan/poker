<template>
<div class="players-names">
    <p>playersNames</p>
    <!-- <div v-for="(player, index) in players" :key="player.id" class="player-name-section">
        <label for="player{{ index }}:">Table owner:</label>
        <input type="text" name="owner" id="" placeholder="Player {{}} name" v-model="newTableData.owner">
    </div> -->

</div>
  
</template>

<script>
export default {
    props:['playes'],
    data() {
        return {
            playersNames: []
        }
    },
    computed:{

    }


}
</script>
