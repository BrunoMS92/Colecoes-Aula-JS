let inputTask = document.getElementById("inputTask")
let tasksList = document.getElementById("tasksList")
let numberOfTasks = document.getElementById("numberOfTasks")

document.querySelector("#btnAddTask").addEventListener("click", () => {
    let taskTest = inputTask.value

    if (taskText != "") {
        let container = document.createElement("div")
        let checkbox = document.createElement("input")
        let label = document.createElement("label")

        label.innerText = taskText
        checkbox.setAttribute("type", "checkbox")

        container.appendChild(checkbox)
        container.appendChild(label)

        tasksList.appendChild(container)
    }
})