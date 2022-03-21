<template>
    <section>
        <NavBar />
        <router-view></router-view>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '@/components/nav-bar.vue'
</script>

<style lang="scss" scoped></style>
