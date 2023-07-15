const sleep = require('./sleep')
const {getState, setState} = require('./variable')
const {isSleep} = getState()

function logWords() {
    console.clear();
    console.log('Запомните слово:');
    console.log(words[word].split('').reverse().join(''));
    sleep(3000).then(() => {
        console.clear();
        console.log('Введите слово правильно');
        rl.prompt();
        sleep(5000).then(() => {
        if (isSleep) {
            console.clear();
            console.log(`время вышло, ваш рекорд ${word}`);
            process.exit(0);
        } else {
            setState({isSleep: true});
        };
        });
    });
};
module.exports = logWords;
