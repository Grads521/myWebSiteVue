<template>
    <main>
        <div class="wrapper">
            <div><img src="src/Photo1.jpg" width="20%" height="20%"></div>

            <div class="fio"></div>

            <div class="phone" hidden>
                89211834241
            </div>

            <button class="show-phone">
                Показать телефон
            </button>
        </div>
    </main>
</template>

<script>
</script>

<style scoped>
    main {
        position: relative;
        background-color: #cd9c71;
        width: 100%;
        height: 100vh;
        line-height: 1.4;
        list-style: none;
    }
    .wrapper {
        padding: 15px;
    }
    button {
        color: white;
        background-color: #5e3b8b;
        font-size: 20px;
        padding: 4px 20px;
        border-radius: 6px;
        border: 0;
    }
</style>
