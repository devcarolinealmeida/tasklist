const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => {
    if (inputElement.value.length > 0) {
        return true;
    } else {
        return false;
    }
}

const handleAddTask = () => {
    const inputIsValid = validateInput();
    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener("click", function(event){
        event.target.classList.toggle("completed")
    })

    const deleteItem = document.createElement("i");
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");

    deleteItem.addEventListener("click", function(event){
        event.target.parentNode.classList.add("fadeOut-delete");
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    })

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);
    tasksContainer.appendChild(taskItemContainer);

    inputElement.value =  "";
}

const handleInputChange = () => {
    const inputIsValid = validateInput();
    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
}

addTaskButton.addEventListener("click", function(){
    handleAddTask()
})

inputElement.addEventListener("change", function(){
    handleInputChange()
})
