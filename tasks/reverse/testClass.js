'use strict';

const readline = require('node:readline');

class Game {
    constructor(words) {
        this.words = this.shuffleWords(words);
        this.index = 0
        this.timeoutId;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '──> '
        });
    };

    start() {
        this.next();
        this.rl.on('line', (line) => {
        if (this.index < words.length - 1) {
            if (line === words[this.index]) {
            clearTimeout(this.timeoutId);
            this.index++;
            this.next();
            } else {
            console.log(`Вы проиграли ваш рекорд ${this.index}`);
            process.exit(0);
            };
        } else {
            console.clear();
            console.log(`Слова закончились, вы выиграли`);
            process.exit(0);
        };
        });
    };

    next() {
        console.clear();
        console.log('Запомните слово:');
        console.log(words[this.index].split('').reverse().join(''));
        setTimeout(() => {
            console.clear();
            console.log('Введите слово правильно');
            this.rl.prompt();
            this.timeoutId = setTimeout(() => {
                console.clear();
                console.log(`время вышло, ваш рекорд ${this.index}`);
                process.exit(0);
            }, 5000)
        }, 3000)
    }

    shuffleWords(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        };
        return array;
    };
};

const words = ['привет', 'эскалатор', 'завтрак', 'тенис', 'телефон']
new Game(words).start()
