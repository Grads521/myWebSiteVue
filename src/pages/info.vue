<template>
    <main>
        <div class="wrapper">
            <div>
                <img v-bind:src="require('/public/images/photo1.jpg')" alt="" width="20%" height="20%"/>
            </div>

            <p class="fio">
                {{ fio }}
            </p>

            <transition name="fade">
                <p v-if="isPhoneVisible">89211834241</p>
            </transition>

            <button v-on:click="togglePhoneVisibility">
                <p>{{ isPhoneVisible ? 'Скрыть телефон' : ' Показать телефон' }}</p>
            </button>

        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                fio: 'Исаев Максим Сергеевич',
                isPhoneVisible: false,
            }
        },
        methods: {
            togglePhoneVisibility: function () {
                this.isPhoneVisible = !this.isPhoneVisible;
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .wrapper {
        padding: 15px;
    }
</style>
