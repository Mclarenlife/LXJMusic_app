<template>
    <div class="my_header">
        <!-- 左侧 -->
         <div class="header_left">
            <van-icon name="wap-nav" size="22px" />
         </div>
        <!-- 中间 -->
         <div class="header_content">
            <div :class="{ active: currentTab === 1}" @click="setCurrentTab(1)">我的</div>
            <div :class="{ active: currentTab === 2}" @click="setCurrentTab(2)">发现</div>
            <div :class="{ active: currentTab === 3}" @click="setCurrentTab(3)">云村</div>
            <div :class="{ active: currentTab === 4}" @click="setCurrentTab(4)">视频</div>
         </div>
        <!-- 右侧 -->
         <div class="header_right">
            <van-icon name="search" size="22px" />
         </div>
    </div>
</template>

<script setup>
import  router from '@/router'
import {ref} from 'vue'

const currentTab = ref(2);

const setCurrentTab = (tab) => {
    currentTab.value = tab;
    router.push(
        { name: tab === 1 ? 'mine' : tab === 2 ? 'discovery' : tab === 3 ? 'home' : 'video' }
    )
};

</script>

<style scoped>
.my_header {
    display: flex;
    justify-content: space-between;
}

.header_content {
    display: flex;
    justify-content: space-around;
    width: 200px;
}
</style>