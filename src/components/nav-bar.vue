<template>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const onClickLeft = () => history.back()

</script>

<style lang="scss" scoped></style>
