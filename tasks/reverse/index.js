const words = require('./massages/index')
const Logger = require('./Logger')
const Game = require('./Game')

const LANG = process.env.LANG !== 'rus' && process.env.LANG !== 'eng'
  ? 'rus'
  : process.env.LANG

let massages;
if (LANG === 'rus') {
  massages = require('./massages/rus')
} else if (LANG === 'eng') {
  massages = require('./massages/eng')
} else {
  massages = require('./massages/rus')
}

new Game(words[LANG], new Logger(massages)).start()
