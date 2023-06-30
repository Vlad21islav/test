const changeStatus = require('./changeStatus')

function inputCommandOrIsPasswordRight(line, limit, user) {
  if (line === user.password) {
    changeStatus.changeStatus('waitCommand'); // isUser
    limit = 3
    console.log('Введите команду(введите help(), чтобы вывести список команд): ');
  } else {
    if (limit > 1) {
      limit--;
      console.log(`Пароль не верный. Попробуйте еще раз. y вас осталось ${limit} попытки`);
      console.log(`Введите пароль`);
    } else {
      console.log(`Вы потратили все попытки`);
      process.exit(0);
    };
  };
};
module.exports = inputCommandOrIsPasswordRight;
