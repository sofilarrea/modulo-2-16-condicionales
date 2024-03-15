const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("tarea").value.trim();

    if (!taskInput) {
        console.log("You have to put a task");
        return; 
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskInput;



    // Botón eliminar
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function() {
        newTask.remove(); 
    });
    newTask.appendChild(deleteButton);

    const list = document.getElementById("list");
    list.appendChild(newTask);

    document.getElementById("tarea").value = "";
});
