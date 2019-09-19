<template>
    <div class="home">
        <div class="h-align">
            <span>嗨 <a href="https://vuejs.org" target="_blank">Vue.js</a>，這是首頁 !</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        }
    };
</script>

<style scoped>
    
</style>
