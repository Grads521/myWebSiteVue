<template>
    <header>
        <div class="menu-container">
                <li @click="$router.push('/')"><a>Биография</a></li>
                <li @click="$router.push('/myachievements')"><a>Достижения</a></li>
                <li @click="$router.push('/mygame')"><a>Викторина</a></li>
        </div>
    </header>
</template>

<script>
</script>

<style scoped>
    header {
        margin: 0;
        padding-top: 5px;
        padding-bottom: 5px;
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
    .menu-container li {
        display: inline-block;
    }
</style>
