
let ul = document.querySelector("#listContainer")
let button = document.querySelector("#btn")
let ToDoInput = document.querySelector("#ToDoInput")

button.addEventListener("click", function() {

    if( ToDoInput.value === '' ){
        alert("You must write something!")
    }
     if( ToDoInput.value.length > 45) {
        alert( "Your text is too long, Split this task into parts.")
        ToDoInput.value = ''
     }
     if( ToDoInput.value !== ''){
        let li = document.createElement("li")
         li.id = "notesLi"
         li.innerHTML = ToDoInput.value

        let circle = document.createElement("img")
         circle.id = "circle"

        let span = document.createElement("span")
         span.innerHTML = "\u00d7"

         li.innerHTML = ''

         li.appendChild( circle)
         li.appendChild( document.createTextNode( ToDoInput.value))
         li.appendChild( span)

         ul.appendChild(li)

        ToDoInput.value = ''
        ToDoInput.focus()
    }
    SaveTask()
})

ul.addEventListener("click", function(e) {

    if( e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }else if( e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
    ToDoInput.value = ''
    SaveTask()
})

function SaveTask() {
    localStorage.setItem( "ToDo", ul.innerHTML)
}

 function ShowTask() {
      const saved =  localStorage.getItem("ToDo")

// Script was running before DOM was fully loaded,
//  causing ul to be undefined or its content not being properly initialized.
     if( saved) {
        ul.innerHTML = ''
        ul.innerHTML = saved
     }
}
 ShowTask()
