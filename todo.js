let todotextbox = document.getElementById('todo-input')
let todooutputcontainer = document.getElementById('todo-output-container')




let savebtn = document.getElementById('savebtn')

let todoul = document.createElement('ul')



savebtn.addEventListener('click',saveTodoTask)



function saveTodoTask(event){

    let tasklist = document.createElement('li')

    tasklist.style.margin = '10px'
    let taskpara = document.createElement('span')
    taskpara.innerHTML = todotextbox.value
    let taskeditbutton = document.createElement('button')
    taskeditbutton.innerText = "Edit"

    taskeditbutton.style.marginLeft = '20px'


    let taskdeletebutton = document.createElement('button')
    taskdeletebutton.innerText = "Delete"
    taskdeletebutton.style.marginLeft = '20px'
    taskdeletebutton.setAttribute('class','deletebuttonstyle')

    taskeditbutton.setAttribute('class','editbuttonstyle')
    tasklist.appendChild(taskpara)
    tasklist.appendChild(taskeditbutton)
    tasklist.appendChild(taskdeletebutton)
    todoul.appendChild(tasklist)
    todooutputcontainer.appendChild(todoul)
    todotextbox.value = ""
    event.preventDefault()

}