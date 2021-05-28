<template>
    <main>
        <ul id="example-2">
            <li v-for="(chapter, index) in chapters" :key="index">
                {{ index+1 }}. {{ chapter }}
            </li>
            <textarea v-model="newChapter" cols="40" rows="3"></textarea>
        </ul>
        <button @click="addChapter">Добавить</button>
        <button @click="cleanTextarea">Очистить</button>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                chapters: [ 'Глава 1', 'Глава 2', 'Глава 3' ],
                newChapter: ''
            }
        },
        methods: {
            addChapter() {
                this.chapters.push(this.newChapter);
                this.newChapter = '';
            },
            cleanTextarea() {
                this.newChapter = '';
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        padding-top: 20px;
        padding-left: 20px;
    }
    button {
        margin-left: 20px;
    }
</style>
