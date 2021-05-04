<template>
<div class="new-table" @submit.prevent="saveNewTable">
    <p>Open new table:</p>
    <section>
        <label for="num-players">Players:</label>
        <select name="num-players" id="num-players" v-model.number="newTableData.numOfPlayers">
            <option v-for="n in 8" :key="n">{{n}}</option>
        </select>
    </section>
    <section>
        <label for="owner">Table owner:</label>
        <input type="text" name="owner" id="" placeholder="Your name" v-model="newTableData.owner">
    </section>
    <section class="radio">
        <label>Mode:</label>
        <input type="radio" id="poker" name="mode" value="poker" v-model="newTableData.mode">
        <label for="poker">Poker</label>
        <input type="radio" id="omaha" name="mode" value="omaha" v-model="newTableData.mode">
        <label for="omaha">Omaha</label>
    </section>

    <button @click="onCreateTable">Create Table</button>
</div>
</template>

<script>
import tableService from '@/services/tableService.js'

export default {
    data() {
        return {
            newTableData: {
                numOfPlayers: 1,
                owner: '',
                mode: 'poker'
            }
        }
    },
    methods: {
        onCreateTable() {
          if(this.newTableData.owner.length<2) {
            console.log('no name')
            alert('Your name please YOU SON OF A BITCH')
          }else {
            console.log('On Create Table')
            tableService.setDeckToGame(this.newTableData)
          }
        },
        // tryt() {
        //     var table = {
        //           numOfPlayers: 4,
        //           owner: 'ohad',
        //           mode: 'poker'
        //     }
        //     tableService.setDeckToGame(table)
        // }
    }

}
</script>
