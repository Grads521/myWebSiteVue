<template>
    <main class="wrapper">
        <h1> {{ game.title }} </h1>
        <div v-for="(question, index) in game.questions" :key="question.text">
            <div v-show="index === questionIndex">
                <h2> {{ question.text }} </h2>
                <ol>
                    <li v-for="answer in question.answers" :key="answer.text">
                        <label>
                            <input type="radio"
                            v-bind:value="answer.correct"
                            v-bind:name="index"
                            v-model="userAnswers[index]"> {{ answer.text }}
                        </label>
                    </li>
                </ol>

                <button class="prev" v-if="questionIndex > 0" @click="prev">Предыдущий</button>
                <button @click="next">Следующий</button>
            </div>
        </div>
        <div v-show="questionIndex === game.questions.length">
            <h2>
                Викторина завершена
            </h2>
            <p>
                Количество правильных ответов: {{ score() }} / {{ game.questions.length }}
            </p>
        </div>
    </main>
</template>

<script>
    let game = {
                title: 'Кто хочет стать миллионером?',
                questions: [
                    {
                        text: 'Ио это спутник...?',
                        answers: [
                            {text: 'Земли'},
                            {text: 'Марса'},
                            {text: 'Юпитера', correct: true},
                            {text: 'Венеры'},
                        ]
                    }, {
                        text: 'На какой планете кратеры называют в честь деятелей культуры?',
                        answers: [
                            {text: 'Меркурий', correct: true},
                            {text: 'Нептун'},
                            {text: 'Венера'},
                            {text: 'Марс'},
                        ]
                    }, {
                        text: 'Сколько спутников Юпитера было открыто Галилео Галилеем?',
                        answers: [
                            {text: '2'},
                            {text: '5'},
                            {text: '12'},
                            {text: '4', correct: true},
                        ]
                    }, {
                        text: 'Какое небесное тело вращается вокруг Земли?',
                        answers: [
                            {text: 'Луна', correct: true},
                            {text: 'Юпитер'},
                            {text: 'Фобос'},
                            {text: 'Уран'},
                        ]
                    }, {
                        text: 'Какова температура закипания воды в градусах по Цельсию?',
                        answers: [
                            {text: '80'},
                            {text: '0'},
                            {text: '40'},
                            {text: '100', correct: true},
                        ]
                    }
                ]
    };

    export default {
        data() {
            return {
                game: game,
                questionIndex: 0,
                userAnswers: Array(game.questions.length).fill(false)
            }
        },
        methods: {
            next() {
                this.questionIndex++;
            },
            prev() {
                this.questionIndex--;
            },
            score() {
                return this.userAnswers.filter(function(val) { return val }).length;
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
    main .wrapper {
        padding: 15px;
    }
    main .nameGame {
        font-size: 34px;
        color: #130621;
        padding-top: 15px;
    }
    main li {
        list-style: none;
    }
    button {
        margin-top: 10px;
    }
    .prev {
        margin-right: 10px;
    }
</style>
