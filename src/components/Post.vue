<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const post = reactive({
    title: ''
})

onBeforeMount(() => {
    if (route.params.id == undefined) {
        return
    }
    fetch(`https://dummyjson.com/posts/${route.params.id}`)
        .then(response => response.json())
        .then(json => {
            post.title = json.title
        })
})
</script>

<template>
    <h2>This is post page</h2>
    <template v-if="$route.params.id">
        <h3>Post id is {{ $route.params.id }}</h3>
        <h3>Post title is {{ post.title }}</h3>
    </template>
    <template v-else>
        <h3>Post id is not defined</h3>
    </template>
</template>    
<style></style>