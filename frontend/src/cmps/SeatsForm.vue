<template>
    <div class="seats-form">
        <p>Seats Form</p>
        <!-- <p>table ID: {{tableId}}</p> -->
        <div v-for="(player, index) in players" :key="players[index].id" class="player-name-section">
            <label :for="index">Player {{index+1}} name:</label>
            <input type="text" name="player" :id="index" :placeholder="`player `+(index+1)+` name`" v-model="table.players[index].name">
        </div>
        <button @click="onSetSeats">Set Players</button>
    </div>
</template>

<script>

import tableService from '@/services/tableService.js'

export default {
    props:['tableId'],
    data() {
        return {
            table: null,
            players: null
        }
    },
    created() {
        // console.log('IIIIIIIIIIII',this.table);
        console.log('****SeatsForm****');
        this.propsToData()
        // setTimeout (()=> {
        //             this.propsToData()
        //             console.log('timeout');
        //         },6000)
        
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
        async onSetSeats() {
            // console.log(this.players);
            console.log(this.table.players);
            const table = JSON.parse(JSON.stringify(this.table))
            console.log('table (SeatsForm)', table);
            const tableAfterUpdate = await tableService.update(table)
            console.log(tableAfterUpdate);
            this.$emit('seatsAreSet',tableAfterUpdate)

        }
    }


}
</script>
