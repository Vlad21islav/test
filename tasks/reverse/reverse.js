'use strict';

const readline = require('node:readline');

class Game {
  constructor(words) {
    this.words = this.shuffleWords(words);
    this.overNum = 0;
    this.overTime = 0;
    this.index = 0;
    this.timeoutId;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '──> '
    });
  };

  start() {
    this.rl.on('line', (line) => {
      this.overNum += 1;
      this.endTime = Date.now()
      this.overTime += Math.floor(this.endTime / 60 / 60) - Math.floor(this.startTime / 60 / 60);
      if (this.index < this.words.length - 1) {
        if (line === this.words[this.index]) {
          clearTimeout(this.timeoutId);
          this.index++;
          this.next();
        } else {
          console.clear()
          console.log(`Вы проиграли ваш рекорд ${this.index}, среднее время записи слова - ${Math.floor(this.overTime / this.overNum)} секунд, общее время - ${this.overTime} секунд`);
          process.exit(0);
        };
      } else {
        console.clear();
        console.log(`Слова закончились, вы выиграли, среднее время записи слова - ${this.overTime / this.overNum}, общее время - ${this.overTime}`);
        process.exit(0);
      };
    });
    this.next();
  };

  next() {
    console.clear();
    console.log('Запомните слово:');
    console.log(this.words[this.index].split('').reverse().join(''));
    setTimeout(() => {
      console.clear();
      console.log('Введите слово правильно');
      this.rl.prompt();
      this.startTime = Date.now() 
      this.timeoutId = setTimeout(() => {
        console.clear();
        this.overNum += 1;
        this.endTime = Date.now()
        this.overTime += Math.floor(this.endTime / 60 / 60) - Math.floor(this.startTime / 60 / 60);
        console.log(`время вышло, ваш рекорд ${this.index}, среднее время записи слова - ${this.overTime / this.overNum}, общее время - ${this.overTime}`);
        process.exit(0);
      }, 5000);
    }, 3000);
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

const russianWords = ['приветствие', 'забавный', 'красотка', 'победитель', 'интеллект', 'удивительный', 'надежный', 'эксперимент', 'мелодичный', 'восхитительный', 'растительность', 'демонстрация', 'громадный', 'оригинальный', 'совершенный', 'безопасность', 'инновационный', 'участник', 'эмоциональный', 'многообразие', 'исследование', 'высококачественный', 'образовательный', 'технологический', 'перспективный', 'увлекательный', 'симпатичный', 'настоящий', 'замечательный', 'оригинальность', 'разнообразие', 'креативный', 'эффективность', 'прогрессивный', 'необычный', 'стабильность', 'интересный', 'научный', 'современный', 'фантастический', 'уникальный', 'культурный', 'творческий', 'индивидуальность', 'продуктивность', 'экологический', 'безграничный', 'уверенность', 'просторный', 'гармоничный'];
const englishWords = ['greeting ', 'funny ', 'beauty ', 'winner ', 'intelligence ', 'amazing ', 'reliable ', 'experiment ', 'melodic ', 'delightful ', 'vegetation ', 'demonstration ', 'enormous ', 'original ', 'perfect ', 'safety ', 'innovative ', 'participant ', 'emotional ', 'diversity ', 'research ', 'high-quality ', 'educational ', 'technological ', 'promising ', 'captivating ', 'cute ', 'genuine ', 'wonderful ', 'originality ', 'variety ', 'creative ', 'efficiency ', 'progressive ', 'unusual ', 'stability ', 'interesting ', 'scientific ', 'modern ', 'fantastic ', 'unique ', 'cultural ', 'creative ', 'individuality ', 'productivity ', 'ecological ', 'boundless ', 'confidence ', 'spacious ', 'harmonious'];
new Game(russianWords).start();
