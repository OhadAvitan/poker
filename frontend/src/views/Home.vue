<template>
<div>
    <section v-show="showModal" class="modal">
        <br/><br/>
        <h1>Welcome!</h1>
        <h2>The first virtual deck online</h2><br/>
        <h2>Lets begin..</h2>
    </section>
    <section v-show="!showModal" class="content">
        <h2>-Virtual Deck-</h2>
        <div class="game-btns">
            <button @click="onNewTable">New Table</button>
            <button @click="onActiveTables">Active Tables</button>
        </div>
        <new-table v-show="isNewTableShown" />
        <active-tables v-show="!isNewTableShown" />
        <button class="go-flop" @click="goFlop">Go Flop</button>
    </section>
    
</div>
</template>

<script>
import ActiveTables from '@/cmps/ActiveTables'
import NewTable from '@/cmps/NewTable'

export default {
    data() {
        return {
            tables: null,
            isNewTableShown: true,
            showModal: true,
            enterFirstTime: true
        };
    },
    created(){
        if(this.enterFirstTime) this.fadeOutModal()
        
    },
    methods: {
        onNewTable() {
            this.isNewTableShown = true
            console.log('On New Table');
        },
        onActiveTables() {
            this.isNewTableShown = false
            console.log('On Active Tables');
        },
        goFlop() {
            this.$router.push('game')
        },
        fadeOutModal() {
            if(this.enterFirstTime){
                setTimeout (()=> {
                    this.showModal = !this.showModal
                },0)
                this.enterFirstTime = false
            }
        }
    },
    components: {
        ActiveTables,
        NewTable,
    },
};
</script>
