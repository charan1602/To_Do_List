let input = document.getElementById("input")
let add = document.getElementById("add")
let title = document.getElementById("title")
let description = document.getElementById("description")
let priority = document.getElementById("priority")
let main = document.getElementById("main_container")
let output = document.getElementById("output")
let i = localStorage.length+1
// console.log(main.value)

// // ADDING FUNCTION TO ADD BUTTON
// add.addEventListener("click",()=>{

// 
// console.log()

add.addEventListener("click",()=>{
    let obj = {
        Title:`${title.value}`,
       Description:`${description.value}`,
       Priority:`${priority.value}`
   }
    // i.toString()
   localStorage.setItem(i,JSON.stringify(obj))
   
   
//    i.toString
  
    //  localStorage.clear()
    //  Number(i)
    //  console.log(typeof(i))
       i = i+1
    //    loading()
   
   })
//  function loading(){
add.addEventListener("click",()=>{
    location.reload()
})
    document.addEventListener("DOMContentLoaded",()=>{
        for(let j = 1;j<=localStorage.length;j++){
            let item = JSON.parse(localStorage.getItem(j))
            let division = document.createElement("div")
            division.setAttribute("class","child_div")
         //    console.log(i.ti)
     
            division.innerHTML = `
                <div data-key=${j} id="info">
                   <div><strong>Title</strong> : ${item.Title}</div>
                   <div><strong>Description</strong> : ${item.Description}</div>
                   <div><strong>Priority</strong> : ${item.Priority}</div>
                </div>
                <div id="btn">
                <button class="delete">Delete</button>
                </div>
            `
            output.appendChild(division)
        }
       })
    //    return output
//  }
let delete_buttons = document.querySelectorAll(".delete")
 delete_buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let delete_item = this.division
        let att = delete_item.getAttribute
    })
 })




