<template>
  <div class="hand">
    <h1>hand</h1>
    <h1>hand</h1>
    <h1>hand</h1>
    <pre>{{ user }}</pre>
    <button @click="print">Show User</button>
  </div>
</template>

<script>
import userService from "@/services/userService.js"
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const userId = this.$route.params.userId
    console.log('userId',userId);
    const user = await userService.getById(userId)
    this.user = user
  },
  methods: {
    print() {
      console.log(this.user);
    }
  }

}
</script>
