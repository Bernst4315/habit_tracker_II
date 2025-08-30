//Variables

const habitDiv = document.querySelector("#habit-div")
const habitEl = document.querySelector("#habitInput-el")
const addBtn = document.querySelector("#addHabit-btn")
const habitList = document.querySelector("#habit-list")
const habits = []
console.log(habitList)

//Event Listeners 

addBtn.addEventListener("click", function(){
   
    let habit = "";
    habit = habitEl.value
    habits.push(habit)
    console.log(habit)
    habitEl.value = ""
    console.log(habits)
    addHabit()
})

//Functions

function addHabit(){

    //const liEl = document.createElement("li")
    let str = ""
    for(let i = 0; i < habits.length; i++){
        str += `<li>${habits[i]}</li>`
    }
    habitList.innerHTML = str 
}