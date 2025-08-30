//Variables

const habitDiv = document.querySelector("#habit-div")
const habitEl = document.querySelector("#habitInput-el")
const addBtn = document.querySelector("#addHabit-btn")
const habitList = document.querySelector("#habit-list")
const habitItem = document.querySelector(".habit-item")
const habits = []
console.log(habitList)

//Event Listeners 

addBtn.addEventListener("click", function(){
   
    let habit = "";
    habit = habitEl.value

    if(habit)
    habits.push(habit)

    addHabit()
    habitEl.value = ""
})

//Functions

function addHabit(){

    //const liEl = document.createElement("li")
    let str = ""
    for(let i = 0; i < habits.length; i++){ //find a way to update list w/out rerendering whole array
        // str += `<li>${habits[i]}</li>`
        str += `
        <div class="border habit-item">
            <h3>${habits[i]}</h3>
                <div class="counter">
                    <p id="${habits[i]}">0</p>
                    <button id="${i}" onClick="increment()">+</button>
                </div>
        </div>
        `
    }
    //habitList.innerHTML = str //This updates the DOM once. keep this in mind for efficiency 
    habitList.innerHTML = str
}
let count = 0

function increment(){
    console.log("click")
    //let pEl = document.getElementById("Walk 10,000 steps a day")
    let pEl = document.getElementsByTagName("p")

    count = count + 1

    pEl.textContent = count
}