
// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\перше заняття з ментором\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// ! приклад використання switch-case:
// ? змінна num може мати 4 значення(1 - зима; 2 - весна; 3 - літо; 4 - осінь;)в залежності від цифри повернемо змінну result

// const num = parseInt(prompt('Введіть число'));

// let result = '';

//   switch (num){
// case 1:
// result = 'зима';
// break;

// case 2:
// result = 'весна';
// break;

// case 3:
// result = 'літо';
// break;

// case 4:
// result = 'осінь';
// break;

// default:
//         result = 'це не пора року'
// }

// alert(result)



//! код за допомогою prompt затитує логін
//? якщо:
//? 1) Введено admin - prompt запитує пароль,;
//? 2) Нічого не введено чи натисли Esc - вивести строк "Скасовано"
//? 3) В інших випадках виводиться: "Я вас не знаю"
//? Перевірка пароля: "Я головний" поверне "Вітаю"
//? В інших випадках "неправильний логін або пароль"


// const userLogin = prompt('Введіть логін');
// const login = 'admin';

// if (userLogin === login) {

//     const userPassword = prompt('Введіть пароль')

//     alert(userPassword === 'Я головний' ? 'Вітаю' : 'неправильний логін або пароль')
    
    
//     //? (альтернатива тернарника) if (userPassword === 'Я головний') {
//     //?    alert('Вітаю')
        
//     //? } else {
//     //?     alert('неправильний логін або пароль')
//     //? };
  

// } else if (userLogin === '' || userLogin === null){
//     alert('Скасовано')

// } else { alert('Я вас не знаю') };



//! додаємо числа через alert
//? При зав. стор. користувачу пропонується ввести число,
//? введене додається до змінної total, операція завершується при натисканні cancel,
//? виводиться повідомлення "сума чисел ${total}"


// let num = prompt('Введіть число');
// let total = 0;
// while (num) {

//   //? перевіримо num на число :
//     if (!Number.isNaN(Number(num))) {
//         total += Number(num);
//     };

//     num = prompt('Введіть число')
// };
// alert(`сума чисел ${total}`)



// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\mode #3/1-3/2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



//? Приклад обєкту:

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//    isPublic: true,
//   rating: 8.38,
// };

//? Приклад масиву об'єктів:

// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];



// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\заняття з ментором 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// ! Потрібно написати функцію logItems(array)
// ? Приймає масив та повертає повідомлення (номер елемента - значення елемента)
// ? Нумерація починається з одиниці.Використовує цикл For.

// function logItems(array) {
//     const x = array;
//     for (let i = 0; i < x.length; i += 1) {
//         let y = `${i + 1} - ${x[i]}`
//         console.log(i)
//         console.log(x);
//         console.log(y);
//     }
// }


// logItems(['g','s','j','f'])



// ! Перевірка на вік.
// ? Якщо age>18 повернеться true.
// ? В іншому випадку через confirm запитає вік та поверне його результат.

// const dfr = prompt('Вкажіть вік')

// function x(age) {
//     return age >= 18 ?  true : confirm(`Вам ${dfr}?`)
    
// };

// console.log(console)



// ! Робота з елементами масиву.
// ? Необхідно додати,замінити,та видалити елемент масиву
// ? В іншому випадку через confirm запитає вік та поверне його результат.

// const x = [1, 2, 3, 4, 5, 6];

// function add(name) {
    
//     x.push(name);

// };

// function remove(name) {
    
//     const index = x.indexOf(name);
//     x.splice(index, 1);
// };

// function update(olName, nawName) {
    
//     const index = x.indexOf(olName);
//     x.splice(index, 1,newName);
// }



// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\mode #4/1-4/2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// ! Робота з колбек-функціями.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// chance code below this line
// function makeMessage(pizzaName,callback) {
//   return callback(pizzaName);
// }
// makeMessage("Royal Grand", makePizza)



//! метод forEach

// const x = [1, 2, 3, 4, 5, 6];

// x.forEach(function (element, index, array) {
//     console.log(`index${index},element${element},${array}`)
// },)



//! МЕТОДИ МАСИВІВ:   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



//! метод map()
// const x = [
//     { smoll: "100", name: "gej", set: 5, on: true},
//     { smoll: "150", name: "dfx", set: 13, on: false},
//     { smoll: "200", name: "kkd", set: 247, on: true},
//     { smoll: "250", name: "gfh", set: 8, on: false},
// ]



