let input = document.getElementById("input")
let add = document.getElementById("add")

// ADDING FUNCTION TO ADD BUTTON
add.addEventListener("click",()=>{
    let list_memeber = document.createElement("li")
    list_memeber.innerHTML = `
     ${input.value}
    ` 
    list.appendChild(list_memeber)
})
