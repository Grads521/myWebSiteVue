<template>
    <div class="positioner">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from '@/components/header'
    export default {
        components: {
            Header
        }
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
        font-family: Geometria, sans-serif;
    }
    body {
        background-color: #1c1a1a;
    }
    main {
        position: relative;
        background-color: #cd9c71;
        width: 100%;
        height: 100vh;
        line-height: 1.4;
        list-style: none;
    }
    button {
        color: white;
        background-color: #5e3b8b;
        font-size: 20px;
        padding: 4px 20px;
        border-radius: 6px;
        border: 0;
    }
    .positioner {
        width: 1024px;
        margin: 0 auto;
    }
</style>
