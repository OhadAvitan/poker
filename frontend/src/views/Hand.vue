<template>
  <div class="hand">
    <p class="name">{{user.fullname}}'s hand</p>
    <div v-if="isHidden" class="nope">⛔️NOPE⛔️</div>
    <div
      v-else
      class="hand-con"
      v-for="card in hand"
      :key="card.id"
      :style="'color: ' + cardColor(card)"
    >
      <!-- v-for="(card, index) in hand" -->
      <!-- <div :class="`card pos` + (index + 1)"> -->
      <div>
        <h5 :class="`${card.num === 'Q'}`">{{ card.num }}</h5>
        <h4>{{ card.suit }}</h4>
        <h3 :class="`${card.suit}`">{{ card.suit }}</h3>
      </div>
    </div>

    <div class="buttons">
      <button @click="refresh" class="refresh-btn">
        <img :src="refreshImg" class="refresh-img" />
      </button>
      <!-- <p>Hide Hand</p> -->
      <label class="switch">
        <img :src="eyeImg" class="eye" />
        <input @click="hideHand" type="checkbox" />
        <span class="slider round"></span>
      </label>
      <!-- <button>Hide Hand</button> -->
    </div>
  </div>
</template>

<script>
import userService from "@/services/userService.js"
export default {
  data() {
    return {
      user: null,
      table: null,
      hand: null,
      isHidden: false,
      eyeImg: require('@/assets/imgs/eye3.png'),
      // eyeImg: require('@/assets/imgs/eye.png'),
      refreshImg: require('@/assets/imgs/refresh2.png'),
    }
  },
  async created() {
    console.log(this.$route.params);
    const { userId } = this.$route.params
    console.log('userId',userId);
    this.user = await userService.getById(userId)
    console.log('this.user:',this.user);
    this.hand = this.user.hand
    
  },
  methods: {
    refresh() {
      location.reload();
    },
    cardColor(card) {
      if (card.suit === "♠" || card.suit === "♣") {
        return "black";
      } else return "rgb(194, 16, 16)";
    },
    hideHand() {
        this.isHidden = !this.isHidden
    }
  }

}
</script>
