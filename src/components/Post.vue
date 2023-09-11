<script setup>
import {ref, reactive, onBeforeMount} from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const post = reactive({
    title:''
})

onBeforeMount(()=>{
    fetch(`https://dummyjson.com/posts/${route.params.id}`)
    .then(response => response.json())
    .then(json => {
        post.title = json.title
    })
})
</script>

<template>
    <h2>This is post page</h2>
    <h3>Post id is {{ $route.params.id }}</h3>
    <h3>Post title is {{ post.title }}</h3>
</template>    
<style></style>