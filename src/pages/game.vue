<template>
    <main>
        <div class="wrapper">
        <div class="nameGame">{{ title }} </div>
        <button class="startButton">Старт</button>
        <div v-for="question in questions" :key="question.text">
            <div class="question">
                {{ question.text }}
            </div>
            <div class="allAnswer">
                <div v-for="answer in question.answers" :key="answer.text" class="answer">
                    <input type="radio">
                    <label>{{ answer.text }}</label>
                </div>
            </div>
        </div>
        <button>Потвердить</button>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
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
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        padding: 15px;
    }
    .nameGame {
        font-size: 34px;
        color: #130621;
        padding-top: 15px;
    }
    .startButton {
        margin-top: 20px;
    }
    .question {
        font-size: 26px;
        color: #5e3b8b;
    }
    .allAnswer {
        display: table;
        font-size: 18px;
    }
    .answer {
        display: table-cell;
    }
</style>


