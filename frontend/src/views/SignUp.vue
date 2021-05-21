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
  </div>
</template>

<script>
import utilService from "@/services/utilService.js";
import userService from "@/services/userService.js";

export default {
  props: ["tableId"],
  data() {
    return {
      user: {
        fullname: "",
        phoneNumber: "",
        // email:'',
      },
    };
  },
  methods: {
    async onSignup() {
      const userCred = { ...this.user };
      if (!utilService.checkPhoneNumber(userCred.phoneNumber)) {
        alert("Phone number is Invalide");
        return;
      }
      const user = await userService.add(userCred);
      if (!user) {
        alert("User already Exist..heading to login page");
        this.$router.push(`/login`);
        return;
      }
      console.log("onSignup USER returns from DB:", user);
    },
  },
};
</script>
