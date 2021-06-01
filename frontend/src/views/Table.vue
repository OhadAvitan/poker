<template>
  <section class="table-view">
    <button @click="onChangeSeats">{{ changeSeatsAction }}</button>
    <div v-show="changeSeats">
      <change-seats />
    </div>
    <h3>Players connected:{{ this.table.players.length }}</h3>
    <!-- <section>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section> -->
    <section>
      <h3>Wait for the players to join</h3>
      <pre style="text-align: left">table:{{ table }}</pre>
      <button @click="newRound">New round</button>
      <button class="action-btn" @click="tableActions(indexAction)">
        {{ action }}
      </button>
      <div class="table"></div>
      <div class="cards">
        <div
          v-for="(card, index) in flop"
          :key="card.id"
          :style="'color: ' + cardColor(card)"
          :class="`card-table pos` + (index + 1)"
        >
          <div :hidden="!card.isShown">
            <p>{{ card.num }}</p>
            <p>{{ card.suit }}</p>
            <h3>{{ card.suit }}</h3>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ChangeSeats from "../cmps/ChangeSeats.vue";
import tableService from "@/services/tableService.js";

export default {
  data() {
    return {
      // imgSrc: require("@/assets/imgs/table.png"),
      table: null,
      flop: null,
      indexAction: 2,
      action: this.tableActions(this.indexAction),
      changeSeats: false,
      changeSeatsAction: 'Change Seats',
      // tableFromParams: null,
    };
  },
  async created() {
    // this.getTableFromParams()
    // console.log(this.tableTrans);
    // console.log(this.$route.params._id);
    // this.table = await this.getTableFromDB(this.$route.params._id)
    this.table = await tableService.getById(this.$route.params.id)
    console.log('this.tableeeeeeeeeeee',this.table);
    this.action = "open flop"
  },
  methods: {
    // async newRound(table) {
    //   await 
    //   this.flop = this.table.flop;
    // },
    onChangeSeats(){
      this.changeSeats = !this.changeSeats
      if(this.changeSeats) this.changeSeatsAction = 'Save'
      else this.changeSeatsAction = 'Change Seats'
    },
    async newRound() {
      // console.log('this.table._id:(Table):',this.table._id);
      const pp = await tableService.newRound(this.table._id)
      this.flop = pp.flop
      console.log('PPPPPPPPPPPPPPPPPPPPPPPPP',pp);
    },
    cardColor(card) {
      if (card.suit === "♠" || card.suit === "♣") {
        return "black";
      } else return "rgb(194, 16, 16)";
    },
    tableActions(index) {
      switch (index) {
        case 1:
          console.log("New round and change to open flop");
          this.action = "Open flop";
          break;
        case 2:
          console.log("open flop and change to open turn");
          this.visibleFlop();
          this.action = "Open turn";
          break;
        case 3:
          console.log("open turn and change to open river");
          this.visibleTurn();
          this.action = "Open river";
          break;
        case 4:
          console.log("open river and change to New round");
          this.visibleRiver();
          this.action = "New round";
          this.indexAction = 0;
          break;
      }
      this.indexAction++;
    },
    visibleFlop() {
      this.flop[0].isShown = !this.flop[0].isShown;
      this.flop[1].isShown = !this.flop[1].isShown;
      this.flop[2].isShown = !this.flop[2].isShown;
    },
    visibleTurn() {
      this.flop[3].isShown = !this.flop[3].isShown;
    },
    visibleRiver() {
      this.flop[4].isShown = !this.flop[4].isShown;
    },
  },
  components: {
    ChangeSeats,
  },
};
</script>