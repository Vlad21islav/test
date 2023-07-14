const users = require('../users');

function listCommand(params) {
    if (params.take === undefined || params.skip === undefined) {
    console.log('Вы ввели не правильную команду');
    return;
    };

    const take = Number(params.take);
    const skip = Number(params.skip);
    if (Number.isNaN(take) || !Number.isInteger(take) || take <= 0) {
    console.log('Параметр "take" должен быть целым положительным числом и должен быть больше нуля');
    return;
    };

    if (Number.isNaN(skip) || !Number.isInteger(skip) || skip < 0) {
    console.log('Параметр "take" должен быть целым неотрицательным числом и должен быть меньше илиравен нулю');
    return;
    };

    console.table(users.slice(skip, take + skip));
    return;
};
module.exports = listCommand;
