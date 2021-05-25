<template>
    <header>
        <div class="menu-container">
                <router-link to="/">Биография</router-link>
                <router-link to="/achievements">Достижения</router-link>
                <router-link to="/game">Викторина</router-link>
        </div>
    </header>
</template>

<script>
</script>

<style scoped>
    header {
        margin: 0;
        list-style: none;
        background-color: #ffeb8f;
        width: 100%;
        font-size: 20px;
        line-height: 1.4;
    }
    .menu-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding-left: 10px;
    }
    .menu-container a {
        color: #130621;
        text-decoration: none;
        padding: 8px 10px;
    }
</style>
