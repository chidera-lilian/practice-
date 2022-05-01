//for navbar
//for burger menu
// select elements
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-links")
const navItem = document.querySelectorAll(".nav-tem");

burger.addEventListener("click", function () {
    //toggles the burger
    burger.classList.toggle("is-active");

    //toggles the nav menu
    navMenu.classList.toggle("nav-is-active");
});
//removes well, you should know
navLink.forEach(n => n.addEventListener("click", function () {
    burger.classList.remove("is-active");
    navMenu.classList.remove("nav-is-active");
}));
//end of nav bar

//for typewriter effect
//create an array for the message you want to display
var messageArray = ['Nwosu Chidera,'];
//text position is which array position the animation should start from. 0 means first letter in the array
var textPosition = 0;
//the speed variable indicates how fast the message would go. the lower, the faster
var speed = 170;

function typewriter() {
    document.getElementById("message").innerHTML = messageArray[0].substring(0, textPosition) + "<small>|</small>";

    if (textPosition++ != messageArray[0].length)
        setTimeout(typewriter, speed);
}
window.addEventListener("load", typewriter);
//end of typewriter effect

//for todo list
const input = document.querySelector("input");
const renderItemnsHere = document.querySelector (".task-show");
const allTask = document.getElementsByClassName("all-task")
const bye = document.getElementsByClassName("del-btn");
const container = document.querySelector(".container")
const toDo = document.getElementsByClassName("to-do");
const taskFinished = document.querySelector(".complete");
const itemfin = document.getElementsByClassName("todo-item");
const completebtn = document.getElementsByClassName("completed-btn");
const contain = container;
console.log(contain);

function addMe(){
    //alert(input.value.length);
    if (input.value.length === 0) {
        //alert("add task damn it")
    } else {
        renderItemnsHere.innerHTML += `
        <div class="all-task">
            <p class="todo-item" id="item-todo">
                ${input.value}
            </p>
            <button class="completed-btn" onclick="completed()">
                Done
            </button>

            <button class="del-btn" onclick="removeMe()">
                Delete
            </button>
        </div >`;
        //clears task in the input menu
        input.value = "";
            }

//to remove an item
    removeMe();
    completed();
};
addMe();

function removeMe (){
    if (allTask.length > 0) {
        //alert("okay o")
        for (let i = 0; i < bye.length; i++) {
            bye[i].onclick = function () {
                this.parentElement.remove();
            };

        } 
    }
}

function completed() {
    if (itemfin.length === 0) {
        //alert("nothing in task field")
    } else {
        for (let i = 0; i < itemfin.length; i++) {
            completebtn[i].onclick = function () {
                taskFinished.innerHTML += `
                <div>
                    <p>${itemfin[i].innerHTML}</p>
                    <button class="del-btn" onclick="removeMe()">
                    Remove
                    </button>
                </div>
        `;
                // if (taskFinished.contains(itemfin[i])) {
                //     console.log("funny you")
                // } else {
                //     alert("huhn")
                // }
            };
        }
    }
}
//explanation.
// console logging itemfin returns an array i.e HTMLCollection[] in the console, as a result when you try to add that p tag in the completed section, it returns the number of items in said array. i.e if you have three items in the section, instead of (item1, item2, item3), it returns (0,1,2). to fix it, since itemfin is regarded as an array, you loop through it, add the onclick attribute to the completebtn, then, at whatever index the button is clicked it, let the .innerHTML be returned. :) took me the whole fucking night to do this!!!!!!!!!!!!!!
//end of todo list

//for counter
var count = 0;
var number = document.querySelector(".count-number");
const addBtn = document.querySelector(".add");
const reduceBtn = document.querySelector(".reduce");
const resetBtn = document.querySelector(".reset");
console.log(number.innerHTML);

function increaseMe() {
    addBtn.addEventListener("click", () => {
        count++
        number.textContent = count;
        if (count > 0) {
            number.style.color = "#039e51"
        }
    })
}

function reduceMe() {
    reduceBtn.addEventListener("click", () => {
        count--;
        number.textContent = count;
        if (count < 0) {
            number.style.color = "#932B3F"
        }
    })
}

function resetMe() {
    resetBtn.addEventListener("click", () => {
        count = 0;
        number.textContent = count;
        if (count === 0) {
            number.style.color = "#475569"
        }
        
    })
}
increaseMe();
reduceMe();
resetMe();
//end of counter

