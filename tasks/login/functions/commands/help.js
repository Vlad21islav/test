function listCommand() {
    console.log(`1. add login=name password=password - команда добавления нового пользователя`);
      console.log(`2. delete login=name - команда удаления пользователя (нельзя удалить самого себя)`);
      console.log(`3. exit - выход`);
      console.log(`4. help - выводит список всех команд`);
      console.log(`4. list take=20 skip=10 - выводит список (c 11 по 20 строки)`);
      console.log(`6. clear - отчистить консоль`);
      return;
};
module.exports = listCommand;
