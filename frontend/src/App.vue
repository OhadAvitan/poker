<template>
  <section :src="img" class="bgImg">
    <router-view />
  </section>
</template>

<script>
export default {
    data() {
        return {
            img: require('@/assets/imgs/pokerback.png'),
        }
    },
    components: {
    },
    computed: {},
};
</script>
