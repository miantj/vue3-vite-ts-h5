<template>
    <div class="justify-center">
        <noAccess />

        <div>
            <p class="font-medium mb-4">403</p>
            <p class="mb-4 text-gray">抱歉，你无权访问该页面</p>
            <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import noAccess from '@/assets/status/403.svg'
</script>
