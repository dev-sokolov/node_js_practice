// console.log("Hello World!");


// const division =(a: number, b: number): number => {
//     return a / b;
// }
// console.log(division(6, 0))
// //test 3
interface Car{
    make: string;
    model: string;
    year: number;
    isElectric: boolean;
}
const displayCarInfo = (car: Car): void => {
console.log('Car Information:');
console.log(`Make: ${car.make}`);   
console.log(`Model: ${car.model}`);
console.log(`Year: ${car.year}`);
console.log(`Is Electric: ${car.isElectric ? 'Yes' : 'No'}`);
}
const myCar: Car = {
    make: 'Tesla',
    model: 'Model S',
    year: 2022,
    isElectric: true
};
displayCarInfo(myCar);


// //test 4
const arr = [1, 5, 6 ,3, 8]
const  calculateSum = (numbers: number[], ): number => {
    return numbers.reduce((sum: number, num: number): number => sum + num)
}
console.log(calculateSum(arr));

// //test 5

const isAdult = (age: number): boolean => {
    return age >= 18;
}

// console.log(isAdult("test 5"));
// console.log("test 5");
console.log(isAdult(16));
console.log(isAdult(18));

// //test 6

// interface Task {
//     title: string,
//     description: string,
//     isCompleted: boolean 
// }

// const tasks: Task[]=[
//     {title: `feed a cat`, description: `take in something... for cats`, isCompleted: false},
//     {title: `feed a dog`, description: `take in something... for dogs`, isCompleted: true},
// ]

// const showUncompleatedTasks = (tasks: Task[]): void => {
//     console.log(tasks.filter((task: Task): boolean => !task.isCompleted));
// }

// showUncompleatedTasks(tasks)

// //test 7
// const greet = (name: string, age: number): void => {
//     console.log(`Hi ${name}. Your age is ${age}`);
// }
// greet("Gleb", 20);

// //test 7
// const convertToUpperCase = (text: string): string => {
//     return text.toUpperCase();
// }

// console.log(convertToUpperCase("hello my friend"));

console.log("Helo World!");

const division =(a: number, b: number): number => {
    return a / b;
}
console.log(division(6, 0))

console.log("task 6:");


interface Task {
    title: string,
    description: string,
    isCompleted: boolean
}

const taskv : Task[] = [
{title: "Погулять", description: "Поиграть с собакой",isCompleted: false},
{title: "Погулять 2", description: "Поиграть с собакой 2",isCompleted: true},
] 

const isDoneTasks = (taskv:Task[]): void => {
    console.log(taskv.filter((task: Task): boolean => !task.isCompleted ));     
}

isDoneTasks(taskv)

const greet = (name: string, age: number): void => {
    console.log(`Hello ${name}. You are ${age} years old.`);    
}

greet("Oleg", 20);

const convertToUppercase = (text: string): string => {
    return text.toUpperCase()
} 
console.log( convertToUppercase("hello"));





 
