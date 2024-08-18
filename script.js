let input = document.getElementById("input")
let add = document.getElementById("add")
let title = document.getElementById("title")
let description = document.getElementById("description")
let priority = document.getElementById("priority")
let main = document.getElementById("main_container")
let output = document.getElementById("output")
let i = 1
console.log(main.value)

// ADDING FUNCTION TO ADD BUTTON
add.addEventListener("click",()=>{

    let division = document.createElement("div")
    division.setAttribute("class","child_div")
    // console.log(title.value)
    division.innerHTML = `
        <div id="info">
           <div><strong>Title</strong> : ${title.value}</div>
           <div><strong>Description</strong> : ${description.value}</div>
           <div><strong>Priority</strong> : ${priority.value}</div>
        </div>
        <div id="btn">
        <button>Delete</button>
        </div>
       
       
       
 
    `
    output.appendChild(division)
    document.addEventListener("DOMContentLoaded",()=>{
    localStorage.setItem(i.to)
    })
    console.log(division)
})
