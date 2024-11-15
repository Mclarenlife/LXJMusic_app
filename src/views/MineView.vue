<template>
    <div class="my_mine">
        <!-- 我的页面头部 -->
         <div class="mine_header">
            <div class="mine_left">
                <van-imgae round width="3rem" height="3rem" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.R_51sqcxCcrFxLag7A_yTQHaLH?
rs=1&pid=ImgDetMain"></van-imgae>
                <div class="text">
                    <div class="name">Mclarenlife</div>
                    <div class="grade">
                        <van-button plain round type="default" size="mini">Lv。10</van-button>
                    </div>
                </div>
            </div>
            <div class="mine_right">
                <van-icon name="arrow"></van-icon>
            </div>
         </div>
        <!-- 宫格布局 -->
         <div class="mine_grid">
            <van-grid square :border="false">
                <van-grid-item v-for="item in gridList" :key="item.id" :icon="item.icon" :text="item.text" icon-color="#f93b3f"></van-grid-item>
            </van-grid>
         </div>
        <!-- 喜欢的音乐 -->
         <div class="mine_music">
            <div class="music_left">
                <div class="music_img">
                    <van-icon name="like" color="#fff"></van-icon>
                </div>
                <div class="music_text">
                    <div class="music_like">我喜欢的音乐</div>
                    <div class="music_num">188首</div>
                </div>
            </div>
            <div class="music_right">
                <van-button plain round icon="fire-o" type="default" size="mini">心动模式</van-button>
            </div>
         </div>
        <!-- tab -->
         <div class="mine_tab">
            <van-tab v-model:active="activeName" color="#fd5153" background="#f4f4f4">
                <van-tab title="创建歌单" name="a">
                    <div class="tab1">
                        <!-- 创建歌单头部 -->
                         <div class="tab_music_list">
                            <div class="list_left">创建歌单(3个)</div>
                            <div class="list_right">
                                <van-icon name="plus" size="18"/>
                                <van-icon name="descending" size="18"/>
                            </div>
                         </div>
                        <!-- 具体歌单 -->
                         <div class="music_list_play" v-for="item in playList">
                            <div class="play_img">
                                <img :src="item.imgUrl" alt="">
                            </div>
                            <div>
                                <div class="play_text">{{ item.name }}</div>
                                <div class="play_num">{{ item.num }}首</div>
                            </div>
                         </div>
                    </div>
                </van-tab>
                <van-tab title="收藏歌单" name="b">
                    <div class="tab1">11</div>
                </van-tab>
                <van-tab title="歌单助手" name="c">
                    <div class="tab1">22</div>
                </van-tab>
            </van-tab>
         </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    const activeName = ref('a');
    // 宫格数据
    const gridList = [
        { id: 1, icon: 'shop', text: '本地音乐'},
        { id: 2, icon: 'shop-collect', text: '云盘'},
        { id: 3, icon: 'goods-collect', text: '已购'},
        { id: 4, icon: 'play-circle', text: '最近播放'},
        { id: 5, icon: 'friends', text: '我的关注'},
        { id: 6, icon: 'star', text: '收藏和赞'},
        { id: 7, icon: 'volume', text: '我的博客'},
        { id: 8, icon: 'music', text: '音乐应用'},
    ]

    // 歌单数据
    const playList = [
        { id: 1, imgUrl: 'https://img-bsy.txrpic.com/preview/element/00/01/03/44/E-1034453-4AFA904BXZ.jpg?imageMogr2/quality/90/thumbnail/!800x%3E', name: '90后回忆录', num:30},
        { id: 2, imgUrl: 'https://img.51miz.com/Photo/2017/03/27/06/P217531_e9c5584afdaa7f8106435d4d4dfd2a72.jpeg', name: '车载音乐', num:59},
        { id: 3, imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.288fbe512f8c490e4a01cc4846ef111a?rik=IbwIbtJ61ulFdQ&riu=http%3a%2f%2fp3.music.126.net%2frNi-bwy5YJ_QI5UKx9kytA%3d%3d%2f6025323720694870.jpg&ehk=Sp1xBbBOVPUQue2%2bzcnaF0K3HfSOrxkLepWaIap11rk%3d&risl=&pid=ImgRaw&r=0', name: '助眠神曲', num:18},
    ]

</script>


<style scoped>

.my_mine {
    padding: 10px 10px 0;
    background-color: #f4f4f4;
    height: calc(100vh - 105px);
}

.my_mine .mine_header {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mine_header .header_left {
    display: flex;
    align-items: center;
}

.mine_header .header_left .text {
    margin-left: 10px;
}

.mine_header .header_left .name {
    font-size: 16px;
    font-weight: 600;
    color: #000;
}

.my_grid {
    margin-top: 10px;
    border-radius: 10px;
    overflow: hidden;
}

.mine_music {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;
}

.mine_music .music_left {
    display: flex;
    align-items: center;
}

.mine_musci .music_left .music_img {
    width: 50px;
    height: 50px;
    background-image: url('https://tse1-mm.cn.bing.net/th/id/OIP-C.TNE2gqvkCP38r1nda89iagHaEo?rs=1&pid=ImgDetMain');
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.music_text {
    margin-left: 10px;
}

.music_text .music_like {
    font-size: 16px;
    font-weight: 600;
    color: #000;
}

.music_text .music_num {
    font-size: 12px;
    color: #736d6d;
}

.mine_tab {
    margin-top: 15px;
}

.tab1 {
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
}

.tab1 .tab1_music_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 12px;
    color: #736d6d;
}

.tab_music_list .list_right .van-bage__wrapper {
    margin-left: 10px;
}

.music_list_-play {
    display: flex;
    align-items: center;
    padding: 10px;
}

.music_list_-play img {
    width: 45px;
    height: 45px;
    border-radius: 5px;
}

.music_list_-play .play_img {
    margin-right: 10px;
}

.music_list_-play .play_text {
    font-size: 16px;
    font-weight: 600;
    color: #000;
}

.music_list_-play .play_num {
    font-size: 12px;
    color: #736d6d;
}

.van-button {
    width: 70px;
}

</style>