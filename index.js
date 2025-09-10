import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@13.0.0/+esm'

//Variables

const habitEl = document.querySelector("#habitInput-el")
const habitList = document.querySelector("#habit-list")
const habits = []

//Event Listeners 

document.addEventListener("click", function(e){
    
    switch(e.target.id){
        case "addHabit-btn":
            addHabit()
            break
        case e.target.id:
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
        counter: 0,
        uuid: uuidv4()
    }

    habit.habit = habitEl.value

    if(habit.habit)
    habits.push(habit)

    console.log(habits)

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
                    <p data-num ="${habits[i].uuid}">${habits[i].counter}</p>
                    <button class="increment-btn" id="${habits[i].uuid}">+</button>
                </div>
        </li>
        `
    }
    habitList.innerHTML = str //This updates the DOM once. keep this in mind for efficiency 
}

function incrementBtn(e){
    console.log("registered in increment function " + e.target.id)
    const habit = habits.filter(function(habit){
       return habit.uuid === e.target.id
    })[0]

    habit.counter ++
    renderHabitList()
    //console.log(habits[0].habit + " from habits array in function" )

    //console.log(habit + "found in increment function")
}