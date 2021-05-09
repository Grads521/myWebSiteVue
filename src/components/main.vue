<template>
    <main>
        <div class="wrapper">
            <div>
                <img v-bind:src="require('/public/images/photo1.jpg')" alt="" width="20%" height="20%"/>
            </div>

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
    export default {
        mounted() {
            document.querySelector('.fio').textContent = 'Исаев Максим Сергеевич';

            const buttonPhone = document.querySelector('.show-phone');

            buttonPhone.addEventListener('click', togglePhone);

            let isPhoneInvisible = true;

            function togglePhone() {
                if (isPhoneInvisible === false) {
                    isPhoneInvisible = true;
                    buttonPhone.textContent = 'Показать телефон';

                } else {
                    isPhoneInvisible = false
                    buttonPhone.textContent = 'Скрыть телефон';
                }
                const showPhone = document.querySelector('.phone');
                showPhone.hidden = isPhoneInvisible;
            }
        }
    }
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
