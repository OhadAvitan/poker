<template>
  <div class="signup">
    <h3>Sign Up</h3>
    <section>
      <label for="fullname">Full name:</label>
      <input
        type="text"
        name="fullname"
        v-model="user.fullname"
        placeholder="Your full name"
      />
    </section>
    <section>
      <label for="phone-number">Phone number:</label>
      <input
        type="text"
        name="phone-number"
        v-model="user.phoneNumber"
        placeholder="Your Phone number"
      />
    </section>
    <button @click="onSignup">Sign Up</button>
    <button @click="onSomething">On something</button>
  </div>
</template>

<script>
import utilService from "@/services/utilService.js";
import userService from "@/services/userService.js";

export default {
  data() {
    return {
      user: {
        fullname: "",
        phoneNumber: "",
        joinTableId: this.$route.params.tableId,
      },
    };
  },
  created() {

},
  methods: {
    async onSignup() {
      const userCred = { ...this.user }
      if (!utilService.checkPhoneNumber(userCred.phoneNumber)) {
        alert("Phone number is Invalide")
        return
      }

      const {joinTableId} = userCred
      delete userCred.joinTableId
      console.log('userCreddddddddddddd',userCred)
      const user = await userService.add(userCred)
      if (!user) {
        alert("User already Exist..heading to login page")
        this.$router.push(`/login`)
        return
      }

      console.log("onSignUp USER returns from DB:", user)
      const temp = await userService.joinTable(user._id , joinTableId)
      // console.log('should be true:',temp);
      if(temp) {
        this.$router.push(`/table/${joinTableId}/hand/${user._id}`)
      }
    },
    onSomething() {
      // console.log(this.$route.params)
    },
  },
};
</script>
