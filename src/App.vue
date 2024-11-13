<template>
    <div class="home_header">
        <MyHeader></MyHeader>
    </div>
    <div>
        <RouterView />
    </div>
</template>

<script setup>
// import { RouterView } from 'vue-router';
import MyHeader from '@/components/Header.vue';

</script>

<style scoped>
.home_-header {
    box-sizing: border-box;
    padding: 10px;
}

</style>