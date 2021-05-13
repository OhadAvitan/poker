<template>
    <div class="seats-form">
        <p>Seats Form</p>
        <p>table ID: {{tableId}}</p>
    <!-- <div class="gg" v-for="props.table.player in table.players" :key="table.player">
        <label>player {{n}}:</label>
        <input type="text"> -->
    <!-- </div>
    <p>{{playersNames}}</p> -->
    <div v-for="(players, index) in players" :key="players[index].id" class="player-name-section">
        <p>{{index}}</p>
        <!-- <label for="player">Player name:</label> -->
        <!-- <input type="text" name="player" id="" placeholder="Player name" v-model="table.players[index].name"> -->
    </div>
    <!-- <div v-for="player in table.players" :key="player.id">
        <p>{{player.id}}</p>
    </div> -->
    </div>
</template>

<script>

import tableService from '@/services/tableService.js'

export default {
    props:['tableId'],
    data() {
        return {
            // table: this.$route.params.table
            table: null,
            players: null
        }
    },
    created() {
        // console.log('IIIIIIIIIIII',this.table);
        console.log('****SeatsForm****');
        this.propsToData()
    },
    computed: {
        
        },
    methods: {
        async propsToData() {
            // const gg = this.tableId
            const tableFromDB = await tableService.getById(this.tableId)
            console.log('tableFromDB',tableFromDB);
            this.table = tableFromDB
            this.players = tableFromDB.players
        },
        createNamesObj() {

        }
    }


}
</script>
