<template>
  <div class="new-table" @submit.prevent="saveNewTable">
    <p>Open new table:</p>
    <!-- <section>
      <label for="num-players">Players:</label>
      <select
        name="num-players"
        id="num-players"
        v-model.number="newTableData.numOfPlayers"
      >
        <option v-for="n in 8" :key="n">{{ n }}</option>
      </select>
    </section> -->
    <section>
      <label for="owner">Table owner:</label>
      <input
        type="text"
        name="owner"
        id="fname"
        placeholder="Full name"
        v-model="newTableData.owner.fullname"
      />
    </section>
    <section>
      <label for="phone">Phone number:</label>
      <input
        type="text"
        pattern="\d*"
        name="phone"
        id="pnumber"
        placeholder="Phone number"
        v-model="newTableData.owner.phoneNumber"
      />
    </section>
    <section class="radio">
      <label>Mode:</label>
      <input
        type="radio"
        id="poker"
        name="mode"
        value="poker"
        v-model="newTableData.mode"
      />
      <label for="poker">Poker</label>
      <input
        type="radio"
        id="omaha"
        name="mode"
        value="omaha"
        v-model="newTableData.mode"
      />
      <label for="omaha">Omaha</label>
    </section>

    <button @click="onCreateTable">Create Table</button>
  </div>
</template>

<script>
import tableService from '@/services/tableService.js'
// const ObjectId = require('mongodb').ObjectId

export default {
    data() {
        return {
            newTableData: {
                owner: {fullname: '',phoneNumber: ''},
                mode: 'poker'
            }
        }
    },
    methods: {
        async onCreateTable() {
          if(this.newTableData.owner.fullname.length<2) { alert(`Your name please! Full name is REQUIRE!`) } 
          else {
            const table = await tableService.add(this.newTableData)
            // if(table === false) alert('Already registered')
            // const table = await tableService.setDeckToGame(this.newTableData)
            console.log('table returns from DB:', table)

            // this.$router.push({path: 'table', params: {tableTrans: table}})
            this.$router.push(`/table/${table._id}`)
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
