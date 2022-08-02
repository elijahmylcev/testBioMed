##Задача 1
Необходимо реализовать функцию func3, которая выводит в консоль данные из функций func1 и func2 в виде: 
1 a 
2 b 
3 c 
 
const func3 = () => {
}Ниже представлены func1 и func2
 
    const func1 = (func) => {
      setTimeout(func, 3000, "1");
      setTimeout(func, 2000, "2");
      setTimeout(func, 1000, "4");
      setTimeout(func, 4000, "3");
    }
 
    const func2 = (func) => {
      setTimeout(func, 5000, "c");
      setTimeout(func, 6000, "b");
      setTimeout(func, 7000, "a");
    }
 
Менять тело функций нельзя. 
Данные необходимо получить из этих функций.
Решение вида console.log('1 a') считается неверным решением.
 
##Задача 2
Сделать TODO приложение на React и GraphQL + NestJS. Приложение должно позволять выводить список, добавлять, править и удалять элемент.
