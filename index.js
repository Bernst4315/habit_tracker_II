//Variables

const habitDiv = document.querySelector("#habit-div")
const habitEl = document.querySelector("#habitInput-el")
const addBtn = document.querySelector("#addHabit-btn")
const habitList = document.querySelector("#habit-list")
const habitItem = document.querySelector(".habit-item")
const habits = []
console.log(habitList)

//Event Listeners 

document.addEventListener("click", function(e){
    
    switch(e.target.id){
        case "addHabit-btn":
            console.log(e.target.id)
            addHabit()
            break
        case "increment-btn":
            console.log(e.target.id)
            incrementBtn(e)
            break
        default:
          console.log("Click Registered on " + e.target.id)  
    }
})


//Functions

function addHabit(){
   
    let habit = {
        habit: "",
        counter: 0
    }

    habit.habit = habitEl.value

    if(habit.value)
    habits.push(habit)

    // console.log(habits)

    renderHabitList()
    habitEl.value = ""
}

function renderHabitList(){

    let str = ""
    for(let i = 0; i < habits.length; i++){ //find a way to update list w/out rerendering whole array

        str += `
        <li class="border habit-item">
            <h3>${habits[i].habit}</h3>
                <div class="counter">
                    <p data-num ="increment-btn-${habits[i].habit}">${habits[i].counter}</p>
                    <button class="increment-btn" id="increment-btn-${habits[i].habit}">+</button>
                </div>
        </li>
        `
    }
    habitList.innerHTML = str //This updates the DOM once. keep this in mind for efficiency 
}

function incrementBtn(e){
    console.log("registered in increment function " + e.target.id)
    //document.getElementById(``)
}