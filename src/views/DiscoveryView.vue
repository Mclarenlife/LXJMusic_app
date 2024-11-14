<template>
    <div class="my_discovery">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" height="150px" width="100%" />
            </van-swipe-item>
        </van-swipe>

        <!-- 宫格 -->
        <van-grid :border="false" :column-num="4">
            <van-grid-item>
                <van-image src="https://img.51miz.com/Element/00/80/62/39/a4417018_E806239_4fe6190a.png" />
                <div>每日推荐</div>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.tukuppt.com/png_preview/00/27/95/H92vbZPeNx.jpg!/fw/780" />
                <div>私人FM</div>
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.ixintu.com/download/jpg/202001/de2557a5a2d691ac99dc111550200ff1.jpg!co
n" />
                <div>歌单</div>
            </van-grid-item>
            <van-grid-item>
                <van-image
                    src="https: //gd-hbimg.huaban.com/c7486d376318a742ba2fbe6f35636c7765c25b618530-8sY2Fm_fw658" />
                <div>排行榜</div>
            </van-grid-item>
        </van-grid>

        <!-- 发现好歌单 -->
        <div class="recommend">
            <h4>发现好歌单</h4>
            <van-button color="#c3c3c3" size="small" round plain>
                <span>更多</span>
            </van-button>
        </div>

        <!-- 歌单列表 -->
        <div class="music_card">
            <van-row :gutter="[20, 20]">
                <van-col span="12">
                    <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.D2MqYz6axODWF_T3PWRIrwHaEK?
rs=1&pid=ImgDetMain" alt="">
                </van-col>
                <van-col span="12">
                    <img src="https://img95.699pic.com/photo/40065/2291.jpg_wh300.jpg!/fh/300/quality/90" alt="">
                </van-col>
                <van-col span="12">
                    <img src="https://img.zcool.cn/community/017ce7576f79c10000018c1bf48f1b.jpg@1280w_1l_2o_100s
h.jpg" alt="">
                </van-col>
                <van-col span="12">
                    <img src="https://img.zcool.cn/community/01a6945bd6bcf0a801213deaf62f50.png@1280w_1l_2o_100s
h.png" alt="">
                </van-col>
            </van-row>
        </div>
    </div>
</template>


<script setup>

    const images = [
        'https://tse3-mm.cn.bing.net/th/id/OIP-C.Tq82kGnNHigGZ0jjctQQjAHaDL?rs=1&pid=ImgDetMain',
        'https://img.zcool.cn/community/01444259f1999ea801202b0c434831.jpg@1280w_1l_2o_100sh.jpg',
    ];

</script>


<style scoped>

    .my_discovery {
        padding: 0 10px;
    }

    .recommend {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .recommend span {
        color: #000;
    }

    .music_card {
        overflow: hidden;
        margin-top: 10px;
    }

    img {
        width: 100%;
        height: 200px;
    }

</style>