# Задача 2

Написать программу аутентификации пользователя

## Требования

1. Программа должна запускаться через терминал
2. При запуске в терминале должна выводится сообщение `Введите имя`
3. Пользователь может ввести любое значение.
4. Программа должна проверить существует ли пользователь.
5. Если не существует, вывести сообщение `Неизвестный пользователь` и перейти к пункту 2. 
6. Если существует, вывести сообщение `Введите пароль`
7. В случае, если пароль не верный, вывести сообщение `Пароль не верный. Попробуйте еще раз. У вас осталось ${n} попытки` и перейти к пунтку 2.
8. В случае, если пароль верный, вывести сообщение `Привет, ${user}!`
9. Если пользователь ввел 3 раза неверный пароль, вывести сообщение `Вы превысили лимит` и выйти из программы 

## Реализация
1. Создать массив объектов 
```ts
type user = {
  login: string,
  password: string
}

```
2. После ввода имени осуществить поиск по массиву
3. После ввода пароля проверить совпадает ли пароль 
