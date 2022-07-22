//data type
let name = " Fisayo" //string
let age = 27 //number
let z= null //null
let y = undefined //undefined
let isMarried = true //boolean

let favColor = ["Yellow", "White", "Purple", "Blue", "Green"] //array

//String
let s="Hello World"

//Task
let m ="I am"
let n =" I go to PWC Bootcamp"
let p =" I love to learn JavaScript"

let fruits =["apple", "banana", "orange", "mango", "pineaple"]
fruits.push('grape', 'strawberry');
fruits.pop()
fruits.shift()
fruits.unshift()

//object variable
const person = {
    name:'Tee',
    height:30,
    isMarried: false,
    greeting: function () {
    console.log('Hello:')
    }

}




//console.log(fruits.indexOf[3])
console.log(fruits)
console.log(m + name + n + " and" + p)
console.log(`${m} ${name} ${n} and ${p}`)
console.error('This is an error')
console.warn('This is a warning');

console.log (age)
console.log (name)
console.log (typeof y)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.length)





//Assignment

//get the DOM elements and assign them to variables

const myForm = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const secondName = document.querySelector("#secondname");
const userAge = document.querySelector(".age");
const userState = document.querySelector("#state");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

let ulElements = document.querySelector("input");

//add event listener to the form
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (firstName.value === "" || secondName.value === "" || userAge.value ==="") {
    msg.classList.add("error");
    msg.innerHTML = "Please fill form";
    setTimeout(() => msg.remove(), 5000);
  } else {
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    li.appendChild(
     document.createTextNode(`${firstName.value} ${secondName.value}`)
    );

    li2.appendChild(
        document.createTextNode(`${userAge.value}`)
       );

       
    li3.appendChild(
        document.createTextNode(`${userState.value}`)
       );

       
       
    userList.appendChild(li);
    userList.appendChild(li2);
    userList.appendChild(li3);
    firstName.value = "";
    secondName.value = "";
    userAge.value ="";
    userState.value = "";
  }
}