//! метод filter()

// const x = [
//     { smoll: "100", name: "gej", set: 5, on: true},
//     { smoll: "150", name: "dfx", set: 13, on: false},
//     { smoll: "200", name: "kkd", set: 247, on: true},
//     { smoll: "250", name: "gfh", set: 8, on: false},
// ]

// const r = x.filter(function (online)  {
//     console.log(online)
//     return online.on === true
//     })
// console.log(r)

// ? короткий запис стрілочною функцією : / const r = x.filter((online) => online.on === true) /



 //! метод find()

//  const x = [
//     { smoll: "100", name: "gej", set: 5, on: true},
//     { smoll: "150", name: "dfx", set: 13, on: false},
//     { smoll: "200", name: "kkd", set: 247, on: true},
//     { smoll: "250", name: "gfh", set: 8, on: false},
// ]

//  const smollOfX = '200'

// const stringSmollOfX = x.find((strings) =>  strings.smoll === smollOfX)

// console.log(stringSmollOfX)



//! метод findIndex()

// const x = [
//     { smoll: "100", name: "gej", set: 5, on: true},
//     { smoll: "150", name: "dfx", set: 13, on: false},
//     { smoll: "200", name: "kkd", set: 247, on: true},
//     { smoll: "250", name: "gfh", set: 8, on: false},
// ]

// const y = x.findIndex(onlines => onlines.on === true)
// console.log(y) // поверне індекс[0]

//? оскільки значення для onlines.on - це буль, то можна записати:
//? onlines => onlines.on

//? використання диструктуризації для цієї функції:

// const y = x.findIndex(({on}) => on )
//  console.log(y)


//! метод every() and some()
// const x = [
//     { smoll: "100", name: "gej", set: 5, on: true},
//     { smoll: "150", name: "dfx", set: 13, on: false},
//     { smoll: "200", name: "kkd", set: 247, on: true},
//     { smoll: "250", name: "gfh", set: 8, on: false},
// ]

// console.log(x.every(({set}) => set >= 6))

// console.log(x.some (({set}) => set >= 6))



//! метод reduce()

// const x = [
//     { smoll: "100", name: "gej", set: 5, on: true},
//     { smoll: "150", name: "dfx", set: 13, on: false},
//     { smoll: "200", name: "kkd", set: 247, on: true},
//     { smoll: "250", name: "gfh", set: 8, on: false},
// ]



//! метод sort()

// const x = [
//     { smoll: "100", name: "gej", set: 5, on: true},
//     { smoll: "150", name: "dfx", set: 13, on: false},
//     { smoll: "200", name: "kkd", set: 247, on: true},
//     { smoll: "250", name: "gfh", set: 8, on: false},
// ]



//? Приклад вирішення задач:
//? Потрібно створити масив символів переданого речення (тільки унікальні символи та їхня кі-сть)

// const test = 'abracadabra'

// const terra = function (arg)  {
//     return [...arg].reduce((acc, item) => {
//         acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1)
//         return acc
//     },{})
// }



// console.log(terra(test))

//? Приклад вирішення задач:
// Задача: знайти найбільше число (51,18,13,24,7,85,19)


// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\mode #5/1-5/2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



//? Приклади використання call() та apply()


// function x(arg1, arg2) {
//         console.log(this[arg1] , `${arg2}`)
// };

// const y = {
//   a : 'Hi',
//   b : 'Bye'
// }

// x.call(y, 'a', 'Petia') //? Для apply() : x.apply(y, ['a' , 'Petia'])



//? Приклади використання bind()

// function foo() {
//     console.log(this.f)
// };

// const test = {
//     f: 'kery'
// };

// const audit = foo.bind(test);
// audit();

//? Приклади використання bind() у callback-функціях

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {

//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer))

//!Прототипне наслідування:

const a = {};

console.log(a);





// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\заняття з ментором 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



//? У forEach() можна передати два аргумента
//? !!! НЕ працює із стрілками!!!

// const n = [1, 2, 5];
// n.forEach(
//     function (num) { console.log(this.a) },

//     { a: 'I am Croot' }
// ); //? три рази поверне 'I am Groot' 




// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\mode #6/2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// //! принцип роботи event.code/key
// //? Виведемо в консоль текст який вводиться в <input>

// const x = document.querySelector('input');
// document.addEventListener('keyup',y);
// function y(event) {
//     console.log(event.code);
//     console.log(event.key);
// };





// !\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



