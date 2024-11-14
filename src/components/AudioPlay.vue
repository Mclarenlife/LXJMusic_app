<template>
<div class="audio_box">
    <div class="player">
        <div class="player_left">
            <div id="box" class="photo pause">
<img :src="imageUrl" alt="">
            </div>
            <div class="text">粗殘臺中-血肉果汁機</div>
        </div>
        <div class="player_right">
            <div class="player_button" @click="playMusic">
                <van-icon v-if="!isPlayer" name="play-circle-o" size="35px" />
                <van-icon v-else name="pause-circle-o" size="35px" />
            </div>
            <div class="player_list">
                <van-icon name="bars" size="35px" />
            </div>
        </div>
    </div>
</div>
</template>


<script setup>

    import { ref } from 'vue';

    let isPlayer = ref(true);
    let isRotating = ref(false);
    let imageUrl = ref('/img.zcool.cn/community/018c025f3fad6aa80120a821dd1380.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100');

    let AudioObj = new Audio('../assets/music/1.mp3')

    // 旋转事件
    function toggleRotation() {
        isRotating.value = !isRotating.value;
        if (isRotating.value) {
            document.getElementById('box').classList.remove('paused');
        }else{
            document.getElementById('box').classList.add('paused');
        }
    }

    function playMusic() {
        toggleRotation()
        if (isPlayer.value) {
            AudioObj.pause ();
        } else {
            AudioObj.play();
        }
        isPlayer.value = !isPlayer.value;
    }

</script>


<style scoped>

    .audio_box {
        border-top: 1px solid #ccc;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        left: 0;
    }

    .audio_box .player {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .player_left {
        display: flex;
        align-items: center;
    }
    .player_right {
        display: flex;
        align-items: center;
    }

    .player_left .photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        transition: transform 0.5s ease;
    }

    .player_left .photo img {
        width: 100%;
        height: 100%;
    }

    .player_left .text {
        margin-left: 20px;
    }

    .player_right .player_button {
        margin-right: 20px;
    }

    #box {
        animation: rotateAnimation 2s infinite linear;
    }

    @keyframes rotateAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    #box.paused {
        animation-play-state: paused;
    }

</style>