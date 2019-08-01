//alert("Hello World");

//Console commands
console.error("Oh no!");
console.warn("Almost bad.");
console.log("Hello World!");

//let, const
//let can be changed
//const is CONSTANT

let age = 30;
console.log(age);
age += 1;
console.log(age);

const ageConst = 30;
console.log(ageConst);
//ageConst += 1;
console.log(ageConst);

//Primative Types
//String, Numbers, Boolean, null, undefined, Symbol
const name = "John";
const year = 1999;
let rating = 4.5;
let isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof year);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//Concatenation
//old way
console.log("My name is " + name + " and I am " + age);
//new way
console.log(`My name is ${name} and I am ${age}`);

const s = "Hello World";
console.log(s.length);
console.log(s.substring(0, 5).toUpperCase());

const t = "technology, computers, it, code";
console.log(t.split(", "));

//Arrays
//using Constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
//using brackets
const fruit = ["apples", "oranges", "grapes", "bananas"];
fruit[4] = "mangos";

console.log(fruit);
console.log(fruit[1]);
console.log(fruit[4]);
fruit.push("watermelon");
fruit.unshift("strawberries");
console.log(fruit);

//Object Literals
const person = {
  firstName: "Jim",
  lastName: "Bean",
  age: 30,
  hobbies: ["music", "movies", "games"],
  address: {
    street: "111 Palm Street",
    city: "Boulder",
    state: "CO"
  }
}
console.log(person.hobbies[1]);
console.log(person.address.street);

const {firstName, lastName, address: {city} } = person;
console.log(firstName);
console.log(city);

person.email = "doodlebob61@gmail.com";
console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    completed: true,
  },
  {
    id: 2,
    text: "Do homework",
    completed: false,
  },
  {
    id: 3,
    text: "Show Tim",
    completed: false,
  }
]

console.log(todos[2].text);

//JSON
todoJSON = JSON.stringify(todos);
console.log(JSON);

//Loops
let i = 0;
for(i; i < 5; i++) {
  console.log(`For loop: ${i}`);
}

while(i > 0) {
  i--;
  console.log(`While loop: ${i}`);
}

for(let j = 0; j < todos.length; j++) {
  console.log(todos[j].text);
}

for (let t of todos) {
  console.log(`ID: ${t.id}\nText:${t.text}`);
}

todos.forEach(function(todo) {
  console.log(todo.text)
});

const todoText = todos.map(function(todo) {
  return todo.text;
})
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
});
console.log(todoCompleted);

//Conditionals
const q = 9;
const w = 11;

if (q === 10 && w === 2) {
  console.log(`Q is 10 and W is 2`);
} else if (q > 10) {
  console.log("Q is greater than 10")
}
else {
  console.log("Q is less than 10");
}

const e = 1;
const color = e > 10 ? "Blue" : "Red";
console.log(color);

switch(color) {
  case "Blue":
    console.log("Color is blue!");
    break;
  case "Red":
    console.log("Color is red!");
    break;
  default:
    console.log("I don't know that color");
}

//Functions
function addNums(num1 = 1, num2 = 4) {
  return num1 + num2;
}
console.log(addNums());
console.log(addNums(2, 7));

const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(12, 8))

todos.forEach((todo) => console.log(todo));

//Object Oriented Programming

//Classes
class Person{
  constructor(first, last, dateOfBirth) {
    this.first = first;
    this.last = last;
    this.dateOfBirth = new Date(dateOfBirth);
  }

  getBirthYear() {
    return this.dateOfBirth.getFullYear();
  }

  getFullName() {
    return `${this.first} ${this.last}`;
  }
}

const person1 = new Person("Cade", "Colbeth","6/10/99");
const person2 = new Person("Josh", "Mecl","6/28/99");

console.log(person1);
console.log(person2.first);
console.log(person1.getBirthYear());
console.log(person2.getFullName());

//DOM
//Single Element Selector
console.log(window);
const form = document.getElementById("my-form");
console.log(form);
const contain = document.querySelector(".container");
console.log(contain);

//Multi Element Selector
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = "Hello World!";
//ul.children[1].innerText = "What is up?";
//ul.lastElementChild.innerHTML = "<h1>Hello!</h1>";

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChild(li);
    nameInput.value = "";
    emailInput.value ="";
  }
  console.log(nameInput.value);
}
