const {getState, setState} = require('./changeStatus')

function inputCommandOrIsPasswordRight(line) {
  const {user, limit} = getState();
  if (line === user.password) {
    setState({status: 'waitCommand', user});
    setState({limit: 3, user});
    console.log('Введите команду(введите help(), чтобы вывести список команд): ');
  } else {
    if (limit > 1) {
      setState({limit: limit - 1, user});
      console.log(`Пароль не верный. Попробуйте еще раз. y вас осталось ${limit - 1} попытки`);
      console.log(`Введите пароль`);
    } else {
      console.log(`Вы потратили все попытки`);
      process.exit(0);
    };
  };
};
module.exports = inputCommandOrIsPasswordRight;
