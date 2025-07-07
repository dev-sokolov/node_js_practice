// Задание 1
// Функции с типизацией
// 1. Создайте функцию `multiply`, которая принимает два числа и возвращает их произведение. Добавьте
// типизацию для параметров и возвращаемого значения.
// 2. Используйте явное указание типов для параметров и результата функции

const multiply = (a: number, b: number): number => {
    return a * b;
}

console.log(multiply(5, 6));

// Задание 2
// Функции с опциональными параметрами
// 1. Создайте функцию `greet`, которая принимает два параметра: имя (`name`) и опциональный параметр
// `greeting`.
// 2. Функция должна выводить строку приветствия, используя `greeting` (если оно указано) или стандартное
// "Hello" в противном случае.

const greet = (name: string, greeting = "Hello"): string => {
    // if(greeting) return `${greeting} ${name}`;
    return `${greeting} ${name}`;    
}

console.log(greet("Ruslan", "Hi"));
console.log(greet("Ruslan"));


// Задание 3
// Стрелочные функции
// Напишите стрелочную функцию `filterEvenNumbers`, которая принимает массив чисел и возвращает новый
// массив, содержащий только четные числа.

const filterEvenNumbers = (arr:number[]): number[] => {
    const evenNumbers = arr.filter((num: number): boolean => !(num % 2));
    return evenNumbers
}

const arrNum = [1, 5, 6, 8, 9, 10]

console.log(filterEvenNumbers(arrNum));

// Задание 4
// Обобщенная функция
// Создайте обобщенную функцию `reverseArray`, которая принимает массив любого типа и возвращает его
// элементы в обратном порядке.

const reverseArray = <T>(arr:T[] ): T[] => {
    return arr.reverse()
}

const arrExample1 = [1, 5, 8] 
// const arrExample2 = [1, 5, 8] 

console.log(reverseArray<number>(arrExample1));



// Задание 6
// Опциональные параметры с дефолтными значениями
// 1. Создайте функцию `calculateDiscount`, которая принимает цену (`price`) и опциональный параметр
// `discountRate` (по умолчанию 10%).
// 2. Функция должна возвращать цену с учетом скидки.


const calculateDiscount = (price: number, discountRate = 10 ): number => {
    return price * (1 - discountRate/100)
}

console.log(calculateDiscount(1000, 20));
console.log(calculateDiscount(1000));

// Задание 7
// Обобщенные функции с несколькими параметрами
// Создайте обобщенную функцию `mergeObjects`, которая принимает два объекта и возвращает новый объект,
// объединяющий их свойства.

const mergeObjects = <T extends object, K extends object>(obj1: T, obj2: K): T & K => {
    return {...obj1, ...obj2}
}

interface Ob1 {
    name: string,
    adress: string
}

interface Ob2 {
    tel: number,
    isMaried: boolean
}

const obj1 = {
    name: "Ruslan",
    adress: "Germany"
}

const obj2 = {
    tel: 123456,
    isMaried: true
}

// console.log(mergeObjects<number, number>(41, 42));
console.log(mergeObjects<Ob1, Ob2>(obj1, obj2));


