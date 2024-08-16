let input = document.getElementById("input")
let add = document.getElementById("add")
let title = document.getElementById("title")
let description = document.getElementById("description")
let priority = document.getElementById("priority")
let main = document.getElementById("main_container")
console.log(main.value)

// ADDING FUNCTION TO ADD BUTTON
add.addEventListener("click",()=>{

    let division = document.createElement("div")
    division.setAttribute("class","child_div")
    // console.log(title.value)
    division.innerHTML = `
   
       Title : ${title.value}
       Description : ${description.value}
       Priority : ${priority.value} 
    `
    // console.log(division)
    main.appendChild(division)
    // console.log(division)
})
