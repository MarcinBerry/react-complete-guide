//Primitives
let age: number = 12;
age = '12';
let userName: string;
userName = 'Mar';
userName = 12;
let isInstructor: boolean;
isInstructor = false;

//more complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking', 12];

type Person = {
    name: string;
    age: number;
}

let person: { name: string, age: number };
person = {
    name: 'Max',
    age: 32,
}

// person = {
//     isEmployee: true,
// }
let people: Person[];
//Type inference

let course = 'React - Complete Guide';
course = 1234;

let course2: string | number = 'React - The Complete Guide';
course2 = 12;

//Functions & types

function add(a:number , b:number):number {
    return a + b;
}
function createPerson():{name: string, age: number} {
    return {name: "max", age: 21,}
}
function printValue(value: any) {
    console.log(value)
}
function insertAtBeginning<T>(array: T[], value: T) {
    return [value, ...array];
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

updatedArray[0].split('');
