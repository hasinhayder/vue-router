<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
// import { useRoute } from 'vue-router';
// const route = useRoute()
</script>

<template>
    <h2>User Profile Page</h2>
    <h2>User ID = {{ $route.params.id }}</h2>
    <router-view></router-view>
</template>    
<style></style>