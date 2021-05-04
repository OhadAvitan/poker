<template>
<div>
    <div class="table-list" >
        <div class="table-preview" v-for="table in tables" :key="table.id">
            <p>Owner: {{ table.owner }}</p>
            <p>Players: {{ table.players.length }}</p>
            <p>Mode: {{ table.mode }}</p>
            <button>JOIN</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['tables']
};
</script>
