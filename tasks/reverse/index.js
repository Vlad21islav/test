const massages = require('./massages/index')
const Logger = require('./Logger')
const Game = require('./Game')

let LANG = process.env.LANG !== 'rus' && process.env.LANG !== 'eng'
  ? 'rus'
  : process.env.LANG

if (LANG === 'rus') {
  LANG = 'rus'
} else if (LANG === 'eng') {
  LANG = 'eng'
} else {
  LANG = 'rus'
};

const logger =  new Logger(massages[LANG]) 
const game = new Game(massages[LANG], logger)
game.start()
