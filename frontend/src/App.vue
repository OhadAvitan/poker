<template>
<section :src="img" class="bgImg">
    <app-header />
    <router-view />
</section>
</template>

<script>
import AppHeader from './cmps/AppHeader.vue';
export default {
    data() {
        return {
            img: require('@/assets/imgs/pokerback.png'),
        }
    },
    components: {
        AppHeader
    },
    computed: {},
};
</script>
