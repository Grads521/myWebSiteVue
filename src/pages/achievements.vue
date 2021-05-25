<template>
    <main>
        <ul id="example-1">
            <li v-for="item in items" :key="item.message">
                {{ item.message }}
            </li>
        </ul>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    { message: 'Глава 1' },
                    { message: 'Глава 2' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
