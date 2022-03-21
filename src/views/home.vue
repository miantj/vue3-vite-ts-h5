<template>
    <div class="home-main">
        <van-grid column-num="3" icon-size="50" gutter="10">
            <van-grid-item icon="medal-o" text="文字" />
            <van-grid-item icon="friends-o" text="文字" />
            <van-grid-item icon="cluster-o" text="文字" />
            <van-grid-item icon="goods-collect-o" text="文字" />
        </van-grid>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAsyncRoutes } from '@/api'
getAsyncRoutes()
</script>

<style lang="scss" scoped>
.home-main {
    padding: 20px;
}
</style>
