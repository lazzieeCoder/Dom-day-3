//!Events
//TODO: Event listener (click,mouse,alert,prompt)
//? steps to create button event
//*create element
//! set attribute to the elements
//! content
/**
 * addEventListener it takes 2 parameters
 * first parameter is event name
 * second parameter is the function that has to be executed
 */
//!append
//!function

/*const button = document.createElement("button")
button.setAttribute("type","button")
button.innerText ="Click Here to Wish"
button.addEventListener("click",foo);
document.body.append(button)
function foo(){
    alert("🌴Happy Onam Folks😍")
}
*/

//!get element

//*Method 1 using functions
/*const btn = document.getElementById("btn")
btn.addEventListener("mouseover",foo1);
function foo1(){
    document.body.style.backgroundColor="red"
}
btn.addEventListener("mouseout",foo2)
function foo2(){
    document.body.style.backgroundColor= ""
}
*/
//*Method 2 using arrow function
/*const btn = document.getElementById("btn")
btn.addEventListener("mouseover",()=>{
    document.body.style.backgroundColor="red"
});
btn.addEventListener("mouseout",()=>{
    document.body.style.backgroundColor=""
});
*/
//* single line function
/*const btn = document.getElementById("btn")
btn.addEventListener("mouseover",()=>document.body.style.backgroundColor="red")
btn.addEventListener("mouseout",()=>document.body.style.backgroundColor="")
*/

//! Color a span/div element content when a user moves the mouse over the element.

//* first approach using getelement
/*
const div = document.getElementById("div1")
div.addEventListener("mouseover",()=>div.style.backgroundColor="red")
div.addEventListener("mouseout",()=>div.style.backgroundColor="")
*/
//* second approach using create element
/*
const div = document.createElement("div")
div.innerText="click here"
document.body.append(div)
div.addEventListener("mouseover",()=>div.style.backgroundColor="red")
div.addEventListener("mouseout",()=>div.style.backgroundColor="")
*/

//!prompt
/*const button = document.createElement("button")
button.innerText="click here"
document.body.append(button)
button.addEventListener("click",foo)

function foo(){
    var res = prompt("Enter your value")
   console.log(res)
}
*/

//!Use prompt to read a value from user and display it in the span element.

/*const element = prompt("Enter your Name")
const span = document.createElement("span")
document.body.append(span)
span.innerHTML= element
*/

//! Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph
/*const element = document.querySelector("h1");
element.addEventListener("click", (e) => {
  document.querySelector(
    "span"
  ).innerText = `Coordinate X = ${e.pageX} and Y = ${e.pageY}`;
});
*/

//! Write a Javascript code for character counts in the textarea
/*const textarea = document.getElementById("inputarea")
textarea.addEventListener("input",(event)=>{
    document.querySelector("span").innerText = `Characters ${event.target.value.length}`
})
*/