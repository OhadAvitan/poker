<template>
<div>
    <section v-show="showSection" class="modal">
        <br/><br/>
        <h1>Welcome!</h1>
        <h2>The first virtual deck online</h2><br/>
        <h2>Let's begin..</h2>
    </section>
    <section v-show="!showSection" class="content">
        <h2>-Virtual Deck-</h2>
        <div class="game-btns">
            <button @click="onNewTable">New Table</button>
            <button @click="onActiveTables">Active Tables</button>
        </div>
        <new-table v-show="isNewTableShown" />
        <active-tables :tables="tables" v-show="!isNewTableShown"/>
    </section>
</div>
</template>

<script>

import ActiveTables from '@/cmps/ActiveTables'
import NewTable from '@/cmps/NewTable'
import tableService from '@/services/tableService.js'

export default {
    data() {
        return {
            tables: [],
            isNewTableShown: true,
            showSection: true,
            enterFirstTime: true
        };
    },
    async created(){
        this.fadeOutModal()
        this.goFullscreen()
        this.tables = await tableService.query(); 
        console.log('this.tables:',this.tables);
        
    },
    methods: {
        goFullscreen(){
            // document.documentElement.webkitRequestFullscreen()
        },
        onNewTable() {
            this.isNewTableShown = true
        },
        onActiveTables() {
            this.isNewTableShown = false
        },
        fadeOutModal() {
            //enterFirstTime gonna be in $store
            if(this.enterFirstTime){
                setTimeout (()=> {
                    this.showSection = !this.showSection
                    this.enterFirstTime = false
                },200)
                
            }
        }
    },
    components: {
        ActiveTables,
        NewTable,
    },
};
</script>

