<style>
    .bg{
        width: 200px;height: 200px;
        background: url(../assets/lo2go.png) 0 0 no-repeat;
    }
</style>
<template>
    <div id="app">
        <img :src="src">
        <div class="bg"></div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
                src:"./assets/lo2go.png"
            }
        }
    }
</script>