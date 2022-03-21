<template>
    <div class="justify-center">
        <noServer />

        <div>
            <p class="font-medium mb-4">500</p>
            <p class="mb-4 text-gray">抱歉，服务器出错了</p>
            <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import noServer from '@/assets/status/500.svg'
</script>
