const input = document.getElementById("tareaInput")
const button = document.getElementById("btn-agregar")
const divTarea = document.getElementById("tareas")
const ultimaTarea = document.getElementById("ultimaTarea")


button.addEventListener('click', function(){
    let tareaValue = input.value
    input.value = ''  ;
    if (tareaValue !=''){
              let tarea = ' ' + tareaValue 
              let crearTarea = document.createElement('h5')
               let txt = document.createTextNode(tarea)
               crearTarea.appendChild(txt)
              divTarea.appendChild(crearTarea)
              localStorage.setItem("Tarea" ,tareaValue)
               ultimaTarea.innerText =  localStorage.getItem("Tarea")
         }
         })



  

